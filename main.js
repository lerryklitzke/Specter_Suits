
const slides = document.querySelectorAll('.slides');
const slideshowContainer = document.querySelector('.slideshow-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelector('.dots');

let numberOfImages = slides.length;
let currentSlide = 0;
let lastSlide = numberOfImages - 1;

// Set up the slider
function init() {
   slides.forEach((img, i) => {
      img.style.left = i * 100 + '%';
   });
   slides[0].classList.add('active');

   createDots();
}
init ();

// Navigation Dots
function createDots() {
   for (let i = 0; i < numberOfImages; i++) {
      const dot = document.createElement('div');
      dot.classList.add('single-dot');
      dots.appendChild(dot);

      dot.addEventListener('click', () => {
         goToSlide(i);
      });
   }
   dots.children[0].classList.add('single-dot-active');
}


// Next Button 
nextBtn.addEventListener('click', () => {
      if(currentSlide >= lastSlide) {
         goToSlide[0];
         return;
      }
   currentSlide++;
   goToSlide(currentSlide);
})

// Previuos Button
prevBtn.addEventListener('click', () => {
      if(currentSlide <= 0) {
         goToSlide[lastSlide];
         return;
      }
   currentSlide--;
   goToSlide(currentSlide);
})

function goToSlide(slideNumber) {
   slideshowContainer.style.transform = 'translateX(-' + 100 * + slideNumber + '%)';

   currentSlide = slideNumber;
   setActiveClass();
}

function setActiveClass() {
   let currentActive = document.querySelector('.slides.active');
   currentActive.classList.remove('active');
   slides[currentSlide].classList.add('active');

   // Active Dot
   let currentDot = document.querySelector('.single-dot.single-dot-active');
   currentDot.classList.remove('single-dot-active');
   dots.children[currentSlide].classList.add('single-dot-active');
}

// Menu Hover 
const menu = document.querySelector('.menu');
const menuSection = document.querySelector('.menu-section');
const hoverContainer = document.querySelector('.hover-container');

