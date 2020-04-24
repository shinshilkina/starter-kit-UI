import './image-slider.scss';

let slideIndex = 1;

const cards = document.querySelectorAll('.room-card_small .room-card_body');
if (cards.length !== 0) {
    for (let card of cards) {
        showSlides(slideIndex, card);
    }
}

for (let card of cards) {
    const dots = card.querySelectorAll('.room-card_body_images-block_dots_dot');
    for (let dot of dots) {
        dot.addEventListener('click', function (event) {
            const index = this.dataset.index;
            currentSlide(index, card);
        });
    }

    const prevButton = card.querySelector('.room-card_body_images-block_prev_button');

    const nextButton = card.querySelector('.room-card_body_images-block_next_button');

    if (prevButton) {
        nextButton.addEventListener('click', function (event) {
            plusSlides(1, card);
        });

        prevButton.addEventListener('click', function (event) {
            plusSlides(-1, card);
        });
    }
}



// Next/previous controls
function plusSlides(n, card) {
    showSlides(slideIndex += n, card);
}

// Thumbnail image controls
function currentSlide(n, card) {
    showSlides(slideIndex = n, card);
}

function showSlides(n, card) {
    let i;
    let slides = card.getElementsByClassName('room-card_body_images-block_image');
    let dots = card.getElementsByClassName('room-card_body_images-block_dots_dot');
    if (slides.length !== 0) {
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
    }
}