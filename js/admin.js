const API_BASE = window.location.origin + '/api';

const loginScreen = document.getElementById('login-screen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

const navItems = document.querySelectorAll('.nav-item[data-section]');
const sections = document.querySelectorAll('.section');
const logoutBtn = document.getElementById('logout-btn');

const eventModal = document.getElementById('event-modal');
const galleryModal = document.getElementById('gallery-modal');
const eventForm = document.getElementById('event-form');
const galleryForm = document.getElementById('gallery-form');

let currentEventId = null;

async function checkAuth() {
    try {
        const response = await fetch(`${API_BASE}/check-auth`, {
            credentials: 'include'
        });
        const data = await response.json();
        
        if (data.authenticated) {
            showDashboard();
        } else {
            showLogin();
        }
    } catch (error) {
        console.error('Auth check error:', error);
        showLogin();
    }
}

function showLogin() {
    loginScreen.style.display = 'flex';
    dashboard.style.display = 'none';
}

function showDashboard() {
    loginScreen.style.display = 'none';
    dashboard.style.display = 'flex';
    loadEvents();
    loadGallery();
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch(`${API_BASE}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            showDashboard();
        } else {
            loginError.textContent = data.error || 'Mot de passe incorrect';
            loginError.classList.add('show');
        }
    } catch (error) {
        loginError.textContent = 'Erreur de connexion';
        loginError.classList.add('show');
    }
});

logoutBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    try {
        await fetch(`${API_BASE}/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        
        showLogin();
    } catch (error) {
        console.error('Logout error:', error);
    }
});

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const sectionId = item.dataset.section;
        
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(`${sectionId}-section`).classList.add('active');
    });
});

document.getElementById('add-event-btn').addEventListener('click', () => {
    currentEventId = null;
    document.getElementById('modal-title').textContent = 'Nouvel Événement';
    eventForm.reset();
    eventModal.classList.add('show');
});

document.getElementById('add-gallery-btn').addEventListener('click', () => {
    galleryForm.reset();
    galleryModal.classList.add('show');
});

document.querySelectorAll('.modal-close, .modal-cancel').forEach(btn => {
    btn.addEventListener('click', () => {
        eventModal.classList.remove('show');
        galleryModal.classList.remove('show');
    });
});

window.addEventListener('click', (e) => {
    if (e.target === eventModal) {
        eventModal.classList.remove('show');
    }
    if (e.target === galleryModal) {
        galleryModal.classList.remove('show');
    }
});

async function loadEvents() {
    try {
        const response = await fetch(`${API_BASE}/events`);
        const events = await response.json();
        
        const eventsList = document.getElementById('events-list');
        
        if (events.length === 0) {
            eventsList.innerHTML = '<p style="color: rgba(245, 245, 220, 0.6); text-align: center; padding: 2rem;">Aucun événement pour le moment</p>';
            return;
        }
        
        eventsList.innerHTML = events.map(event => `
            <div class="event-item">
                <div class="event-item-header">
                    <div>
                        <h3 class="event-item-title">${event.name}</h3>
                    </div>
                    <div class="event-item-actions">
                        <button class="btn-icon" onclick="editEvent(${event.id})">
                            <i class='bx bx-edit'></i>
                        </button>
                        <button class="btn-icon danger" onclick="deleteEvent(${event.id})">
                            <i class='bx bx-trash'></i>
                        </button>
                    </div>
                </div>
                <div class="event-item-info">
                    <p><strong>Date:</strong> ${formatDate(event.date)}</p>
                    <p><strong>Heure:</strong> ${event.time}</p>
                    <p><strong>Lieu:</strong> ${event.location}</p>
                    ${event.description ? `<p><strong>Description:</strong> ${event.description}</p>` : ''}
                    ${event.ticket_link ? `<p><strong>Réservation:</strong> <a href="${event.ticket_link}" target="_blank" style="color: var(--color-gold);">Lien</a></p>` : ''}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

window.editEvent = async function(id) {
    try {
        const response = await fetch(`${API_BASE}/events`);
        const events = await response.json();
        const event = events.find(e => e.id === id);
        
        if (!event) return;
        
        currentEventId = id;
        document.getElementById('modal-title').textContent = 'Modifier Événement';
        document.getElementById('event-id').value = id;
        document.getElementById('event-name').value = event.name;
        document.getElementById('event-date').value = event.date;
        document.getElementById('event-time').value = event.time;
        document.getElementById('event-location').value = event.location;
        document.getElementById('event-image').value = event.image || '';
        document.getElementById('event-description').value = event.description || '';
        document.getElementById('event-ticket-link').value = event.ticket_link || '';
        
        eventModal.classList.add('show');
    } catch (error) {
        console.error('Error loading event:', error);
    }
};

window.deleteEvent = async function(id) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/events/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        
        if (response.ok) {
            loadEvents();
        }
    } catch (error) {
        console.error('Error deleting event:', error);
    }
};

eventForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const eventData = {
        name: document.getElementById('event-name').value,
        date: document.getElementById('event-date').value,
        time: document.getElementById('event-time').value,
        location: document.getElementById('event-location').value,
        image: document.getElementById('event-image').value,
        description: document.getElementById('event-description').value,
        ticket_link: document.getElementById('event-ticket-link').value
    };
    
    try {
        const url = currentEventId 
            ? `${API_BASE}/events/${currentEventId}`
            : `${API_BASE}/events`;
        const method = currentEventId ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(eventData)
        });
        
        if (response.ok) {
            eventModal.classList.remove('show');
            loadEvents();
        }
    } catch (error) {
        console.error('Error saving event:', error);
    }
});

async function loadGallery() {
    try {
        const response = await fetch(`${API_BASE}/gallery`);
        const images = await response.json();
        
        const galleryList = document.getElementById('gallery-list');
        
        if (images.length === 0) {
            galleryList.innerHTML = '<p style="color: rgba(245, 245, 220, 0.6); text-align: center; padding: 2rem; grid-column: 1/-1;">Aucune image dans la galerie</p>';
            return;
        }
        
        galleryList.innerHTML = images.map(image => `
            <div class="gallery-item">
                <img src="attached_assets/stock_images/${image.filename}" 
                     alt="${image.alt_text}" 
                     class="gallery-item-image"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%23333%22 width=%22200%22 height=%22200%22/><text fill=%22%23666%22 x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22>Image non trouvée</text></svg>'">
                <div class="gallery-item-actions">
                    <span class="gallery-item-name">${image.filename}</span>
                    <button class="btn-icon danger" onclick="deleteGalleryImage(${image.id})">
                        <i class='bx bx-trash'></i>
                    </button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading gallery:', error);
    }
}

window.deleteGalleryImage = async function(id) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette image ?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/gallery/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        
        if (response.ok) {
            loadGallery();
        }
    } catch (error) {
        console.error('Error deleting image:', error);
    }
};

galleryForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const imageData = {
        filename: document.getElementById('gallery-filename').value,
        alt_text: document.getElementById('gallery-alt').value
    };
    
    try {
        const response = await fetch(`${API_BASE}/gallery`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(imageData)
        });
        
        if (response.ok) {
            galleryModal.classList.remove('show');
            loadGallery();
        }
    } catch (error) {
        console.error('Error adding image:', error);
    }
});

const changePasswordForm = document.getElementById('change-password-form');
const passwordError = document.getElementById('password-error');
const passwordSuccess = document.getElementById('password-success');

changePasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    passwordError.classList.remove('show');
    passwordSuccess.classList.remove('show');
    
    const oldPassword = document.getElementById('old-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (newPassword !== confirmPassword) {
        passwordError.textContent = 'Les mots de passe ne correspondent pas';
        passwordError.classList.add('show');
        return;
    }
    
    if (newPassword.length < 6) {
        passwordError.textContent = 'Le nouveau mot de passe doit contenir au moins 6 caractères';
        passwordError.classList.add('show');
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/change-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                old_password: oldPassword,
                new_password: newPassword
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            passwordSuccess.textContent = 'Mot de passe modifié avec succès !';
            passwordSuccess.classList.add('show');
            changePasswordForm.reset();
        } else {
            passwordError.textContent = data.error || 'Erreur lors du changement de mot de passe';
            passwordError.classList.add('show');
        }
    } catch (error) {
        passwordError.textContent = 'Erreur de connexion';
        passwordError.classList.add('show');
    }
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
}

checkAuth();
