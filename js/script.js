// console.log("Starting");

function calculateAge() {
    var userInput = document.getElementById("dob").value;
    var dob = new Date(userInput);

    var monthDifference = Date.now() - dob.getTime();
    // console.log(monthDifference);

    var dat = new Date(monthDifference);
    // console.log(date);

    var year = dat.getUTCFullYear();
    // console.log(year);

    var age = Math.abs(year - 1970);
    // console.log(age);

    return document.getElementById("age").value = age;
}