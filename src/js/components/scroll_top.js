// const goTopBtn = document.querySelector('.to-top');

// window.addEventListener('scroll', trackScroll);
// goTopBtn.addEventListener('click', backToTop);

// function trackScroll() {
//     const scrolled = window.pageYOffset + 400;
//     // console.log('scrolled', scrolled);
//     const coords = document.documentElement.clientHeight;
//     // console.log('coords', coords);
//     if (scrolled >= coords) {
//         goTopBtn.classList.add('to-top-show');
//     }
//     if (scrolled < coords) {
//         goTopBtn.classList.remove('to-top-show');
//     }
// }

// // function backToTop() {
// //     if (window.pageYOffset > 0) {
// //         window.scrollBy(0, -40); // скорость подьема
// //         setTimeout(backToTop, 0);
// //     }
// // }

// function backToTop() {
//     const scrollStep = window.pageYOffset / 40;
//     if (window.pageYOffset > 0) {
//         window.scrollBy(0, -(scrollStep));
//         setTimeout(backToTop, 0);
//     }
// }