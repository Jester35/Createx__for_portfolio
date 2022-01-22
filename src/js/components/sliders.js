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