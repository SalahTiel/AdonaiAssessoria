const carouselContent = document.querySelector('.carousel-content');
const comments = document.querySelectorAll('.comment');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 20;
  carouselContent.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? comments.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === comments.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});
