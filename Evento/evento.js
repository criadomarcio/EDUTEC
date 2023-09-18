// Função para avançar para o próximo slide
function next() {
  const slides = document.querySelectorAll('.slide-container');
  const activeSlide = document.querySelector('.slide-container.active');

  const activeIndex = Array.from(slides).indexOf(activeSlide);

  activeSlide.classList.remove('active');

  if (activeIndex === slides.length - 1) {
    slides[0].classList.add('active');
  } else {
    slides[activeIndex + 1].classList.add('active');
  }
}

// Função para voltar para o slide anterior
function prev() {
  const slides = document.querySelectorAll('.slide-container');
  const activeSlide = document.querySelector('.slide-container.active');

  const activeIndex = Array.from(slides).indexOf(activeSlide);

  activeSlide.classList.remove('active');

  if (activeIndex === 0) {
    slides[slides.length - 1].classList.add('active');
  } else {
    slides[activeIndex - 1].classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tracker = document.querySelector('.cursor-tracker');
  const trackerSize = tracker.offsetWidth;
  let trackerX = 0;
  let trackerY = 0;
  let mouseX = 0;
  let mouseY = 0;
  const speed = 0.05;
  let isVisible = false;

  document.addEventListener('mousemove', e => {
    if (!isVisible) {
      isVisible = true;
      tracker.style.opacity = 1;
      updatePosition();
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const updatePosition = () => {
    const distanceX = mouseX - (trackerX + trackerSize / 2);
    const distanceY = mouseY - (trackerY + trackerSize / 2);

    trackerX += distanceX * speed;
    trackerY += distanceY * speed;

    tracker.style.transform = `translate(${trackerX}px, ${trackerY}px)`;
    requestAnimationFrame(updatePosition);
  };
});

const updatePosition = () => {
  const distanceX = mouseX - (trackerX + trackerSize / 2)
  const distanceY = mouseY - (trackerY + trackerSize / 2)

  trackerX += distanceX * speed
  trackerY += distanceY * speed

  tracker.style.transform = `translate(${trackerX}px, ${trackerY}px)`
  requestAnimationFrame(updatePosition)
}