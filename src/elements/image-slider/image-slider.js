import './image-slider.scss';

let slideIndex = 1;
showSlides(slideIndex);

const cards = document.querySelectorAll('.room-card_body');


for (let card of cards) {
    const dots = card.querySelectorAll('.room-card_body_images-block_dots_dot');
    for (let dot of dots) {
        dot.addEventListener('click', function (event) {
            const index = this.dataset.index;
            currentSlide(index);
        });
    }

    const prevButton = card.querySelector('.room-card_body_images-block_prev_button');
    prevButton.addEventListener('click', function (event) {
        plusSlides(-1);
    });

    const nextButton = card.querySelector('.room-card_body_images-block_next_button');
    nextButton.addEventListener('click', function (event) {
        plusSlides(1);
    });

}



// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('room-card_body_images-block_image');
    let dots = document.getElementsByClassName('room-card_body_images-block_dots_dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}