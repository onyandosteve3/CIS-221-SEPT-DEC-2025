const registrationForm = document.getElementById('registration_form');
registrationForm.addEventListener('submit', async (event) => {
event.preventDefault();

const fullname = document.getElementById('user_name').value.trim();
const contact = document.getElementById('user_contact').value.trim();
const email = document.getElementById('user_email').value.trim();
const password = document.getElementById('password').value.trim();
const password2 = document.getElementById('confirm_password').value.trim();

if(fullname == "" || email == "" || contact == "" || password == "" || password2 ==""){
alert("Please fill your all the fieleds");
return;
}else{
    alert("That is good");
}

});