import './room-card.scss';
import './check-table.scss';
import {formatNumber} from "../../elements/range-slider/range-slider";

'../../elements/range-slider/range-slider';

const numbersInTable = document.querySelectorAll('.check_table .table-cost');
if (numbersInTable.length !==0) {
    for (let number of numbersInTable) {
        const value = number.textContent;
        number.textContent = formatNumber(value);
    }
}

const cardsRoomBig = document.querySelectorAll('.room-card_check');

if (cardsRoomBig.length !== 0) {
    for (let card of cardsRoomBig) {
        const arrival = card.querySelector('.arrival');
        const departure = card.querySelector('.departure');
        const daysElem = card.querySelector('.check_table_row_sum_text_interval');
        arrival.addEventListener('change', () => {
            const daysInt = getDaysInterval(arrival, departure, daysElem);
            if (arrival.value !== '' && departure.value !== '') {
                changeCostRoom(card, daysInt);
            }
            else {
                changeCostRoom(card, 0);
            }
        });
        departure.addEventListener('change', () => {
            const daysInt = getDaysInterval(arrival, departure, daysElem);
            if (arrival.value !== '' && departure.value !== '') {
                changeCostRoom(card, daysInt);
            }
            else {
                changeCostRoom(card, 0);
            }
        });

    }
}

function getDaysInterval(arrival, departure, days) {
    if (arrival.value !== '' && departure.value !== '') {
        const date1 = getDate(arrival.value);
        const date2 = getDate(departure.value);

        const timeDiff = date2.getTime() - date1.getTime();
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
        days.textContent = diffDays;

        return diffDays;
    }
}
function getDate(text) {
    const dd = text.substring(0,2);
    const mm = text.substring(3,5);
    const yy = text.substring(6,10);
    const newText = mm + '.' + dd + '.' + yy;
    const newDate = new Date(newText);

    return newDate;
}

function changeCostRoom(card, days) {
    const sum = card.querySelector('.check_table_row_sum_result_sum');
    const cost = card.querySelector('.check_table_row_sum_text_cost');

    const costR = parseInt(cost.textContent.replace(' ', ''), 10);
    const res = costR * days;

    sum.textContent =  res;
}

