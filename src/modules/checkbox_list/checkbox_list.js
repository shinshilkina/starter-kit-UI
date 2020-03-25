import './checkbox_list.scss';

const checkBoxListItem = document.querySelectorAll('.checkbox-list .checkbox-list_title');
for (let item of checkBoxListItem) {
    item.addEventListener('click', function () {
        const checkBoxItems = item.parentElement.querySelector('.checkbox-list_items');
        checkBoxItems.classList.toggle('invisible');
        const button = item.querySelector('.checkbox-list_select');
        button.classList.toggle('rotate');
    });
}
