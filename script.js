const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 1; // Zaczynamy od drugiego zdjęcia jako aktywnego

function updateGallery() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev-slide', 'next-slide');
        
        if (index === currentIndex) {
            slide.classList.add('active');
        } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            slide.classList.add('prev-slide');
        } else if (index === (currentIndex + 1) % slides.length) {
            slide.classList.add('next-slide');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateGallery();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateGallery();
});