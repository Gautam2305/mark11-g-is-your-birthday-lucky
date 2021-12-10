var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText="Your birthday is lucky🤩"
    } else {
        outputBox.innerText="Your birthday is not lucky😓"
    }
}

function checkBirthdayIsLucky() {
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
    
    if(luckyNumber.value<=0)
    {
        outputBox.innerText ="please enter positive value😠"
    }
    else
    {
    
    if (sum && dob) {
        compareValues(sum, luckyNumber.value)
    } else {
        outputBox.innerText = "Please enter both the fields🥴";
    }

}
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}




checkButton.addEventListener("click", checkBirthdayIsLucky)