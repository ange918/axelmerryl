document.addEventListener('DOMContentLoaded', function() {
    
    // Fix pour la galerie carousel
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    
    if (carouselSlides.length > 0 && lightbox && lightboxImg) {
        const uniqueSlides = Array.from(carouselSlides).slice(0, Math.floor(carouselSlides.length / 2));
        const galleryImages = uniqueSlides.map(item => item.querySelector('img').src);
        let currentImageIndex = 0;

        function showCarouselLightbox(index) {
            currentImageIndex = index;
            if (galleryImages[index]) {
                lightboxImg.src = galleryImages[index];
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        uniqueSlides.forEach((item, index) => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                showCarouselLightbox(index);
            });
        });
    }
});
