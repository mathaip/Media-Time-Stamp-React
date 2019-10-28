function showResults() {
    var email = document.getElementById('email').value;
    console.log
    var password = document.getElementById('password').value;
    var container = document.getElementById('results');
    var ptag = document.createElement('p');
    ptag.innerHTML = "this is your email " + email + " and this is your password: " + password;
    container.appendChild(ptag);

};