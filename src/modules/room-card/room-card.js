import './room-card.scss';
import './check-table.scss';
import {formatNumber} from "../../elements/range-slider/range-slider";
import {fpickerTwoInputs} from'../../elements/calendar/calendar';

document.addEventListener("DOMContentLoaded", function () {
    const areaWithTwoDatesInputs = document.querySelector('.date_dropdowns');
    const arrived = areaWithTwoDatesInputs.querySelector('.arrival');
    const departure = areaWithTwoDatesInputs.querySelector('.departure');

});

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

        if (arrival && departure) {
            fpickerTwoInputs(arrival, departure, function(start, end){
                const daysInt = getDaysInterval(start, end, daysElem);
                if (start && end) {
                    changeCostRoom(card, daysInt);
                }
                else {
                    changeCostRoom(card, 0);
                }
            });
        }

    }
}

function getDaysInterval(arrival, departure, days) {
    if (arrival && departure) {
        const date1 = arrival.toDate();
        const date2 = departure.toDate();

        const timeDiff = date2.getTime() - date1.getTime();
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
        days.textContent = diffDays;

        return diffDays;
    }
}

function changeCostRoom(card, days) {
    const sum = card.querySelector('.check_table_row_sum_result_sum');
    const cost = card.querySelector('.check_table_row_sum_text_cost');

    const costNum = parseInt(cost.textContent.replace(' ', ''), 10);
    const costRoom = costNum * days;

    sum.textContent = costRoom;

    if (days !== 0) {
        const resultSum = card.querySelector('.check_table_row_result_sum_cost');
        const sale = card.querySelector('.check_table_row_sale_text_sale');
        const saleNum = parseInt(sale.textContent.replace(' ', ''), 10);

        resultSum.textContent = costRoom - saleNum + 300;
    }
}


