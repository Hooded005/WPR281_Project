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
    useridError.textContent = "";
    userid.classList.remove("invalid");
    countryError.textContent = "";
    country.classList.remove("invalid");
    stateError.textContent = "";
    state.classList.remove("invalid");
    state.innerHTML = "";
    cityError.textContent = "";
    city.classList.remove("invalid");
    city.innerHTML = "";
    phoneError.textContent = "";
    phone.classList.remove("invalid");
    refcodeError.textContent = "";
    refcode.classList.remove("invalid");
});

const validateInputs = () =>{
    fnameValid();
    lnameValid();
    emailValid();
    userIDValid();
    countryValid();
    stateValid();
    cityValid();
    phoneValid();
    refcodeValid();
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

userid.onblur = function (){
    userIDValid();
}

const userIDValid = () =>{
    const userIDValue = userid.value.trim();

    if (userIDValue === "") {
        useridError.textContent = "UserID is required.";
        userid.classList.add("invalid");
    } else {
        useridError.textContent = "";
        userid.classList.remove("invalid");
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

state.onblur = function (){
    stateValid();
};

const stateValid = () =>{
    const stateValue = state.value.trim();

    if (stateValue === "") {
        stateError.textContent = "Please select a state.";
        state.classList.add("invalid");
    }else {
        stateError.textContent = "";
        state.classList.remove("invalid");
    }
}

city.onblur = function (){
    cityValid();
};

const cityValid = () =>{
    const cityValue = city.value.trim();

    if (cityValue === "") {
        cityError.textContent = "Please select a state.";
        city.classList.add("invalid");
    }else {
        cityError.textContent = "";
        city.classList.remove("invalid");
    }
}

phone.onblur = function (){
    phoneValid();
};

const phoneValid = () =>{
    const phoneValue = phone.value.trim();

    if (phoneValue === ""){
        phoneError.textContent = "Phone Number is required.";
        phone.classList.add("invalid");
    } else if (!/^\d+$/.test(phoneValue)){
        phoneError.textContent = "Phone Number can only countain digits.";
        phone.classList.add("invalid");
    } else if (!/^\d{10}$/.test(phoneValue)){
        phoneError.textContent = "Phone Number needs to be 10 digits";
        phone.classList.add("invalid");
    } else {
        phoneError.textContent = "";
        phone.classList.remove("invalid");
    }
}

refcode.onblur = function (){
    refcodeValid();
};

const refcodeValid = () =>{
    const refcodeValue = refcode.value.trim();

    if (refcodeValue === "") {
        refcodeError.textContent = "Referral Code is required.";
        refcode.classList.add("invalid");
    } else {
        refcodeError.textContent = "";
        refcode.classList.remove("invalid");
    }
}

function updateState() {
    let selectedCountry = country.value;
    state.innerHTML = "";

    if (selectedCountry === "option1") {
        addOption(state, "");
        addOption(state, "Western Cape");
        addOption(state, "Gauteng");
        addOption(state, "Free State");
    } else if (selectedCountry === "option2") {
        addOption(state, "");
        addOption(state, "Texas");
        addOption(state, "California");
        addOption(state, "Florida");
    } else if (selectedCountry === "option3"){
        addOption(state, "");
        addOption(state, "Ontario");
        addOption(state, "Alberta");
        addOption(state, "Manitoba");
    }
    updateCity();
}

function updateCity() {
    let selectedState = state.value;
    city.innerHTML = "";

    if (selectedState === "Western Cape") {
        addOption(city, "");
        addOption(city, "Cape Town");
        addOption(city, "Stellenbosch");
        addOption(city, "Worcester");
    } else if (selectedState === "Gauteng") {
        addOption(city, "");
        addOption(city, "Johannesburg");
        addOption(city, "Pretoria");
        addOption(city, "Centurion");
    } else if (selectedState === "Free State"){
        addOption(city, "");
        addOption(city, "Bloemfontein");
        addOption(city, "Welkom");
        addOption(city, "Clarens");
    } else if (selectedState === "Texas") {
        addOption(city, "");
        addOption(city, "San Antonio");
        addOption(city, "Dallas");
        addOption(city, "Houston");
    } else if (selectedState === "California") {
        addOption(city, "");
        addOption(city, "San Francisco");
        addOption(city, "Los Angeles");
        addOption(city, "San Diego");
    } else if (selectedState === "Florida"){
        addOption(city, "");
        addOption(city, "Jacksonville");
        addOption(city, "Orlando");
        addOption(city, "Miami");
    } else if (selectedState === "Ontario") {
        addOption(city, "");
        addOption(city, "Thunder Bay");
        addOption(city, "Sudbury");
        addOption(city, "Timmins");
    } else if (selectedState === "Alberta") {
        addOption(city, "");
        addOption(city, "Edmonton");
        addOption(city, "Calgary");
        addOption(city, "Brooks");
    } else if (selectedState === "Manitoba"){
        addOption(city, "");
        addOption(city, "Winnipeg");
        addOption(city, "Brandon");
        addOption(city, "Winker");
    } 
}

function addOption(selectElement, optionText) {
    let option = document.createElement("option");
    option.text = optionText;
    selectElement.add(option);
}
