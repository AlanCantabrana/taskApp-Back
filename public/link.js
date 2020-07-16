const registerButton = document.getElementById('register');

registerButton.addEventListener('click',addUsers);

//adding users to mongo
function addUsers(event) {
    event.preventDefault();
    const loginData = {
        nombre: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    const headers = new Headers ({'Content-Type':'application/json'});
    return fetch ('http:localhost:3000/usuario', {
        method:'POST',
        body: JSON.stringify(loginData),
        headers: headers
    }).then(res => res.json())
    .catch(error =>console.error('Error:', error))
    .then(response => console.log('Success:', response));
}