// registration.js

const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
            alert('Registreringen lyckades!');
        } else {
            const data = await response.json();
            throw new Error(data.message);
        }
    } catch (error) {
        alert(error.message || 'Något gick fel vid registreringen.');
    }
});
