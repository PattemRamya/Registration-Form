let userId = document.getElementById('userId');
let password = document.getElementById('Password');
let Name = document.getElementById('name');
let zipCode = document.getElementById('zipCode');
let email = document.getElementById('Email');
let country = document.getElementById('Country');
let empty_string = "";
function validate(e) {
    e.preventDefault();
    let errors = [];

    //to validate userId
    if (userId.value === empty_string) {
        document.getElementById('userIdError').innerHTML = "UserId can't be empty";
        userId.classList.add("border", "border-danger");
        errors.push("UserId can't be empty")
    } else if ((userId.value.length < 5) || (userId.value.length > 12)) {
        document.getElementById('userIdError').innerHTML = "UserId can have 5 to 12 digits only";
        userId.classList.add("border border-danger");
        errors.push("UserId can have 5 to 12 digits only");
    } else {
        userId.classList.remove("border", "border-danger");

        document.getElementById('userIdError').innerHTML = empty_string;
    }


    
    //to validate  password
    if (password.value === empty_string) {
        document.getElementById('pass').innerHTML = "Password can't be empty";
        password.classList.add("border", "border-danger");
        errors.push("Password can't be empty")
    } else if ((password.value.length < 7) || (password.value.length > 12)) {
        document.getElementById('pass').innerHTML = "Password can have 7 to 12 characters only";
        password.classList.add("border", "border-danger");
        errors.push("Password can have 7 to 12 characters only")
    } else {
        document.getElementById('pass').innerHTML = empty_string;
        password.classList.remove("border", "border-danger");
    }


    // to validate name
    if (Name.value === empty_string) {
        document.getElementById('username').innerHTML = "Name can't be empty";
        Name.classList.add("border", "border-danger");
        errors.push("Name can't be empty")
    } else if (!Name.value.match(/^[A-Za-z]+$/)) {
        document.getElementById('username').innerHTML = "Only alphabets are allowed.";
        Name.classList.add("border", "border-danger");
        errors.push("Only alphabets are allowed.");
    } else {
        document.getElementById('username').innerHTML = empty_string;
        Name.classList.remove("border", "border-danger");
    }


    // to make country mandatory
    if (country.value === empty_string) {
        document.getElementById('countryname').innerHTML = "Country can't be empty";
        country.classList.add("border", "border-danger");
        errors.push("Country can't be empty")
    } else {
        document.getElementById('countryname').innerHTML = empty_string;
        country.classList.remove("border", "border-danger");
    }


    // to make  zipcode mandatory
    if (zipCode.value === "") {
        document.getElementById('codeNumber').innerHTML = "Zipcode can't be empty";
        zipCode.classList.add("border", "border-danger");
        errors.push("Zipcode can't be empty");
    } else if ((zipCode.value.length < 6) || (zipCode.value.length > 8)) {
        document.getElementById('codeNumber').innerHTML = "Zipcode must have atleast 6 to 8 digits";
        zipCode.classList.add("border", "border-danger");
        errors.push("Zipcode must have atleast 6 to 8 digits");
    }
    else {
        document.getElementById('codeNumber').innerHTML = "";
        zipCode.classList.remove("border", "border-danger");
    }


    //to validate email
    let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value === "") {
        document.getElementById('emailId').innerHTML = "Email can't be empty";
        email.classList.add("border", "border-danger");
        errors.push("Email can't be empty")
    } else if (!email.value.match(expression)) {
        document.getElementById('emailId').innerHTML = "Invalid email id";
        email.classList.add("border", "border-danger");
        errors.push("Invalid email id")
    } else {
        document.getElementById('emailId').innerHTML = "";
        email.classList.remove("border", "border-danger");
    }


    // to validate gender
    let male = document.getElementById('radio1');
    let female = document.getElementById('radio2');
    let genderValue = "";
    if ((male.checked === false) && (female.checked === false)) {
        document.getElementById('genderId').innerHTML = " gender is required";
        male.classList.add("border", "border-danger");
        female.classList.add("border", "border-danger");
        errors.push("gender is required")
    } else {
        if (male.checked) {
            genderValue = male.value;
        } else if (female.checked) {
            genderValue = female.value;
        }
        document.getElementById('genderId').innerHTML = "";
        male.classList.remove("border", "border-danger");
        female.classList.remove("border", "border-danger");
    }


    //to make language mandatory
    let english = document.getElementById('checkbox1');
    let nonEnglish = document.getElementById('checkbox2');
    let languageValue = "";
    if ((english.checked === false) && (nonEnglish.checked === false)) {
        document.getElementById('language').innerHTML = " Language is required";
        english.classList.add("border", "border-danger");
        nonEnglish.classList.add("border", "border-danger");
        errors.push("Language is required");
    } else {
        if (english.checked) {
            languageValue = english.value;
            if (nonEnglish.checked) {
                languageValue += " , " + nonEnglish.value;
            }
        } else if (nonEnglish.checked) {
            languageValue = nonEnglish.value;
        }
        document.getElementById('language').innerHTML = "";
        english.classList.remove("border", "border-danger");
        nonEnglish.classList.remove("border", "border-danger");
    }
    console.log(errors)


    // to store data in localStorage
    if (errors.length === 0) {
        let data = localStorage.getItem("user_data") ? JSON.parse(localStorage.getItem("user_data")) : [];
        data.push({
            "userId": userId.value,
            "name": Name.value,
            "country": country.value,
            "zipcode": zipCode.value,
            "email": email.value,
            "gender": genderValue,
            "language": languageValue,
            "about": document.getElementById("aboutId").value,
            "password": password.value,
            "address": document.getElementById("addressId").value,
        });
        console.log(data);
        localStorage.setItem("user_data", JSON.stringify(data));
        document.getElementById('submitted').classList.remove("d-none");
    }
}

