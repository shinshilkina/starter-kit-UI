"use strict";
import './dropdown.scss';

function changeButtonMinus(currentLine, value) {
    const changingButton = currentLine.querySelectorAll('.button-minus');

    for (const button of changingButton) {
        button.classList.add('active');
        button.classList.add('passive');
        button.classList.remove(value === 0 ? 'active': 'passive');
    }
}

function buttonClearState(currentLine) {
    const clearButton = currentLine.parentElement.querySelector('.dropdown__items__buttons__clear');
    const values = currentLine.parentElement.querySelectorAll('.str-count');
    let countZero = 0;

    for (const value of values) {
        parseInt(value.textContent, 10) === 0 ? countZero++: null;
    }
    countZero === values.length ? clearButton.classList.remove('visible') :
        clearButton.classList.add('visible');
}

function changeDropdownText(currentLine) {
    const values = document.querySelectorAll('.str-count');
    const dropdownInput = currentLine.parentElement.parentElement.querySelector('.dropdown__area');

    let sum = 0;
    for (let value of values) {
        sum += parseInt(value.textContent, 10);
    }
    if (sum === 0) {
        dropdownInput.textContent = 'Сколько гостей';
    } else {
        if (sum === 1){
            dropdownInput.textContent = sum + ' гость';
        }else if (sum < 5){
            dropdownInput.textContent = sum + ' гостя';
        }
        else {
            dropdownInput.textContent = sum + ' гостей';
        }
    }
}

const buttons = document.querySelectorAll(".button-minus , .button-plus");
const ButtonsClearOrSave = document.querySelectorAll('.dropdown__items__buttons__clear , .dropdown__items__buttons__save');
const buttonsShowDropdown = document.querySelectorAll('.dropdown__select');

for (let button of buttons) {
    button.addEventListener('click', function(event) {
        const currentLine = button.parentElement;
        const valueStr = currentLine.querySelector('.str-count');
        const value = parseInt(valueStr.textContent, 10);
        let newValue = value;

        if (button.classList.contains('button-plus')) {
            newValue++;
        } else if (value > 0) {
            newValue--;
        }
        changeButtonMinus(currentLine, newValue);

        valueStr.textContent = newValue;

        changeDropdownText(currentLine);

        buttonClearState(currentLine);
    });
}

for (let button of ButtonsClearOrSave) {
    button.addEventListener('click',
        function (event) {
            const dropdown = this.parentElement.parentElement;
            const values = this.parentElement.parentElement.querySelectorAll('.str-count');
            const dropdownInput = this.parentElement.parentElement.parentElement.querySelector('.dropdown__area');
            const value = parseInt(values.textContent, 10);
            if (button.classList.contains('dropdown__items__buttons__clear')){
                for (let value of values) {
                    value.textContent = "0";
                }
                dropdownInput.textContent = 'Сколько гостей';
                changeButtonMinus ( dropdown , 0 );
            } else {
                changeDropdownText(dropdown);
                dropdown.classList.toggle('visible');
            }
            buttonClearState(dropdown);
        }
    );
}

for (let button of buttonsShowDropdown){
    button.addEventListener('click',
        function (event) {
            const dropdownBody = button.parentElement.querySelector('.dropdown__items');
            dropdownBody.classList.toggle('visible');
            const dropdownArea = dropdownBody.parentElement.querySelector('.dropdown__area');
            dropdownArea.classList.toggle('dark');
        }
    );
}


