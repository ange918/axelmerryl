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

    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    const galleryImages = Array.from(galleryItems).map(item => item.querySelector('img').src);

    function showLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = galleryImages[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => showLightbox(index));
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', showNextImage);
    lightboxPrev.addEventListener('click', showPrevImage);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
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
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
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
