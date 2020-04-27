'use strict';
import './bottom-data.pug';
import './bottom.scss';
import $ from 'jquery';



window.addEventListener(`resize`, event => {
    let windowWidth = document.documentElement.clientWidth;
    const logoLinks = document.querySelector('.bottom__down__links');
    const bottomCopyright = document.querySelector('.bottom__down__copyright');

    if (windowWidth < 764) {
        if (logoLinks && bottomCopyright) {
            logoLinks.style.marginLeft = "auto";
            logoLinks.style.marginRight = "auto";
            bottomCopyright.style.padding = "1.9rem 0";
            bottomCopyright.style.marginLeft = "auto";
            bottomCopyright.style.marginRight = "auto";
        }
    } else if (logoLinks && bottomCopyright) {
        logoLinks.style.marginRight = "8.7rem";
        bottomCopyright.style.padding = "1.8rem 0 1.8rem 8.7rem";
    }
}, false);


