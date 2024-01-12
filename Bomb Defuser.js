let InputElement = document.getElementById("InputElement");
let timer = document.getElementById("timer");

let UniqueId = null;


let counter = 10;
UniqueId = setInterval(function countdown() {


    counter = counter - 1;
    timer.textContent = counter;
    if (counter === 0) {
        timer.textContent = "BOOM";
        clearInterval(UniqueId);
    }

}, 1000);


InputElement.addEventListener("keydown", function(event) {

    let inputValue = InputElement.value;

    if (event.key === "Enter" && inputValue === "defuse" && counter !== 0) {

        timer.textContent = "You did it !!!";
        clearInterval(UniqueId);
    } 

})