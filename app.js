var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-number");


checkButton.addEventListener("click", function getValues(){
    console.log(dateOfBirth.value, luckyNumber.value);
});



