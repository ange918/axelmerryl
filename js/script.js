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

    if (galleryItems.length > 0 && lightbox && lightboxClose) {
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => showLightbox(index));
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxNext.addEventListener('click', showNextImage);
        lightboxPrev.addEventListener('click', showPrevImage);
    }

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

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
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
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
        
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });
        
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });
        
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
