import './landing_page.scss';
import {fpickerTwoInputs} from '../../elements/calendar/calendar';

const dateInputsArea = document.querySelector('.landingPage_container .date_dropdowns');

if (dateInputsArea) {
    const arrival = dateInputsArea.querySelector('.arrival');
    const departure = dateInputsArea.querySelector('.departure');

    if (arrival && departure) {
        fpickerTwoInputs(arrival, departure);
    }
}