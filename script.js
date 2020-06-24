var emailInput = document.querySelector("#emailinput");
var message = document.querySelector("#messageinput");
var submitButton = document.querySelector("#contactinput");




var handleButtonClick = () => {
    console.log(`From:${emailInput.value}, Message:${message.value}`);
}
submitButton.addEventListener("click", handleButtonClick);