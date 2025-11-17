document.addEventListener('DOMContentLoaded', function() {
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const parallaxBg = document.querySelector('.parallax-bg');
        if (parallaxBg) {
            const offset = scrollTop * 0.5;
            parallaxBg.style.transform = `translateY(${offset}px)`;
        }
        
        lastScrollTop = scrollTop;
    });

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    let galleryImages = [];

    function initializeGalleryLightbox() {
        const galleryItems = document.querySelectorAll('.carousel-slide img');
        const allImages = Array.from(galleryItems).map(img => img.src);
        const halfLength = Math.floor(allImages.length / 2);
        galleryImages = allImages.slice(0, halfLength);
        
        galleryItems.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => showLightbox(index % halfLength));
        });
    }

    function showLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = galleryImages[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        const carouselTrack = document.querySelector('.carousel-track');
        if (carouselTrack) {
            carouselTrack.style.animationPlayState = 'paused';
        }
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        const carouselTrack = document.querySelector('.carousel-track');
        if (carouselTrack) {
            carouselTrack.style.animationPlayState = 'running';
        }
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    if (lightbox && lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
        if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);
    }

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    });

    const clipCards = document.querySelectorAll('.clip-card');
    clipCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Clip clicked:', this.querySelector('.clip-title').textContent);
        });
    });

    const eventButtons = document.querySelectorAll('.event-button');
    eventButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const venue = this.closest('.event-card').querySelector('.event-venue').textContent;
            alert(`Réservation pour: ${venue}\n\nCette fonctionnalité sera bientôt disponible!`);
        });
    });

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        const track = testimonialsSlider.querySelector('.testimonials-track');
        const slides = testimonialsSlider.querySelectorAll('.testimonial-card');
        const prevBtn = testimonialsSlider.querySelector('.slider-nav.prev');
        const nextBtn = testimonialsSlider.querySelector('.slider-nav.next');
        const dotsContainer = testimonialsSlider.querySelector('.slider-dots');
        
        // Vérification que tous les éléments nécessaires existent
        if (!dotsContainer || !track || slides.length === 0) {
            return;
        }
        
        let currentSlide = 0;
        let autoSlideInterval;
        
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        
        function updateSlider() {
            if (track) {
                track.style.transform = `translateX(-${currentSlide * 100}%)`;
            }
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
            resetAutoSlide();
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        }
        
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }
        
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    const trackItems = document.querySelectorAll('.track-item');
    const nowPlayingCover = document.querySelector('.now-playing-cover img');
    const trackName = document.querySelector('.track-name');
    const artistName = document.querySelector('.artist-name');

    trackItems.forEach(track => {
        const playBtn = track.querySelector('.track-play-btn');
        
        if (playBtn) {
            playBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const title = track.getAttribute('data-track-title');
                const album = track.getAttribute('data-track-album');
                
                if (trackName && artistName) {
                    trackName.textContent = title;
                    artistName.textContent = 'Axel Merryl';
                }

                trackItems.forEach(t => t.classList.remove('playing'));
                track.classList.add('playing');
            });
        }

        track.addEventListener('click', function() {
            const title = this.getAttribute('data-track-title');
            const album = this.getAttribute('data-track-album');
            
            if (trackName && artistName) {
                trackName.textContent = title;
                artistName.textContent = 'Axel Merryl';
            }

            trackItems.forEach(t => t.classList.remove('playing'));
            this.classList.add('playing');
        });
    });
});

    // Trophy Modal Functionality
    const trophyModal = document.getElementById('trophyModal');
    const trophyBtns = document.querySelectorAll('.trophy-details-btn');
    const modalClose = document.querySelector('.trophy-modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    // Trophy data for each award
    const trophyData = {
        bsa: {
            title: 'BÉNIN SHOWBIZ AWARDS',
            categories: [
                {
                    title: 'BSA d\'Or (Meilleur Artiste de l\'Année)',
                    year: '2023',
                    description: 'Décerné à Axel Merryl pour son tube « Kimi » lors de la cérémonie du 15 décembre 2023.',
                    image: 'attached_assets/stock_images/trophé 1.jpeg'
                },
                {
                    title: 'Meilleur Clip de l\'Année',
                    year: '2023',
                    description: 'Remis au clip de « Kimi », une production visuelle exceptionnelle qui a marqué l\'année.',
                    image: 'attached_assets/stock_images/trophé 2.jpeg'
                },
                {
                    title: 'Meilleur Single de l\'Année',
                    year: '2023',
                    description: 'Le single « Kimi » a été sacré meilleur titre de l\'année pour son impact musical.',
                    image: 'attached_assets/stock_images/trophé3.jpeg'
                }
            ]
        },
        arawo: {
            title: 'ÀRÀWÒ AMBASSADEUR AWARDS',
            categories: [
                {
                    title: 'Meilleur Artiste Masculin Bénin',
                    year: '2025',
                    description: 'Lors de la 5ᵉ édition des Ambassadeur Awards à Cotonou, Axel Merryl a été sacré meilleur artiste masculin du Bénin.',
                    image: 'attached_assets/stock_images/trophé 4.jpeg'
                },
                {
                    title: 'Meilleure Collaboration de l\'Année',
                    year: '2025',
                    description: 'Prix de la meilleure collaboration pour son duo avec le groupe Toofan sur le single « Gba Gba », sorti en avril 2025.',
                    image: 'attached_assets/stock_images/trophé 5.jpeg'
                }
            ]
        },
        primud: {
            title: 'PRIMUD - PRIX INTERNATIONAUX DE LA MUSIQUE URBAINE',
            categories: [
                {
                    title: 'Meilleur Artiste de l\'Afrique de l\'Ouest',
                    year: '2024',
                    description: 'Décerné à Axel Merryl lors de la 9ᵉ édition des PRIMUD à Abidjan (10 novembre 2024), reconnaissant son influence dans la région.',
                    image: 'attached_assets/stock_images/axel-merryl-primud-meilleur-artiste-afrique-de-louest.jpg'
                }
            ]
        }
    };

    function openTrophyModal(awardKey) {
        const data = trophyData[awardKey];
        if (!data) return;

        modalTitle.textContent = data.title;
        
        let categoriesHTML = '<div class="trophy-category-grid">';
        data.categories.forEach(category => {
            categoriesHTML += `
                <div class="trophy-category-card">
                    <img src="${category.image}" alt="${category.title}" loading="lazy" />
                    <h4>${category.title}</h4>
                    <p class="trophy-year">${category.year}</p>
                    <p>${category.description}</p>
                </div>
            `;
        });
        categoriesHTML += '</div>';
        
        modalBody.innerHTML = categoriesHTML;
        trophyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeTrophyModal() {
        trophyModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (trophyBtns.length > 0 && trophyModal) {
        trophyBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const awardKey = this.getAttribute('data-award');
                openTrophyModal(awardKey);
            });
        });

        modalClose.addEventListener('click', closeTrophyModal);

        trophyModal.addEventListener('click', function(e) {
            if (e.target === trophyModal) {
                closeTrophyModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && trophyModal.classList.contains('active')) {
                closeTrophyModal();
            }
        });
    }

    // Duplicate carousel slides for seamless infinite loop
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        const slides = carouselTrack.querySelectorAll('.carousel-slide');
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            carouselTrack.appendChild(clone);
        });
    }

    // Video Modal Functionality
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('youtubePlayer');
    const videoModalClose = document.querySelector('.video-modal-close');
    
    function extractYouTubeID(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }
    
    function openVideoModal(videoUrl) {
        const videoId = extractYouTubeID(videoUrl);
        if (videoId) {
            videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeVideoModal() {
        videoPlayer.src = '';
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    const latestClipCards = document.querySelectorAll('.latest-clip-card');
    latestClipCards.forEach(card => {
        const thumbnail = card.querySelector('.latest-clip-thumbnail');
        const watchButton = card.querySelector('.watch-button');
        
        if (thumbnail && watchButton) {
            const videoUrl = watchButton.getAttribute('href');
            
            thumbnail.addEventListener('click', function(e) {
                e.preventDefault();
                openVideoModal(videoUrl);
            });
            
            watchButton.addEventListener('click', function(e) {
                e.preventDefault();
                openVideoModal(videoUrl);
            });
        }
    });
    
    if (videoModalClose) {
        videoModalClose.addEventListener('click', closeVideoModal);
    }
    
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    function loadStaticEvents() {
        const events = [
            {
                name: 'Concert Live',
                date: '2025-12-20',
                location: 'Palais des Congrès',
                time: '20h00',
                description: 'Grande soirée musicale avec Axel Merryl en concert exceptionnel',
                ticket_link: ''
            },
            {
                name: 'Sortie Album "Température"',
                date: '2026-01-15',
                location: 'Cotonou',
                time: '18h30',
                description: 'Lancement officiel du nouvel album avec showcase privé',
                ticket_link: ''
            },
            {
                name: 'Festival Afro Beats',
                date: '2026-02-28',
                location: 'Stade de l\'Amitié',
                time: '19h00',
                description: 'Axel Merryl en tête d\'affiche du plus grand festival de la région',
                ticket_link: ''
            }
        ];
        
        const eventsList = document.querySelector('.events-list');
        if (!eventsList) return;
        
        if (events.length === 0) {
            eventsList.innerHTML = '<p style="color: rgba(245, 245, 220, 0.6); text-align: center; padding: 2rem;">Aucun événement prévu pour le moment</p>';
            return;
        }
        
        eventsList.innerHTML = events.map(event => {
            const eventDate = new Date(event.date);
            const day = eventDate.getDate();
            const monthNames = ['JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUN', 'JUL', 'AOU', 'SEP', 'OCT', 'NOV', 'DÉC'];
            const month = monthNames[eventDate.getMonth()];
            const year = eventDate.getFullYear();
            
            return `
                <div class="event-card">
                    <div class="event-date">
                        <span class="date-day">${day}</span>
                        <span class="date-month">${month} ${year}</span>
                    </div>
                    <div class="event-info">
                        <h3 class="event-venue">${event.location} - ${event.name}</h3>
                        <p class="event-time">${event.time}</p>
                        ${event.description ? `<p class="event-description" style="margin-top: 0.5rem; color: rgba(245, 245, 220, 0.8); font-size: 0.95rem;">${event.description}</p>` : ''}
                    </div>
                    ${event.ticket_link ? 
                        `<a href="${event.ticket_link}" target="_blank" rel="noopener noreferrer" class="event-button">Réserver</a>` :
                        `<a href="#" class="event-button" onclick="alert('Billetterie bientôt disponible'); return false;">Réserver</a>`
                    }
                </div>
            `;
        }).join('');
    }

    function loadStaticGallery() {
        const images = [
            {filename: '1.jpeg', alt_text: 'Axel Merryl'},
            {filename: '2.jpeg', alt_text: 'Axel Merryl'},
            {filename: '3.jpeg', alt_text: 'Axel Merryl'},
            {filename: '4.jpeg', alt_text: 'Axel Merryl'},
            {filename: '5.jpeg', alt_text: 'Axel Merryl'},
            {filename: '6.jpeg', alt_text: 'Axel Merryl'},
            {filename: '7.jpeg', alt_text: 'Axel Merryl'},
            {filename: '8.jpeg', alt_text: 'Axel Merryl'},
            {filename: '9.jpg', alt_text: 'Axel Merryl'},
            {filename: '10.jpg', alt_text: 'Axel Merryl'},
            {filename: '11.jpg', alt_text: 'Axel Merryl'},
            {filename: '12.jpg', alt_text: 'Axel Merryl'},
            {filename: '13.jpg', alt_text: 'Axel Merryl'},
            {filename: '14.jpg', alt_text: 'Axel Merryl'},
            {filename: '15.jpg', alt_text: 'Axel Merryl'},
            {filename: '16.jpeg', alt_text: 'Axel Merryl'},
            {filename: '17.jpeg', alt_text: 'Axel Merryl'},
            {filename: '18.png', alt_text: 'Axel Merryl'},
            {filename: '19.png', alt_text: 'Axel Merryl'},
            {filename: '20.png', alt_text: 'Axel Merryl'},
            {filename: '21.png', alt_text: 'Axel Merryl'}
        ];
        
        const carouselTrack = document.querySelector('.carousel-track');
        if (!carouselTrack) return;
        
        const doubleImages = [...images, ...images];
        
        carouselTrack.innerHTML = doubleImages.map(image => `
            <div class="carousel-slide">
                <img src="attached_assets/stock_images/${image.filename}" alt="${image.alt_text}" loading="lazy" />
            </div>
        `).join('');
        
        if (typeof initializeGalleryLightbox === 'function') {
            initializeGalleryLightbox();
        }
    }

    loadStaticEvents();
    loadStaticGallery();

    // Sticky Music Player
    const stickyPlayer = document.getElementById('sticky-player');
    const playerContainer = document.getElementById('player-iframe-container');
    const playerCloseBtn = document.querySelector('.player-close-btn');

    function extractSpotifyID(urlOrId) {
        if (!urlOrId) return null;
        
        if (urlOrId.includes('spotify.com')) {
            const parts = urlOrId.split('/track/');
            if (parts.length > 1) {
                return parts[1].split('?')[0];
            }
        }
        
        return urlOrId;
    }

    function playTrack(spotifyIdOrUrl) {
        const spotifyId = extractSpotifyID(spotifyIdOrUrl);
        if (!spotifyId) return;
        
        const embedUrl = `https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator`;
        playerContainer.innerHTML = `
            <iframe 
                src="${embedUrl}" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        `;
        if (stickyPlayer) {
            stickyPlayer.classList.add('active');
        }
    }

    function closePlayer() {
        if (stickyPlayer) {
            stickyPlayer.classList.remove('active');
            setTimeout(() => {
                playerContainer.innerHTML = '';
            }, 400);
        }
    }

    // Music page - Spotify play buttons (titres populaires)
    const spotifyPlayBtns = document.querySelectorAll('.spotify-play-btn');
    if (spotifyPlayBtns.length > 0) {
        spotifyPlayBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const trackItem = this.closest('.track-item');
                const spotifyId = trackItem.getAttribute('data-spotify-id');
                if (spotifyId) {
                    playTrack(spotifyId);
                }
            });
        });
    }

    // Album page - Track play buttons
    const albumPlayBtns = document.querySelectorAll('.track-play-btn-spotify');
    if (albumPlayBtns.length > 0) {
        albumPlayBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const track = this.closest('.playlist-track');
                const spotifyUrl = track.getAttribute('data-spotify-url');
                if (spotifyUrl) {
                    playTrack(spotifyUrl);
                }
            });
        });
    }

    // Close player button
    if (playerCloseBtn) {
        playerCloseBtn.addEventListener('click', closePlayer);
    }

    // Close player with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && stickyPlayer && stickyPlayer.classList.contains('active')) {
            closePlayer();
        }
    });
