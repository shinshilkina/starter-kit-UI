"use strict";
import './dropdown.scss';

//dropdown__area dark

//dropdown__items visible

const dropdowns = document.querySelectorAll('.dropdown');
const buttonsMinPlus = document.querySelectorAll(".button-minus , .button-plus");
const buttonsClearDropdown = document.querySelectorAll('.dropdown__items__buttons__clear');
const buttonsSaveDropdown = document.querySelectorAll('.dropdown__items__buttons__save');
const buttonsShowDropdown = document.querySelectorAll('.dropdown__select, .dropdown__area');

for (let dropdown of dropdowns) {
    const group = dropdown.dataset.group;
    group === 'guests' ? writeCountGuests(dropdown) : null;
    group === 'furniture' ? writeCountFurniture(dropdown) : null;
}

for (let clickerElement of buttonsShowDropdown) {
    clickerElement.addEventListener('click',
        function (event) {
            const dropdown = this.parentElement;
            const items = dropdown.querySelector('.dropdown__items');
            const area = dropdown.querySelector('.dropdown__area');
            items.classList.toggle('visible');
            area.classList.toggle('dark');
        }
    );
}

for (let button of buttonsMinPlus) {
    button.addEventListener('click', function () {
        const value = this.parentElement.querySelector('.str-count');
        const dropdown = this.parentElement.parentElement.parentElement.parentElement;
        const input = dropdown.querySelector('.dropdown__area');
        const group = dropdown.dataset.group;
        if (this.classList.contains('button-minus') && value.textContent !== '0') {
            const number = parseInt(value.textContent, 10) - 1;
            value.textContent = number;
            //debugger
            if (number === 0) {
                changeButtonMinus(this, number)
            }
        } else if (this.classList.contains('button-plus')) {
            const number = parseInt(value.textContent, 10) + 1;
            value.textContent = number;
            //debugger
            if (number === 1) {
                changeButtonMinus(this, number)
            }
        }
        group === 'guests' ? writeCountGuests(dropdown) : null;
        group === 'furniture' ? writeCountFurniture(dropdown) : null;
    });
}

function writeCountFurniture(dropdown) {
    const input = dropdown.querySelector('.dropdown__area')
    const lines = dropdown.querySelectorAll('.dropdown__item');
    input.value = null;
    for (let line of lines) {
        const count = line.querySelector('.str-count').textContent;
        if (count !== '0') {
            const furnitureName = line.querySelector('.dropdown__item__title').textContent;
            input.value += count + ' ' + furnitureName + ', ';
        }
    }
    if (input.value && input.value.length < 20) {
        input.value = input.value.substring(0, input.value.length - 2);
    } else {
        input.value = input.value.substring(0, 20) + '...';
    }
}

function writeCountGuests(dropdown) {
    const input = dropdown.querySelector('.dropdown__area')
    const lines = dropdown.querySelectorAll('.dropdown__item');
    let sum = 0;
    for (let line of lines) {
        const count = line.querySelector('.str-count').textContent;
        sum += parseInt(count, 10);
    }
    if (sum === 1) {
        input.value = '1 гость';
    } else if (sum > 0 && sum <= 4) {
        input.value = sum + ' гостя';
    } else {
        input.value = sum + ' гостей';
    }
    if (sum === 0) {
        input.value = null;
        buttonClearVisibility(dropdown, false);
    } else
        buttonClearVisibility(dropdown, true);
}

function changeButtonMinus(button, number) {
    const buttonMinus = button.parentElement.querySelector('.button-minus')
    if (number !== 0) {
        buttonMinus.classList.add('active');
    } else {
        buttonMinus.classList.remove('active')
    }
}

function buttonClearVisibility(dropdown, answer) {
    const buttonClear = dropdown.querySelector('.dropdown__items__buttons__clear');
    answer ? buttonClear.classList.add('visible') : buttonClear.classList.remove('visible');
}

for (let button of buttonsClearDropdown) {
    button.addEventListener('click', function () {
        const thisItemsArea = this.parentElement.parentElement;
        const input = thisItemsArea.parentElement.querySelector('.dropdown__area');
        const counts = thisItemsArea.querySelectorAll('.str-count');
        for (let count of counts) {
            count.textContent = '0';
        }
        input.value = null;
        input.classList.remove('dark');
        thisItemsArea.classList.remove('visible');
    });
}

for (let button of buttonsSaveDropdown) {
    button.addEventListener('click', function () {
        const thisItemsArea = this.parentElement.parentElement;
        const input = thisItemsArea.parentElement.querySelector('.dropdown__area');
        input.classList.remove('dark');
        thisItemsArea.classList.remove('visible');
    });
}



