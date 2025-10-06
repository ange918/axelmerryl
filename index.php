<?php 
$page_title = 'Accueil';
include 'includes/header.php'; 
?>

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
                        <a href="about.php" class="cta-button-secondary">En savoir plus</a>
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
            <div class="text-center" style="margin-top: 3rem;">
                <a href="music.php" class="cta-button-secondary">Voir toute la discographie</a>
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

    <div id="lightbox" class="lightbox">
        <span class="lightbox-close">&times;</span>
        <span class="lightbox-prev">&#10094;</span>
        <span class="lightbox-next">&#10095;</span>
        <img src="" alt="Gallery image" class="lightbox-image">
    </div>

<?php include 'includes/footer.php'; ?>
