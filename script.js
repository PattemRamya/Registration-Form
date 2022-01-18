let userId = document.getElementById('userId');
let password = document.getElementById('Password');
let Name = document.getElementById('name');
let zipCode = document.getElementById('zipCode');
let email = document.getElementById('Email');
let country = document.getElementById('Country');

function validate(e) {
    e.preventDefault();
    let errors = [];
    let userIdValue = userId.value;
    let passwordvalue = password.value;
    let nameValue = Name.value;
    let countryName = country.value;
    let zipCodevalue = zipCode.value;
    let emailvalue = email.value;

    //to validate userId
    if (userIdValue === "") {
        document.getElementById('userIdError').innerHTML = "UserId can't be empty";
        userId.classList.add("border", "border-danger");
        errors.push("UserId can't be empty")
    } else if ((userIdValue.length < 5) || (userIdValue.length > 12)) {
        document.getElementById('userIdError').innerHTML = "UserId can have 5 to 12 digits only";
        userId.classList.add("border border-danger");
        errors.push("UserId can have 5 to 12 digits only");
    } else {
        userId.classList.remove("border", "border-danger");

        document.getElementById('userIdError').innerHTML = "";
    }
    //to validate  password
    if (passwordvalue === "") {
        document.getElementById('pass').innerHTML = "Password can't be empty";
        password.classList.add("border", "border-danger");
        errors.push("Password can't be empty")
    } else if ((passwordvalue.length < 7) || (passwordvalue.length > 12)) {
        document.getElementById('pass').innerHTML = "Password can have 7 to 12 characters only";
        password.classList.add("border", "border-danger");
        errors.push("Password can have 7 to 12 characters only")
    } else {
        document.getElementById('pass').innerHTML = "";
        password.classList.remove("border", "border-danger");
    }


    // to validate name
    if (nameValue === "") {
        document.getElementById('username').innerHTML = "Name can't be empty";
        Name.classList.add("border", "border-danger");
        errors.push("Name can't be empty")
    } else if (!nameValue.match(/^[A-Za-z]+$/)) {
        document.getElementById('username').innerHTML = "Only alphabets are allowed.";
        Name.classList.add("border", "border-danger");
        errors.push("Only alphabets are allowed.");
    } else {
        document.getElementById('username').innerHTML = "";
        Name.classList.remove("border", "border-danger");
    }


    // to make country mandatory
    if (countryName === "") {
        document.getElementById('countryname').innerHTML = "Country can't be empty";
        country.classList.add("border", "border-danger");
        errors.push("Country can't be empty")
    } else {
        document.getElementById('countryname').innerHTML = "";
        country.classList.remove("border", "border-danger");
    }


    // to make  zipcode mandatory
    if (zipCodevalue === "") {
        document.getElementById('codeNumber').innerHTML = "Zipcode can't be empty";
        zipCode.classList.add("border", "border-danger");
        errors.push("Zipcode can't be empty");
    } else if ((zipCodevalue.length < 6) || (zipCodevalue.length > 8)) {
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
    if (emailvalue === "") {
        document.getElementById('emailId').innerHTML = "Email can't be empty";
        email.classList.add("border", "border-danger");
        errors.push("Email can't be empty")
    } else if (!emailvalue.match(expression)) {
        document.getElementById('emailId').innerHTML = "Invalid email id";
        email.classList.add("border", "border-danger");
        errors.push("Invalid email id")
    } else {
        document.getElementById('emailId').innerHTML = "";
        email.classList.remove("border", "border-danger");
    }


    // to validate gender
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let genderValue = "";
    if ((radio1.checked === false) && (radio2.checked === false)) {
        document.getElementById('genderId').innerHTML = " gender is required";
        radio1.classList.add("border", "border-danger");
        radio2.classList.add("border", "border-danger");
        errors.push("gender is required")
    } else {
        if (radio1.checked) {
            genderValue = radio1.value;
        } else if (radio2.checked) {
            genderValue = radio2.value;
        }
        document.getElementById('genderId').innerHTML = "";
        radio1.classList.remove("border", "border-danger");
        radio2.classList.remove("border", "border-danger");
    }


    //to make language mandatory
    let checkbox1 = document.getElementById('checkbox1');
    let checkbox2 = document.getElementById('checkbox2');
    let languageValue = "";
    if ((checkbox1.checked === false) && (checkbox2.checked === false)) {
        document.getElementById('language').innerHTML = " Language is required";
        checkbox1.classList.add("border", "border-danger");
        checkbox2.classList.add("border", "border-danger");
        errors.push("Language is required");
    } else {
        if (checkbox1.checked) {
            languageValue = checkbox1.value;
            if (checkbox2.checked) {
                languageValue += " , " + checkbox2.value;
            }
        } else if (checkbox2.checked) {
            languageValue = checkbox2.value;
        }
        document.getElementById('language').innerHTML = "";
        checkbox1.classList.remove("border", "border-danger");
        checkbox2.classList.remove("border", "border-danger");
    }
    console.log(errors)


// to store data in localStorage
    if (errors.length === 0) {
        let data = localStorage.getItem("user_data") ? JSON.parse(localStorage.getItem("user_data")) : [];
        data.push({
            "userId": userIdValue,
            "name": nameValue,
            "country": countryName,
            "zipcode": zipCodevalue,
            "email": emailvalue,
            "gender": genderValue,
            "language": languageValue,
            "about": document.getElementById("aboutId").value,
            "password": passwordvalue,
            "address": document.getElementById("addressId").value,
        });
        console.log(data);
        localStorage.setItem("user_data", JSON.stringify(data));
        document.getElementById('submitted').classList.remove("d-none");
    }
}

