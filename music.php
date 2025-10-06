<?php 
$page_title = 'Musique';
include 'includes/header.php'; 
?>

    <section class="page-hero">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
            <h1 class="page-title">Discographie</h1>
            <p class="page-subtitle">Explorez l'univers musical d'Axel Merryl</p>
        </div>
    </section>

    <section class="discography-section fade-in-scroll">
        <div class="container">
            <h2 class="section-title centered">Albums & EPs</h2>
            <div class="albums-grid">
                <?php
                $albums = [
                    [
                        'cover' => 'attached_assets/stock_images/vinyl_records_album__c1e8368c.jpg',
                        'title' => 'Lumières Nocturnes',
                        'year' => '2025',
                        'type' => 'Album',
                        'tracks' => 12,
                        'duration' => '48:32'
                    ],
                    [
                        'cover' => 'attached_assets/stock_images/vinyl_records_album__738ac928.jpg',
                        'title' => 'Échos du Silence',
                        'year' => '2024',
                        'type' => 'Album',
                        'tracks' => 10,
                        'duration' => '42:15'
                    ],
                    [
                        'cover' => 'attached_assets/stock_images/vinyl_records_album__4b94a309.jpg',
                        'title' => 'Instants Volés',
                        'year' => '2023',
                        'type' => 'EP',
                        'tracks' => 6,
                        'duration' => '22:48'
                    ]
                ];
                
                foreach ($albums as $album) {
                    echo '<div class="album-card">
                            <div class="album-cover">
                                <img src="' . $album['cover'] . '" alt="' . $album['title'] . '" loading="lazy">
                                <div class="album-overlay">
                                    <button class="play-button-large">▶</button>
                                </div>
                            </div>
                            <div class="album-info">
                                <h3 class="album-title">' . $album['title'] . '</h3>
                                <p class="album-meta">' . $album['year'] . ' • ' . $album['type'] . '</p>
                                <p class="album-details">' . $album['tracks'] . ' titres • ' . $album['duration'] . '</p>
                            </div>
                          </div>';
                }
                ?>
            </div>
        </div>
    </section>

    <section class="player-section fade-in-scroll">
        <div class="container">
            <h2 class="section-title centered">Titres Populaires</h2>
            <div class="music-player">
                <div class="player-header">
                    <div class="now-playing-info">
                        <div class="now-playing-cover">
                            <img src="attached_assets/stock_images/vinyl_records_album__c1e8368c.jpg" alt="Album cover">
                        </div>
                        <div class="now-playing-text">
                            <h4 class="track-name">Sélectionner un titre</h4>
                            <p class="artist-name">Axel Merryl</p>
                        </div>
                    </div>
                </div>

                <div class="playlist">
                    <?php
                    $tracks = [
                        ['number' => 1, 'title' => 'Lumières de la Ville', 'album' => 'Lumières Nocturnes', 'duration' => '4:32'],
                        ['number' => 2, 'title' => 'Rires sous la Pluie', 'album' => 'Lumières Nocturnes', 'duration' => '3:45'],
                        ['number' => 3, 'title' => 'Mélodie Oubliée', 'album' => 'Échos du Silence', 'duration' => '4:18'],
                        ['number' => 4, 'title' => 'Danse avec l\'Ombre', 'album' => 'Lumières Nocturnes', 'duration' => '3:55'],
                        ['number' => 5, 'title' => 'Souvenirs Dorés', 'album' => 'Échos du Silence', 'duration' => '5:02'],
                        ['number' => 6, 'title' => 'Entre Deux Mondes', 'album' => 'Instants Volés', 'duration' => '3:28'],
                        ['number' => 7, 'title' => 'L\'Écho de Ton Rire', 'album' => 'Lumières Nocturnes', 'duration' => '4:10'],
                        ['number' => 8, 'title' => 'Nuit Étoilée', 'album' => 'Échos du Silence', 'duration' => '4:42'],
                        ['number' => 9, 'title' => 'Instant Présent', 'album' => 'Instants Volés', 'duration' => '3:15'],
                        ['number' => 10, 'title' => 'Voyage Intérieur', 'album' => 'Lumières Nocturnes', 'duration' => '5:20']
                    ];
                    
                    foreach ($tracks as $track) {
                        echo '<div class="track-item" data-track-title="' . $track['title'] . '" data-track-album="' . $track['album'] . '">
                                <div class="track-number">' . $track['number'] . '</div>
                                <div class="track-play">
                                    <button class="track-play-btn">▶</button>
                                </div>
                                <div class="track-info-wrapper">
                                    <div class="track-title-name">' . $track['title'] . '</div>
                                    <div class="track-album-name">' . $track['album'] . '</div>
                                </div>
                                <div class="track-duration">' . $track['duration'] . '</div>
                              </div>';
                    }
                    ?>
                </div>
            </div>
        </div>
    </section>

    <section class="streaming-section fade-in-scroll">
        <div class="container">
            <h2 class="section-title centered">Écoutez sur vos plateformes préférées</h2>
            <div class="streaming-platforms">
                <a href="#" class="platform-link">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span>Spotify</span>
                </a>
                <a href="#" class="platform-link">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube Music</span>
                </a>
                <a href="#" class="platform-link">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.994 6.124c0-.738-.065-1.47-.24-2.184-.317-1.31-1.062-2.31-2.288-3.034C20.363.281 19.12 0 17.776 0H6.224C4.881 0 3.638.28 2.534.906 1.308 1.63.563 2.63.246 3.94.065 4.654 0 5.386 0 6.124v11.752c0 .738.065 1.47.246 2.184.317 1.31 1.062 2.31 2.288 3.034C3.638 23.72 4.881 24 6.224 24h11.552c1.343 0 2.586-.28 3.69-.906 1.226-.724 1.971-1.724 2.288-3.034.175-.714.24-1.446.24-2.184V6.124zm-11.788 5.67l4.352 1.672c-1.384.942-3.042 1.584-4.938 1.584-2.468 0-4.71-1.031-6.292-2.684l-.03.03c.033-.03.064-.064.096-.096.025-.025.054-.054.08-.08.014-.011.022-.022.035-.033.038-.039.08-.083.119-.122.016-.016.031-.031.046-.047.05-.051.097-.102.145-.153.005-.005.009-.009.014-.014C7.2 10.148 9.326 9 11.727 9c2.148 0 4.089.851 5.516 2.23l1.663-4.325c-1.643-1.278-3.7-2.042-5.943-2.042-5.17 0-9.394 4.135-9.598 9.282l-.001.01c0 .005-.002.01-.002.015V14.185v.015c.001.005.001.01.002.015.204 5.147 4.428 9.282 9.598 9.282 2.242 0 4.3-.764 5.943-2.042l-1.663-4.325c-1.427 1.379-3.368 2.23-5.516 2.23-2.401 0-4.527-1.148-5.894-2.924-.005-.005-.009-.009-.014-.014-.048-.051-.096-.102-.145-.153-.015-.016-.03-.031-.046-.047-.04-.039-.081-.083-.119-.122-.013-.011-.022-.022-.035-.033-.027-.026-.056-.055-.08-.08-.032-.032-.063-.066-.096-.096l.03.03C5.85 13.762 7.097 12.76 8.605 12.2l3.601 1.384v-.79z"/>
                    </svg>
                    <span>Apple Music</span>
                </a>
                <a href="#" class="platform-link">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.495 4.496 9.991 9.991 9.991 5.495 0 9.991-4.496 9.991-9.991 0-5.495-4.446-9.991-9.991-9.991zm0 18.5c-4.697 0-8.509-3.812-8.509-8.509s3.812-8.509 8.509-8.509 8.509 3.812 8.509 8.509-3.812 8.509-8.509 8.509zm-.165-13.539c1.925 0 3.487 1.562 3.487 3.487 0 1.925-1.562 3.487-3.487 3.487-1.925 0-3.487-1.562-3.487-3.487 0-1.925 1.562-3.487 3.487-3.487z"/>
                    </svg>
                    <span>Deezer</span>
                </a>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
