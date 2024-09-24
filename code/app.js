let calculateBtnAge = document.getElementById("age-btn");
const ageDate = document.getElementById("age-date");
const textAge = document.getElementById("text-age");

function calculateAge() {
    const birthdayValue = ageDate.value;
    if (birthdayValue == "") {
        alert("Please enter your birthday");
    } else {
        const age = getAge(birthdayValue);
        textAge.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"}old`;
    }
} 


function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || month === 0 && currentDate.getDate() < birthdayDate.getDate()) {
        age--;
    }

    return age;
}

calculateBtnAge.addEventListener('click',  calculateAge);