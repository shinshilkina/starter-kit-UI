import './colors_type.scss';

function resizeColorsAndFonts() {
    let windowWidth = document.documentElement.clientWidth;
    const colorsSection = document.querySelector('.colors_and_type_colors');
    const fontsSection = document.querySelector('.colors_and_type_fonts');
    const container = document.querySelector('.colors_and_type_container');
    if (colorsSection && fontsSection && container) {
        if (windowWidth < 783) {
            container.style.flexDirection = 'column';
        } else {
            container.style.flexDirection = 'row';
        }
    }
}

resizeColorsAndFonts();

window.addEventListener(`resize`, event => {
    resizeColorsAndFonts();
}, false);
