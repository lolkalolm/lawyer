// створити функцію для роботи слайдера 
//  рефакторинг 


const prevBtn = document.querySelector(".left-arrow-btn");
const nextBtn = document.querySelector(".right-arrow-btn");
const listOfImages = document.querySelector(".services-list");
let currentSlide = 0;
const slideWidth = 800; // Ширина одного слайду (важливо для руху)

function moveSlides(position) {
  const totalSlides = listOfImages.children.length;

  if (position >= totalSlides) {
    position = 0;
  } else if (position < 0) {
    position = totalSlides - 1;
  }

  currentSlide = position;

  // Додаємо CSS-клас для увімкнення анімації
  listOfImages.classList.add('sliding');
  listOfImages.style.transform = `translateX(-${position * slideWidth}px)`;

  // Видаляємо клас після завершення переходу (необов'язково, залежить від CSS)
  // listOfImages.addEventListener('transitionend', () => {
  //   listOfImages.classList.remove('sliding');
  // });
}

prevBtn.addEventListener('click', function () {
  moveSlides(currentSlide - 1);
});

nextBtn.addEventListener('click', function () {
  moveSlides(currentSlide + 1);
});