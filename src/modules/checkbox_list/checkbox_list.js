import './checkbox_list.scss';

const checkBoxListButton = document.querySelectorAll('.checkbox-list .checkbox-list_select');
for (let button of checkBoxListButton) {
    button.addEventListener('click', function () {
        const checkBoxItems = button.parentElement.nextElementSibling;
        checkBoxItems.classList.toggle('invisible');
        button.classList.toggle('rotate');
    });
}
