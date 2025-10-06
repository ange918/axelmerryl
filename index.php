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
            <div class="hero-buttons">
                <a href="about.php" class="cta-button">Découvrez-moi</a>
            </div>
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
                    ['image' => 'attached_assets/stock_images/live_concert_crowd_a_6a96c8cf.jpg', 'caption' => 'Concert au Zénith - Paris 2024'],
                    ['image' => 'attached_assets/stock_images/live_concert_crowd_a_be19c96d.jpg', 'caption' => 'Ambiance électrique en festival'],
                    ['image' => 'attached_assets/stock_images/live_concert_crowd_a_c0ee4884.jpg', 'caption' => 'Performance live intimiste'],
                    ['image' => 'attached_assets/stock_images/live_concert_crowd_a_155fa487.jpg', 'caption' => 'Foule en délire'],
                    ['image' => 'attached_assets/stock_images/live_concert_crowd_a_8fbf1968.jpg', 'caption' => 'Tournée européenne 2024'],
                    ['image' => 'attached_assets/stock_images/live_concert_crowd_a_9fb99b89.jpg', 'caption' => 'Connexion avec le public']
                ];
                
                foreach ($gallery_images as $index => $item) {
                    echo '<div class="gallery-item" data-index="' . $index . '">
                            <img src="' . $item['image'] . '" alt="' . $item['caption'] . '" loading="lazy">
                            <div class="gallery-overlay">
                                <span class="zoom-icon">🔍</span>
                                <p class="gallery-caption">' . $item['caption'] . '</p>
                            </div>
                          </div>';
                }
                ?>
            </div>
        </div>
    </section>

    <section id="temoignages" class="testimonials-section fade-in-scroll">
        <div class="container">
            <h2 class="section-title centered">Avis des Auditeurs</h2>
            <div class="testimonials-slider">
                <div class="slider-nav prev">&#10094;</div>
                <div class="slider-nav next">&#10095;</div>
                <div class="testimonials-track">
                    <?php
                    $testimonials = [
                        ['quote' => 'Axel Merryl est un artiste exceptionnel ! Son énergie sur scène est contagieuse et sa musique touche le cœur. Un vrai moment de bonheur !', 'author' => 'Sophie Martin', 'role' => 'Fan depuis 3 ans'],
                        ['quote' => 'Je suis allé à son concert au Zénith et c\'était magique. La façon dont il mélange humour et musique est unique. Un talent incroyable !', 'author' => 'Thomas Dubois', 'role' => 'Spectateur régulier'],
                        ['quote' => 'Une découverte musicale extraordinaire. Ses textes sont profonds et sa voix envoutante. Je recommande vivement !', 'author' => 'Marie Leclerc', 'role' => 'Auditrice passionnée'],
                        ['quote' => 'Axel a su me faire rire et pleurer dans la même soirée. C\'est rare de trouver un artiste aussi complet et authentique.', 'author' => 'Julien Moreau', 'role' => 'Mélomane'],
                        ['quote' => 'Ses performances live sont à couper le souffle ! L\'ambiance était électrique et l\'émotion palpable. Une expérience inoubliable.', 'author' => 'Camille Bernard', 'role' => 'Fan club membre'],
                        ['quote' => 'J\'ai assisté à plusieurs de ses concerts et à chaque fois je suis impressionné par son professionnalisme et sa proximité avec le public.', 'author' => 'Lucas Petit', 'role' => 'Suiveur fidèle'],
                        ['quote' => 'La musique d\'Axel Merryl m\'accompagne au quotidien. Ses mélodies sont addictives et ses paroles résonnent en moi.', 'author' => 'Emma Rousseau', 'role' => 'Auditrice quotidienne'],
                        ['quote' => 'Un artiste qui ne laisse personne indifférent. Son charisme et son talent font de chaque concert un moment mémorable.', 'author' => 'Alexandre Durand', 'role' => 'Amateur de spectacles'],
                        ['quote' => 'Axel Merryl est une véritable révélation ! Sa capacité à créer une connexion avec son public est remarquable.', 'author' => 'Léa Fontaine', 'role' => 'Nouvelle fan'],
                        ['quote' => 'Des paroles qui touchent, une voix qui porte, et une présence scénique incomparable. Axel est un artiste complet !', 'author' => 'Nicolas Vincent', 'role' => 'Critique musical amateur'],
                        ['quote' => 'J\'ai eu la chance de le voir en festival et c\'était le meilleur moment de la journée. Un artiste à suivre absolument !', 'author' => 'Chloé Garnier', 'role' => 'Festivalière'],
                        ['quote' => 'Axel Merryl m\'a fait redécouvrir l\'amour de la musique live. Chaque concert est une nouvelle aventure émotionnelle.', 'author' => 'Pierre Lambert', 'role' => 'Auditeur enthousiaste']
                    ];
                    
                    foreach ($testimonials as $testimonial) {
                        echo '<div class="testimonial-card">
                                <div class="testimonial-stars">★★★★★</div>
                                <p class="testimonial-quote">' . $testimonial['quote'] . '</p>
                                <p class="testimonial-author">' . $testimonial['author'] . '</p>
                                <p class="testimonial-role">' . $testimonial['role'] . '</p>
                              </div>';
                    }
                    ?>
                </div>
                <div class="slider-dots"></div>
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
