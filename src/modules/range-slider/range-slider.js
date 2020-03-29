import './range-slider.scss';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';


var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

