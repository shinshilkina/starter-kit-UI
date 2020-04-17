import './masked-text-field.scss';
import Inputmask from 'inputmask';

const maskedInputs = document.querySelectorAll('.masked-text-field_input');

for (let input of maskedInputs) {
    Inputmask('datetime', {
        inputFormat: "dd.mm.yyyy",
        showMaskOnHover:false,
        showMaskOnFocus: false
    }).mask(input);
}


