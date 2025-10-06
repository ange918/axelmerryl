<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Axel Merryl - Humour & Musique</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
</head>
<body>
    <section id="hero" class="hero-section">
        <div class="hero-image parallax-bg" style="background-image: url('attached_assets/stock_images/dark_concert_stage_w_6909e422.jpg');"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content fade-in">
            <h1 class="hero-title">Axel Merryl</h1>
            <p class="hero-subtitle">Humour & Musique</p>
            <a href="#musique" class="cta-button">Découvrir</a>
        </div>
        <div class="scroll-indicator">
            <span></span>
        </div>
    </section>

    <section id="biographie" class="bio-section fade-in-scroll">
        <div class="container">
            <div class="bio-grid">
                <div class="bio-image">
                    <img src="attached_assets/stock_images/artist_portrait_blac_4c30983d.jpg" alt="Axel Merryl" loading="lazy">
                </div>
                <div class="bio-content">
                    <h2 class="section-title">À Propos</h2>
                    <div class="bio-text">
                        <p class="highlight-text">"La musique et l'humour sont mes deux langages pour toucher les cœurs."</p>
                        <p>Artiste passionné et créatif, Axel Merryl fusionne l'humour et la musique pour créer des performances uniques et inoubliables. Avec un style qui mélange énergie scénique et sensibilité artistique, il captive son public à travers des spectacles qui touchent autant qu'ils divertissent.</p>
                        <p>De la scène aux studios, Axel continue d'explorer de nouveaux horizons créatifs, toujours à la recherche de cette connexion authentique avec son audience.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="musique" class="clips-section fade-in-scroll">
        <div class="container">
            <h2 class="section-title centered">Musique & Clips</h2>
            <div class="clips-grid">
                <?php
                $clips = [
                    ['image' => 'attached_assets/stock_images/music_video_producti_05a64604.jpg', 'title' => 'Performance Live #1'],
                    ['image' => 'attached_assets/stock_images/music_video_producti_b357f3b7.jpg', 'title' => 'Studio Sessions'],
                    ['image' => 'attached_assets/stock_images/music_video_producti_597733a7.jpg', 'title' => 'Acoustic Set'],
                    ['image' => 'attached_assets/stock_images/music_video_producti_0ff3471a.jpg', 'title' => 'Latest Release']
                ];
                
                foreach ($clips as $clip) {
                    echo '<div class="clip-card">
                            <div class="clip-image" style="background-image: url(\'' . $clip['image'] . '\');"></div>
                            <div class="clip-overlay">
                                <div class="play-icon">▶</div>
                                <h3 class="clip-title">' . $clip['title'] . '</h3>
                            </div>
                          </div>';
                }
                ?>
            </div>
        </div>
    </section>

    <section id="evenements" class="events-section fade-in-scroll">
        <div class="container">
            <h2 class="section-title centered">Prochains Événements</h2>
            <div class="events-list">
                <?php
                $events = [
                    ['date' => '15 OCT 2025', 'venue' => 'Le Zénith - Paris', 'time' => '20h00'],
                    ['date' => '22 OCT 2025', 'venue' => 'La Cigale - Lyon', 'time' => '21h00'],
                    ['date' => '05 NOV 2025', 'venue' => 'Le Dôme - Marseille', 'time' => '20h30'],
                    ['date' => '18 NOV 2025', 'venue' => 'L\'Olympia - Paris', 'time' => '19h30']
                ];
                
                foreach ($events as $event) {
                    echo '<div class="event-card">
                            <div class="event-date">
                                <span class="date-day">' . substr($event['date'], 0, 2) . '</span>
                                <span class="date-month">' . substr($event['date'], 3) . '</span>
                            </div>
                            <div class="event-info">
                                <h3 class="event-venue">' . $event['venue'] . '</h3>
                                <p class="event-time">' . $event['time'] . '</p>
                            </div>
                            <a href="#" class="event-button">Réserver</a>
                          </div>';
                }
                ?>
            </div>
        </div>
    </section>

    <section id="galerie" class="gallery-section fade-in-scroll">
        <div class="container-full">
            <h2 class="section-title centered">Galerie</h2>
            <div class="gallery-grid">
                <?php
                $gallery_images = [
                    'attached_assets/stock_images/live_concert_crowd_a_6a96c8cf.jpg',
                    'attached_assets/stock_images/live_concert_crowd_a_be19c96d.jpg',
                    'attached_assets/stock_images/live_concert_crowd_a_c0ee4884.jpg',
                    'attached_assets/stock_images/live_concert_crowd_a_155fa487.jpg',
                    'attached_assets/stock_images/live_concert_crowd_a_8fbf1968.jpg',
                    'attached_assets/stock_images/live_concert_crowd_a_9fb99b89.jpg'
                ];
                
                foreach ($gallery_images as $index => $image) {
                    echo '<div class="gallery-item" data-index="' . $index . '">
                            <img src="' . $image . '" alt="Concert photo ' . ($index + 1) . '" loading="lazy">
                            <div class="gallery-overlay">
                                <span class="zoom-icon">🔍</span>
                            </div>
                          </div>';
                }
                ?>
            </div>
        </div>
    </section>

    <footer id="footer" class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-social">
                    <h3>Suivez-moi</h3>
                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="Instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="YouTube">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Spotify">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Facebook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="footer-contact">
                    <h3>Contact</h3>
                    <p>Booking & Management<br>
                    <a href="mailto:contact@axelmerryl.com">contact@axelmerryl.com</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> Axel Merryl. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <div id="lightbox" class="lightbox">
        <span class="lightbox-close">&times;</span>
        <span class="lightbox-prev">&#10094;</span>
        <span class="lightbox-next">&#10095;</span>
        <img src="" alt="Gallery image" class="lightbox-image">
    </div>

    <script src="js/script.js"></script>
</body>
</html>
