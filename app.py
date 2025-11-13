from flask import Flask, request, jsonify, send_from_directory, session
from flask_cors import CORS
import sqlite3
import hashlib
import os
import json
from datetime import datetime, timedelta
from functools import wraps
import secrets

app = Flask(__name__, static_folder='.')
app.secret_key = secrets.token_hex(32)
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
app.config['SESSION_COOKIE_SECURE'] = False
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=24)
CORS(app, supports_credentials=True)

DATABASE = 'admin_dashboard.db'
UPLOAD_FOLDER = 'attached_assets/stock_images'

def get_db():
    db = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
    return db

def init_db():
    db = get_db()
    cursor = db.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS admin_password (
            id INTEGER PRIMARY KEY,
            password_hash TEXT NOT NULL
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            date TEXT NOT NULL,
            location TEXT NOT NULL,
            time TEXT NOT NULL,
            image TEXT,
            description TEXT,
            ticket_link TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS gallery_images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT NOT NULL,
            alt_text TEXT,
            added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    cursor.execute('SELECT COUNT(*) FROM admin_password')
    if cursor.fetchone()[0] == 0:
        default_password = 'ELLEOAXEL'
        password_hash = hashlib.sha256(default_password.encode()).hexdigest()
        cursor.execute('INSERT INTO admin_password (id, password_hash) VALUES (1, ?)', (password_hash,))
    
    cursor.execute('SELECT COUNT(*) FROM gallery_images')
    if cursor.fetchone()[0] == 0:
        default_images = [
            ('1.jpeg', 'Axel Merryl'),
            ('2.jpeg', 'Axel Merryl'),
            ('3.jpeg', 'Axel Merryl'),
            ('4.jpeg', 'Axel Merryl'),
            ('5.jpeg', 'Axel Merryl'),
            ('6.jpeg', 'Axel Merryl'),
            ('7.jpeg', 'Axel Merryl'),
            ('8.jpeg', 'Axel Merryl'),
            ('9.jpg', 'Axel Merryl'),
            ('10.jpg', 'Axel Merryl'),
            ('11.jpg', 'Axel Merryl'),
            ('12.jpg', 'Axel Merryl'),
            ('13.jpg', 'Axel Merryl'),
            ('14.jpg', 'Axel Merryl'),
            ('15.jpg', 'Axel Merryl'),
            ('16.jpeg', 'Axel Merryl'),
            ('17.jpeg', 'Axel Merryl'),
            ('18.png', 'Axel Merryl'),
            ('19.png', 'Axel Merryl'),
            ('20.png', 'Axel Merryl'),
            ('21.png', 'Axel Merryl'),
        ]
        cursor.executemany('INSERT INTO gallery_images (filename, alt_text) VALUES (?, ?)', default_images)
    
    db.commit()
    db.close()

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('logged_in'):
            return jsonify({'error': 'Unauthorized'}), 401
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/admin')
def serve_admin():
    return send_from_directory('.', 'admin.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    password = data.get('password', '')
    
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT password_hash FROM admin_password WHERE id = 1')
    result = cursor.fetchone()
    db.close()
    
    if result and result['password_hash'] == password_hash:
        session['logged_in'] = True
        session.permanent = True
        return jsonify({'success': True})
    
    return jsonify({'success': False, 'error': 'Mot de passe incorrect'}), 401

@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop('logged_in', None)
    return jsonify({'success': True})

@app.route('/api/check-auth', methods=['GET'])
def check_auth():
    return jsonify({'authenticated': session.get('logged_in', False)})

@app.route('/api/change-password', methods=['POST'])
@login_required
def change_password():
    data = request.json
    old_password = data.get('old_password', '')
    new_password = data.get('new_password', '')
    
    if not new_password or len(new_password) < 6:
        return jsonify({'error': 'Le nouveau mot de passe doit contenir au moins 6 caractères'}), 400
    
    old_hash = hashlib.sha256(old_password.encode()).hexdigest()
    
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT password_hash FROM admin_password WHERE id = 1')
    result = cursor.fetchone()
    
    if not result or result['password_hash'] != old_hash:
        db.close()
        return jsonify({'error': 'Ancien mot de passe incorrect'}), 401
    
    new_hash = hashlib.sha256(new_password.encode()).hexdigest()
    cursor.execute('UPDATE admin_password SET password_hash = ? WHERE id = 1', (new_hash,))
    db.commit()
    db.close()
    
    return jsonify({'success': True})

@app.route('/api/events', methods=['GET'])
def get_events():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM events ORDER BY date ASC')
    events = [dict(row) for row in cursor.fetchall()]
    db.close()
    return jsonify(events)

@app.route('/api/events', methods=['POST'])
@login_required
def add_event():
    data = request.json
    
    required_fields = ['name', 'date', 'location', 'time']
    for field in required_fields:
        if not data.get(field):
            return jsonify({'error': f'Le champ {field} est requis'}), 400
    
    db = get_db()
    cursor = db.cursor()
    cursor.execute('''
        INSERT INTO events (name, date, location, time, image, description, ticket_link)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (
        data['name'],
        data['date'],
        data['location'],
        data['time'],
        data.get('image', ''),
        data.get('description', ''),
        data.get('ticket_link', '')
    ))
    db.commit()
    event_id = cursor.lastrowid
    db.close()
    
    return jsonify({'success': True, 'id': event_id})

@app.route('/api/events/<int:event_id>', methods=['PUT'])
@login_required
def update_event(event_id):
    data = request.json
    
    db = get_db()
    cursor = db.cursor()
    cursor.execute('''
        UPDATE events
        SET name = ?, date = ?, location = ?, time = ?, image = ?, description = ?, ticket_link = ?
        WHERE id = ?
    ''', (
        data['name'],
        data['date'],
        data['location'],
        data['time'],
        data.get('image', ''),
        data.get('description', ''),
        data.get('ticket_link', ''),
        event_id
    ))
    db.commit()
    db.close()
    
    return jsonify({'success': True})

@app.route('/api/events/<int:event_id>', methods=['DELETE'])
@login_required
def delete_event(event_id):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('DELETE FROM events WHERE id = ?', (event_id,))
    db.commit()
    db.close()
    
    return jsonify({'success': True})

@app.route('/api/gallery', methods=['GET'])
def get_gallery():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM gallery_images ORDER BY added_at DESC')
    images = [dict(row) for row in cursor.fetchall()]
    db.close()
    return jsonify(images)

@app.route('/api/gallery', methods=['POST'])
@login_required
def add_gallery_image():
    data = request.json
    filename = data.get('filename')
    alt_text = data.get('alt_text', 'Axel Merryl')
    
    if not filename:
        return jsonify({'error': 'Le nom du fichier est requis'}), 400
    
    db = get_db()
    cursor = db.cursor()
    cursor.execute('INSERT INTO gallery_images (filename, alt_text) VALUES (?, ?)', (filename, alt_text))
    db.commit()
    image_id = cursor.lastrowid
    db.close()
    
    return jsonify({'success': True, 'id': image_id})

@app.route('/api/gallery/<int:image_id>', methods=['DELETE'])
@login_required
def delete_gallery_image(image_id):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('DELETE FROM gallery_images WHERE id = ?', (image_id,))
    db.commit()
    db.close()
    
    return jsonify({'success': True})

@app.route('/api/upload-image', methods=['POST'])
@login_required
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'Aucun fichier fourni'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Aucun fichier sélectionné'}), 400
    
    if file:
        filename = secure_filename_custom(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        return jsonify({'success': True, 'filename': filename})
    
    return jsonify({'error': 'Erreur lors du téléchargement'}), 500

def secure_filename_custom(filename):
    import re
    filename = re.sub(r'[^\w\s.-]', '', filename)
    return filename.replace(' ', '_')

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)
