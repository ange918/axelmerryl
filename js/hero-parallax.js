// HERO PARALLAX - Effet parallax au mouvement de la souris
(function() {
    'use strict';
    
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const parallaxElements = heroSection.querySelectorAll('[data-parallax-speed]');
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    // Détection mobile
    const isMobile = window.innerWidth <= 768 || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    
    // Désactive le parallax souris sur mobile pour de meilleures performances
    if (isMobile) {
        console.log('Mobile détecté - Parallax souris désactivé');
        return;
    }
    
    // Détection de prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        console.log('Reduced motion préféré - Parallax désactivé');
        return;
    }
    
    // Gestionnaire de mouvement de souris
    function handleMouseMove(e) {
        const rect = heroSection.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calcul de la position relative au centre (normalisé entre -1 et 1)
        mouseX = (e.clientX - rect.left - centerX) / centerX;
        mouseY = (e.clientY - rect.top - centerY) / centerY;
    }
    
    // Animation fluide avec requestAnimationFrame
    function animate() {
        // Interpolation lisse (easing)
        const ease = 0.1;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;
        
        // Application du parallax à chaque élément
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-parallax-speed')) || 10;
            const moveX = currentX * speed;
            const moveY = currentY * speed;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        requestAnimationFrame(animate);
    }
    
    // Initialisation
    heroSection.addEventListener('mousemove', handleMouseMove);
    
    // Réinitialisation quand la souris quitte
    heroSection.addEventListener('mouseleave', () => {
        mouseX = 0;
        mouseY = 0;
    });
    
    // Démarrage de l'animation
    animate();
    
    console.log('HERO Parallax initialisé - ' + parallaxElements.length + ' éléments animés');
})();
