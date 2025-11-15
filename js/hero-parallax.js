// HERO CINÉMATIQUE - Animations premium au chargement
(function() {
    'use strict';
    
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    // Ajoute une classe pour indiquer que les animations sont prêtes
    window.addEventListener('load', function() {
        heroSection.classList.add('hero-loaded');
    });
    
    // Animation de l'indicateur de scroll (apparaît après les autres animations)
    const scrollIndicator = heroSection.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        setTimeout(() => {
            scrollIndicator.style.opacity = '1';
        }, 2000);
    }
    
    // Effet supplémentaire : léger mouvement de parallax au scroll (optionnel, très subtil)
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const heroContent = heroSection.querySelector('.hero-content');
                
                if (heroContent && scrolled < window.innerHeight) {
                    // Parallax très subtil au scroll
                    const offset = scrolled * 0.3;
                    heroContent.style.transform = `translateY(${offset}px)`;
                    heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
    
    console.log('HERO Cinématique initialisé');
})();
