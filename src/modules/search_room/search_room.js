import './search_room.scss'
import $ from 'jquery';
require('jquery-mask-plugin');
import '../dropdown/dropdown.pug';

window.$ = window.jQuery = require('jquery');
var mask = require('jquery-mask-plugin');
$.mask = mask;
window.mask = mask;

$(document).ready(function($){
    $('.date').mask("00.00.0000");
});
