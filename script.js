// Slider de proyectos

const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const slides = sliderTrack.children;

/**
 * Actualiza la posición del slider según el índice actual
 */
function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Botón anterior
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Botón siguiente
nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

// Actualizar slider al cambiar tamaño de ventana para mantener responsividad
window.addEventListener('resize', updateSlider);

// Inicializar posición slider al cargar
window.addEventListener('load', updateSlider);