const form = document.getElementById('form');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const userid = document.getElementById('userID');
const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');
const phone = document.getElementById('phone');
const refcode = document.getElementById('refcode');

const fnameError = document.getElementById('fnameError');
const lnameError = document.getElementById('lnameError');
const emailError = document.getElementById('emailError');
const useridError = document.getElementById('userIDError');
const countryError = document.getElementById('countryError');
const stateError = document.getElementById('stateError');
const cityError = document.getElementById('cityError');
const phoneError = document.getElementById('phoneError');
const refcodeError = document.getElementById('refcodeError');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

form.addEventListener('reset', e => {
    fnameError.textContent = "";
    fname.classList.remove("invalid");
    lnameError.textContent = "";
    lname.classList.remove("invalid");
    emailError.textContent = "";
    email.classList.remove("invalid");
    countryError.textContent = "";
    country.classList.remove("invalid");

});

const validateInputs = () =>{
    fnameValid();
    lnameValid();
    emailValid();
    countryValid();
}

fname.onblur = function () {
    fnameValid();
}

const fnameValid = () =>{
    const fnameValue = fname.value.trim();

    if (fnameValue === "") {
        fnameError.textContent = "Name is required.";
        fname.classList.add("invalid");
    } else if (/[0-9]/.test(fnameValue) == true){
        fnameError.textContent = "Name cannot contain a number.";
        fname.classList.add("invalid");
    } else {
        fnameError.textContent = "";
        fname.classList.remove("invalid");
    }
}

lname.onblur = function () {
    lnameValid();
}

const lnameValid = () =>{
    const lnameValue = lname.value.trim();

    if (lnameValue === "") {
        lnameError.textContent = "Last Name is required.";
        lname.classList.add("invalid");
    } else if (/[0-9]/.test(lnameValue) == true){
        lnameError.textContent = "Last Name cannot contain a number.";
        lname.classList.add("invalid");
    } else {
        lnameError.textContent = "";
        lname.classList.remove("invalid");
    }
}

email.onblur = function () {
    emailValid();
}

const emailValid = () =>{
    const emailValue = email.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailValue === "") {
        emailError.textContent = "Email is required.";
        email.classList.add("invalid");
    } else if (!emailPattern.test(emailValue)){
        emailError.textContent = "Invalid Email format.";
        email.classList.add("invalid");
    } else {
        emailError.textContent = "";
        email.classList.remove("invalid");
    }
}

country.onblur = function (){
    countryValid();
};

const countryValid = () =>{
    const countryValue = country.value.trim();

    if (countryValue === "") {
        countryError.textContent = "Please select a country.";
        country.classList.add("invalid");
    }else {
        countryError.textContent = "";
        country.classList.remove("invalid");
    }
}
