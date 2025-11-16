import http.server
import socketserver
import os
import socket

PORT = 5000

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '-1')
        super().end_headers()

Handler = NoCacheHTTPRequestHandler

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

with ReusableTCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Serveur démarré sur le port {PORT}")
    print(f"Accédez au site via http://0.0.0.0:{PORT}")
    httpd.serve_forever()
