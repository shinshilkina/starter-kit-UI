"use strict";
import './dropdown.scss';
import $ from "jquery";

function changeButtonMinus ( currentLine , valueStr , before , after ){
    let changingButton = currentLine.querySelectorAll('.button-minus');

    for (let button of changingButton) {
        if (parseInt(valueStr.textContent ) === 0) {
            if (button.classList.contains(before)){
                button.classList.remove(before);
            }
            button.classList.add(after);
        }
    }
}

function changeDropdownText(currentLine) {
    const values = document.querySelectorAll('.str-count');
    const dropdownInput = currentLine.parentElement.parentElement.querySelector('.dropdown__area');

    let sum = 0;
    for (let value of values) {
        sum += parseInt(value.textContent);
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

        if (button.classList.contains('button-plus')) {
            changeButtonMinus ( currentLine , valueStr , 'passive' , 'active' );
            valueStr.textContent = parseInt(valueStr.textContent) + parseInt('1');
        } else {
            if (parseInt(valueStr.textContent )!= 0) {
                valueStr.textContent = parseInt(valueStr.textContent) - parseInt('1');
                changeButtonMinus ( currentLine , valueStr , 'active' , 'passive' );
            }
        }

        changeDropdownText(currentLine);
    });
}

for (let button of ButtonsClearOrSave) {
    button.addEventListener('click',
        function (event) {
            const dropdown = this.parentElement.parentElement;
            const values = this.parentElement.parentElement.querySelectorAll('.str-count');
            const dropdownInput = this.parentElement.parentElement.parentElement.querySelector('.dropdown__area');

            if (button.classList.contains('dropdown__items__buttons__clear')){
                for (let value of values) {
                    value.textContent = "0";
                }
                dropdownInput.textContent = 'Сколько гостей';
                changeButtonMinus ( dropdown , values[0] , 'active' , 'passive' );
            } else {
                changeDropdownText(dropdown);
                changeButtonMinus ( dropdown , values , 'active' , 'passive' );
            }
        }
    );
}

for (let button of buttonsShowDropdown){
    button.addEventListener('click',
        function (event) {
            let dropdownBody = button.parentElement.querySelector('.dropdown__items');
            dropdownBody.classList.toggle('visible');
        }
    );
}


