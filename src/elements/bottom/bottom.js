'use strict';
import './bottom-data.pug';
import './bottom.scss';
import $ from 'jquery';

$('div.-navigation').addClass("--height");
$('div.-about_us').addClass("--height");
$('div.-support').addClass("--height");

function foo() {
    let windowWidth = document.documentElement.clientWidth;
    if (windowWidth < 980) {
        const logoLinks = document.querySelector('.bottom__down__links').style;
        const bottomBlock = document.querySelector('.bottom__down').style;
        logoLinks.paddingTop = 90 + "px";
        bottomBlock.height= 160 + "px";
    }
}
foo();
