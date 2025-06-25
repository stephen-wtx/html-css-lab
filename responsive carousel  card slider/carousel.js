var container = document.getElementById('container');
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');
var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;

window.addEventListener('resize', checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else if (w < 901) {
        slidesPerPage = 2;
    } else if (w < 1101) {
        slidesPerPage = 3;
    } else {
        slidesPerPage = 4;
    }
    
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition = slidesCount;
    }

    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';

    // Fix inactive button logic
    buttons[0].classList.toggle('inactive', currentPosition <= 0);
    buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
}

setParams(containerWidth);

function slideRight() {
    if (currentPosition > 0) {
        currentPosition--;
        currentMargin = -currentPosition * (100 / slidesPerPage);
        slider.style.marginLeft = currentMargin + '%';
    }
    buttons[0].classList.toggle('inactive', currentPosition <= 0);
    buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
}

function slideLeft() {
    if (currentPosition < slidesCount) {
        currentPosition++;
        currentMargin = -currentPosition * (100 / slidesPerPage);
        slider.style.marginLeft = currentMargin + '%';
    }
    buttons[0].classList.toggle('inactive', currentPosition <= 0);
    buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
}
