// import _vars from "../_vars";
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const slider = new Swiper('.portfolio-section__items', {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
    },  
});


const testimonialsSlider = new Swiper('.testimonials__items', {
    slidesPerView: 1,
    // spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },  
});

const relatedSlider = new Swiper('.related-project__items', {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    navigation: {
        nextEl: '.related-project__next',
        prevEl: '.related-project__prev',
    },  
});

// const workImages = document.querySelector('.work-images-slider');
// const workImagesNav = document.querySelector('.work-images-nav');

// if(workImages) {
//     const workSliderNav = new Swiper(workImagesNav, {
//         slidesPerView: 10,
//         spaceBetween: 20,
//         freeMode: true,
//         watchSlidesProgress: true,
//       });
//     const workSlider = new Swiper(workImages, {
//         slidesPerView: 1,
//         spaceBetween: 20,
//         navigation: {
//           nextEl: ".work-images__next",
//           prevEl: ".work-images__prev",
//         },
//         thumbs: {
//           swiper: workSliderNav,
//         },
//       });
// };

var galleryThumbs = new Swiper('.work-images-nav', {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.work-images-slider', {
    spaceBetween: 20,
    navigation: {
      nextEl: '.work-images__next',
      prevEl: '.work-images__prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });