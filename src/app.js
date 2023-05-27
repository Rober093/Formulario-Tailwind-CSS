window.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.input-white-text input, .input-white-text textarea');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.add('input-white-text');
            } else {
                this.classList.remove('input-white-text');
            }
        });
    });
});