import './like-button.scss';

function changeClassNamesForStyle(area, bodyCheckbox) {
    if (area.className !== 'like-button_area-checked') {
        area.className = area.className + '-checked';
        bodyCheckbox.className = 'like-button_area-checked_body';
    } else {
        area.className = 'like-button_area';
        bodyCheckbox.className = 'like-button_area_body';
    }
}


const checkboxLikeButton = document.querySelectorAll('.like-button_area_body_checkbox');
for (let checkbox of checkboxLikeButton) {
    checkbox.addEventListener('change', function () {
        const bodyCheckbox = this.parentElement.parentElement;
        const area = bodyCheckbox.parentElement;

        changeClassNamesForStyle(area, bodyCheckbox);
    });
}
