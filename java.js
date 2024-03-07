 // JavaScript for slideshow
 let currentIndex = 0;
 const slideContainer = document.getElementById('slide-container');
 const slides = document.querySelector('.photos');
 const totalSlides = slides.children.length;

 function showSlide(index) {
     const newPosition = -index * 100 + '%';
     slides.style.transform = 'translateX(' + newPosition + ')';
 }

 function nextSlide() {
     currentIndex = (currentIndex + 1) % totalSlides;
     showSlide(currentIndex);
 }

 function prevSlide() {
     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
     showSlide(currentIndex);
 }

 // Change slide every 3 seconds
 setInterval(nextSlide, 3000);