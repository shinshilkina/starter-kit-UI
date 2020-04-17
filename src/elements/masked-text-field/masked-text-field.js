import './masked-text-field.scss';
import Inputmask from 'inputmask';

const maskedInputs = document.querySelectorAll('.masked-text-field_input');

for (let input of maskedInputs) {
    if (input.classList.contains('email')) {
        Inputmask("email").mask(input);
    } else if (!input.classList.contains('password')) {
        Inputmask('datetime', {
            inputFormat: "dd.mm.yyyy",
            showMaskOnHover:false,
            showMaskOnFocus: false
        }).mask(input);
    }
}


