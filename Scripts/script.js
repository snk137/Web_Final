function handleSubmit() {
    const form = document.querySelector('form');

    const formData = {
        fullname: form.querySelector('#fullname').value,
        email: form.querySelector('#email').value,
        phone: form.querySelector('#phone').value,
        address: form.querySelector('#address').value,
        interests: form.querySelector('#interests').value,
        availability: form.querySelector('#availability').value,
        message: form.querySelector('#message').value
    };



    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';


    setTimeout(() => {
        successMessage.classList.add('fade-in');
    }, 10);


    setTimeout(() => {
        successMessage.style.display = 'none';
        successMessage.classList.remove('fade-in');
    }, 3000); 

    function playSuccessSound() {
        const audio = new Audio('../Sounds/success-sound.mp3');
        audio.play();
    }
}