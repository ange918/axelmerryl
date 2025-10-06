<?php 
$page_title = 'À Propos';
include 'includes/header.php'; 
?>

    <section class="page-hero" style="background-image: url('attached_assets/stock_images/musician_portrait_dr_1f15e7d9.jpg');">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
            <h1 class="page-title">À Propos</h1>
            <p class="page-subtitle">Découvrez l'histoire et la passion d'Axel Merryl</p>
        </div>
    </section>

    <section class="about-bio fade-in-scroll">
        <div class="container">
            <div class="about-bio-grid">
                <div class="about-bio-image">
                    <img src="attached_assets/stock_images/artist_portrait_blac_4c30983d.jpg" alt="Axel Merryl" loading="lazy">
                </div>
                <div class="about-bio-content">
                    <h2 class="section-title">Biographie Complète</h2>
                    <div class="bio-text">
                        <p class="highlight-text">"Chaque performance est une histoire, chaque chanson une invitation à ressentir."</p>
                        
                        <p>Né d'une passion précoce pour la musique et l'art de raconter des histoires, Axel Merryl a su créer un univers artistique unique où l'humour rencontre la mélodie. Dès son plus jeune âge, il s'est nourri d'influences diverses, du jazz au rock en passant par la chanson française, façonnant ainsi un style qui lui est propre.</p>

                        <p>Son parcours l'a mené des petites scènes intimistes aux grandes salles de concert, avec toujours la même énergie et la même authenticité. Autodidacte passionné, il a perfectionné son art au fil des années, développant une présence scénique captivante et une signature musicale reconnaissable entre toutes.</p>

                        <p>Au-delà de la scène, Axel est un créateur infatigable. En studio, il explore constamment de nouvelles sonorités, collabore avec d'autres artistes et repousse les limites de sa créativité. Son approche artistique unique mêle composition originale, improvisation et une touche d'humour qui rend chaque spectacle mémorable.</p>

                        <p>Aujourd'hui, Axel Merryl continue d'écrire son histoire, une note à la fois, une performance après l'autre, toujours guidé par cette passion brûlante qui anime chacune de ses créations.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="qualities-section fade-in-scroll">
        <div class="container">
            <h2 class="section-title centered">Qualités Artistiques</h2>
            <div class="qualities-grid">
                <div class="quality-card">
                    <div class="quality-icon">🎵</div>
                    <h3>Polyvalence Musicale</h3>
                    <p>Maîtrise de multiples styles musicaux, du jazz à la pop en passant par le blues et la chanson française.</p>
                </div>
                <div class="quality-card">
                    <div class="quality-icon">🎭</div>
                    <h3>Performance Scénique</h3>
                    <p>Présence charismatique et capacité unique à connecter avec le public à travers l'humour et l'émotion.</p>
                </div>
                <div class="quality-card">
                    <div class="quality-icon">✍️</div>
                    <h3>Composition Originale</h3>
                    <p>Créateur de mélodies captivantes et de textes profonds qui touchent le cœur et l'esprit.</p>
                </div>
                <div class="quality-card">
                    <div class="quality-icon">🎸</div>
                    <h3>Multi-instrumentiste</h3>
                    <p>Virtuose de plusieurs instruments, apportant richesse et diversité à ses créations musicales.</p>
                </div>
                <div class="quality-card">
                    <div class="quality-icon">🎬</div>
                    <h3>Vision Artistique</h3>
                    <p>Approche créative globale intégrant musique, visuel et storytelling pour des expériences immersives.</p>
                </div>
                <div class="quality-card">
                    <div class="quality-icon">🌟</div>
                    <h3>Authenticité</h3>
                    <p>Fidélité à soi-même et à ses valeurs, créant une connexion sincère et durable avec son audience.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="blog-section fade-in-scroll">
        <div class="container">
            <h2 class="section-title centered">Blog & Actualités</h2>
            <div class="blog-grid">
                <?php
                $blog_posts = [
                    [
                        'image' => 'attached_assets/stock_images/artist_writing_creat_f4675584.jpg',
                        'date' => '1 OCT 2025',
                        'title' => 'Le processus créatif derrière mon nouvel album',
                        'excerpt' => 'Plongez dans les coulisses de la création musicale et découvrez comment chaque chanson prend vie, de l\'inspiration initiale à l\'enregistrement final.'
                    ],
                    [
                        'image' => 'attached_assets/stock_images/music_studio_equipme_3e667c24.jpg',
                        'date' => '15 SEPT 2025',
                        'title' => 'Réflexions sur la tournée d\'été',
                        'excerpt' => 'Retour sur une tournée exceptionnelle qui m\'a permis de rencontrer des publics extraordinaires et de vivre des moments inoubliables sur scène.'
                    ],
                    [
                        'image' => 'attached_assets/stock_images/artist_writing_creat_49ac04d2.jpg',
                        'date' => '28 AOÛT 2025',
                        'title' => 'L\'importance de l\'humour dans la musique',
                        'excerpt' => 'Comment j\'utilise l\'humour comme pont entre l\'artiste et le public, créant des moments de complicité et de partage authentique.'
                    ],
                    [
                        'image' => 'attached_assets/stock_images/music_studio_equipme_864e79bd.jpg',
                        'date' => '10 AOÛT 2025',
                        'title' => 'Mes influences musicales',
                        'excerpt' => 'De mes premiers disques vinyles aux artistes contemporains, découvrez les musiciens qui ont façonné mon univers artistique au fil des années.'
                    ],
                    [
                        'image' => 'attached_assets/stock_images/music_studio_equipme_fd8f6c1d.jpg',
                        'date' => '22 JUIL 2025',
                        'title' => 'En studio : nouvelles compositions',
                        'excerpt' => 'Actuellement en studio pour travailler sur de nouvelles compositions qui verront bientôt le jour. Un aperçu exclusif de ce qui vous attend.'
                    ],
                    [
                        'image' => 'attached_assets/stock_images/live_concert_crowd_a_6a96c8cf.jpg',
                        'date' => '5 JUIL 2025',
                        'title' => 'La magie de la scène',
                        'excerpt' => 'Pourquoi chaque concert est unique et comment l\'énergie du public transforme chaque performance en une expérience inoubliable.'
                    ]
                ];
                
                foreach ($blog_posts as $post) {
                    echo '<article class="blog-card">
                            <div class="blog-image" style="background-image: url(\'' . $post['image'] . '\');"></div>
                            <div class="blog-content">
                                <span class="blog-date">' . $post['date'] . '</span>
                                <h3 class="blog-title">' . $post['title'] . '</h3>
                                <p class="blog-excerpt">' . $post['excerpt'] . '</p>
                                <a href="#" class="blog-link">Lire la suite →</a>
                            </div>
                          </article>';
                }
                ?>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
