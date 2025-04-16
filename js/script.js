document.addEventListener('DOMContentLoaded', function() {
    // Scroll reveal animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        reset: true
    });

    sr.reveal('#about, #history, #services, #mayor, #news, #partners, #contact', {
        interval: 200
    });

    // Parallax effect for banner
    window.addEventListener('scroll', function() {
        const banner = document.getElementById('banner');
        let offset = window.pageYOffset;
        banner.style.backgroundPositionY = offset * 0.7 + 'px';
    });

    // Interactive service cards
    const serviceCards = document.querySelectorAll('.service-cards .card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.classList.add('hover');
        });
        card.addEventListener('mouseout', function() {
            card.classList.remove('hover');
        });
    });

    // Set a single background image for the banner
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = 'url(assets/images/miami-toamasina.jpg)';
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    // Continuous sliding for news carousel
    const newsCarousel = document.querySelector('.news-carousel');
    const newsCards = document.querySelectorAll('.news-card');
    let currentIndex = 0;

    function slideNews() {
        newsCarousel.style.transition = 'transform 1s linear';
        newsCarousel.style.transform = `translateX(-${currentIndex * 320}px)`;
        currentIndex++;
        if (currentIndex >= newsCards.length) {
            setTimeout(() => {
                newsCarousel.style.transition = 'none';
                newsCarousel.style.transform = 'translateX(0)';
                currentIndex = 0;
            }, 1000);
        }
    }

    setInterval(slideNews, 2000); // Slide every 2 seconds
}); 