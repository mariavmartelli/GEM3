function getItemsPerPage() {
  const w = window.innerWidth;
  if (w <= 767) return 1;      // Mobile
  if (w <= 991) return 2;      // Tablet
  return 3;                    // Desktop
}

function applyTransform(slideIndex) {
  const container = document.querySelector('#events .slider-container');
  const slider = document.getElementById('slider');

  const pageWidth = container.clientWidth;

  slider.style.transform = `translateX(${-slideIndex * pageWidth}px)`;
  slider.dataset.slide = String(slideIndex);
}

function moveSlide(direction) {
  const slider = document.getElementById('slider');
  const items = slider.querySelectorAll('.event-item');
  const perPage = getItemsPerPage();
  const totalSlides = Math.ceil(items.length / perPage);

  let current = parseInt(slider.dataset.slide || '0', 10);
  current += direction;
  if (current < 0) current = 0;
  if (current > totalSlides - 1) current = totalSlides - 1;

  applyTransform(current);

  const [prevBtn, nextBtn] = document.querySelectorAll('.slider-btn');
  if (prevBtn && nextBtn) {
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === totalSlides - 1;
  }
}

function resetSlider() {
  applyTransform(0);
  const [prevBtn, nextBtn] = document.querySelectorAll('.slider-btn');
  if (prevBtn && nextBtn) {
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  resetSlider();
  
  window.addEventListener('resize', resetSlider);
});
