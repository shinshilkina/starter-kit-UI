import './range-slider.scss';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';


const slider = document.getElementById('slider');



if (slider) {
    noUiSlider.create(slider, {
        start: [5000, 10000],
        connect: true,
        range: {
            'min': 500,
            'max': 16000
        }
    });

    slider.noUiSlider.on('update.one', function () {
        const titleStart = document.querySelector('.range-slider_value_start');
        const titleEnd = document.querySelector('.range-slider_value_end');
        const handleLower = document.querySelector('.noUi-handle-lower');
        const handleUpper = document.querySelector('.noUi-handle-upper');
        changeValueSlider(handleUpper, titleEnd);
        changeValueSlider(handleLower, titleStart);

    });
}

function changeValueSlider(handle, title) {
    const valueStart = handle.getAttribute('aria-valuetext');
    const value = formatNumber(Math.round(parseInt(valueStart, 10)));
    title.textContent = value + '₽';
}

function formatNumber(n) {
    return (n + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
}

export {formatNumber};