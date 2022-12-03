'use strict'

const slides = document.querySelectorAll('.slide');
const sliderBtnR = document.querySelector('.sl-btn-r');
const sliderBtnL = document.querySelector('.sl-btn-l');

slides.forEach((slide, index) => {
    slide.classList.add(`slide--${index+1}`);
});
let i = 1;
sliderBtnR.addEventListener('click', function () {
    document.querySelector(`.slide--${i}`).classList.remove(`slide--active`);
    if (i >= slides.length) {
        i = 0;
    }
    document.querySelector(`.slide--${i+1}`).classList.add(`slide--active`);
    i++;
});
sliderBtnL.addEventListener('click', function () {
    document.querySelector(`.slide--${i}`).classList.remove(`slide--active`);
    if (i === 1) {
        i = slides.length+1;
    }
    document.querySelector(`.slide--${i-1}`).classList.add(`slide--active`);
    i--;
    if (i === 0) {
        i = 1;
    }
});