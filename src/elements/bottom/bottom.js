'use strict';
import './bottom-data.pug';
import './bottom.scss';
import $ from 'jquery';



window.addEventListener(`resize`, event => {
    let windowWidth = document.documentElement.clientWidth;

    if (windowWidth < 764) {
        const logoLinks = document.querySelector('.bottom__down__links').style;
        const bottomCopyright = document.querySelector('.bottom__down__copyright').style;
        logoLinks.marginLeft = "auto";
        logoLinks.marginRight = "auto";
        bottomCopyright.padding = "1.9rem 0";
        bottomCopyright.marginLeft = "auto";
        bottomCopyright.marginRight = "auto";

    }
}, false);


