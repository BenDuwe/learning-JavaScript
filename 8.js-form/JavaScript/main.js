// document.getElementById("submit").addEventListener("click", handleSubmit);
let data = {};
let match
let inputs = document.querySelectorAll("input");


function handleSubmit() {
    // loop to put input values into the data object
    for (let i = 0; i < inputs.length; i++) {
        let id = inputs[i].id
        data[id] = document.getElementById(id).value;
    };
    // saving the data object in local storage in order to acces it on new page if neccesary
    window.sessionStorage.setItem("formInput", JSON.stringify(data));
    // match value depends on function validity below, only when the two entered passwords match, will a new page be loaded
    if (match == true) {
        location.href = "https://www.becode.org/register/register_nl.html";
    }
    event.preventDefault();
};

// putting a blur eventlistener on all the input fields in order to imidiatly check wether the input value is correct or not.
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", validity);
}
 // funtion for checkking if the input value satisfies all the requirements. and adding the invalid class (red box-schadow) if this is not the case.
function validity() {
    // specifically written to check wether or not the passwords are identical.
    if (this == document.getElementById("verify")) {
        let x = document.getElementById("password").value;
        let y = document.getElementById("verify").value;
        if (x === y) {
            console.log("passwords match");
            this.setAttribute("class", "valid");
            match = true;
        } else {
            console.log("passwords don\'t match");
            this.setAttribute("class", "invalid");
            match = false;
        }
    // The else if statement checks wether the requirements of the other input fields are met and adds the invalid class if this is not the case. 
    } else if (this.checkValidity() == false) {
        this.setAttribute("class", "invalid");
    } else {
        this.setAttribute("class", "valid");
    }
};