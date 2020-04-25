'use strict';
import './header.scss';
import $ from 'jquery';


function checkHeaderWidth() {
    let windowWidth = document.documentElement.clientWidth;
    const buttonRedister = document.querySelector('.register-header').style;
    const username = document.querySelector('.navigation__element--name');

    if (windowWidth < 550) {
        buttonRedister.marginLeft = "auto";
        buttonRedister.marginRight = "auto";
        if (username) {
            username.style.marginLeft = "auto";
            username.style.marginRight = "auto";
        }
    }
    else {
        buttonRedister.margin = 'auto 8.75rem auto 0';
        if (username) {
            username.style.marginLeft = "2.9rem";
            username.style.marginRight = "8.8rem";
        }
    }
}

checkHeaderWidth();

window.addEventListener(`resize`, event => {
    checkHeaderWidth();
}, false);
