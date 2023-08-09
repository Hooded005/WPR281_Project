const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");
const phone = document.getElementById("phone");
const userid = document.getElementById("userID");
const refcode = document.getElementById("refcode");
const form = document.getElementById("form");
const fnameError = document.getElementById('fnameError');
const lnameError = document.getElementById('lnameError');
const emailError = document.getElementById('emailError');
const useridError = document.getElementById('userIDError');
const countryError = document.getElementById('countryError');
const stateError = document.getElementById('stateError');
const cityError = document.getElementById('cityError');
const phoneError = document.getElementById('phoneError');
const refcodeError = document.getElementById('refcodeError');

form.addEventListener('submit', function(e){
    if (firstname.value == '' || !isNaN(firstname.value))
    {
        e.preventDefault();
    }
    if (lastname.value == '' || !isNaN(lastname.value))
    {
        e.preventDefault();
    }
    if (country.value == '')
    {
        e.preventDefault();
    }
    if (state.value == '')
    {
        e.preventDefault();
    }
    if (city.value == '')
    {
        e.preventDefault();
    }
    if (isNaN(phone.value))
    {
        e.preventDefault();
    }
    if (city.value == '')
    {
        e.preventDefault();
    }
    if(userid.value == '')
    {
        e.preventDefault();
    }
    if(refcode.value == '' || refcode.value == null)
    {
        e.preventDefault();
    }
})

form.addEventListener('reset', e => {
    fnameError.textContent = "";
    firstname.classList.remove("invalid");
    lnameError.textContent = "";
    lastname.classList.remove("invalid");
    emailError.textContent = "";
    email.classList.remove("invalid");
    countryError.textContent = "";
    country.classList.remove("invalid");
    useridError.textContent = "";
    userid.classList.remove("invalid");
    stateError.textContent = "";
    state.classList.remove("invalid");
    cityError.textContent = "";
    city.classList.remove("invalid");
    phoneError.textContent = "";
    phone.classList.remove("invalid");
    refcodeError.textContent = "";
    refcode.classList.remove("invalid");
});
