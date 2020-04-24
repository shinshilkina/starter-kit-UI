'use strict';
import './header.scss';
import $ from 'jquery';


function checkHeaderWidth() {
    let windowWidth = document.documentElement.clientWidth;
    const buttonRedister = document.querySelector('.register-header').style;
    const username = document.querySelector('.navigation__element--name').style;

    if (windowWidth < 550) {
        buttonRedister.marginLeft = "auto";
        buttonRedister.marginRight = "auto";
        username.marginLeft = "auto";
        username.marginRight = "auto";
    }
    else {
        buttonRedister.margin = 'auto 8.75rem auto 0';
        username.marginLeft = "3rem";
        username.marginRight = "8.8rem";
    }
}

checkHeaderWidth();

window.addEventListener(`resize`, event => {
    checkHeaderWidth();
}, false);
