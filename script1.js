let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-inner .portfolio-item');
    const totalItems = items.length;
    
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}
