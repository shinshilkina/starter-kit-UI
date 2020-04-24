import './page_elements.scss';
import {fpickerWithOneInput} from '../../elements/calendar/calendar';

const inputFilterDateDropdown = document.querySelector('.filter-date-dropdown_input');
if (inputFilterDateDropdown) {
    fpickerWithOneInput(inputFilterDateDropdown);
}


