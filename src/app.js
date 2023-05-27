
    window.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = validateForm();

    if (isValid) {
    var formData = new FormData(form);
    var requestBody = {};
    formData.forEach(function(value, key) {
    requestBody[key] = value;
});

    var token = '11|WtSjq2ZKMApxfJQcnhrKhMpTi8bhiSxaInb0dz1s';
    var url = 'https://prize.manager.orangesoftco.com/api/v1/players';

    fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
},
    body: JSON.stringify(requestBody)
})
    .then(response => response.json())
    .then(data => {
    console.log('Datos del formulario enviados con éxito:', data);
    // Aquí puedes realizar cualquier acción adicional después de enviar los datos
        // Restablecer campos del formulario después de enviar
        form.reset();

    })
    .catch(error => {
    console.error('Error al enviar los datos del formulario:', error);
    // Aquí puedes manejar el error de acuerdo a tus necesidades
});
}
});

    function validateForm() {
    var inputs = document.querySelectorAll('.input-white-text input, .input-white-text textarea');
    var isValid = true;

    inputs.forEach(function(input) {
    var validationMessage = input.getAttribute('data-vv-as') || input.getAttribute('placeholder');
    var validationResult = input.$validator.validate(input);

    if (!validationResult.valid) {
    isValid = false;
    var errorMessages = input.$validator.errors.collect(validationResult.field);
    console.error('Error de validación en', validationMessage + ':', errorMessages);
}
});

    return isValid;
}
});

    new Vue({
    mounted() {
    Vue.use(VeeValidate);

    VeeValidate.Validator.extend('nombre', {
    validate: value => !!value,
    message: 'El campo nombre es obligatorio'
});

    VeeValidate.Validator.extend('email', {
    validate: value => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
},
    message: 'El campo email debe ser válido'
});

    VeeValidate.Validator.extend('telefono', {
    validate: value => {
    const regex = /^[0-9]{10}$/;
    return regex.test(value);
},
    message: 'El campo teléfono debe contener 10 dígitos numéricos'
});

    VeeValidate.Validator.extend('mensaje', {
    validate: value => !!value,
    message: 'El campo mensaje es obligatorio'
});
}
}).$mount('#app');

