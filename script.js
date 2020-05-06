//#1 vending machine 

let buttonContainer = document.querySelector(".button-container");
let total = document.querySelector(".total");
let currentTotal = 0;

// buttonContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("cola")) {
//         currentTotal += 2.00;
//         total.innerText = `Total: $${currentTotal}`;
//     } else if (event.target.classList.contains("peanuts")) {
//         currentTotal += 3.00;
//         total.innerText = `Total: $${currentTotal}`;
//     } else if (event.target.classList.contains("chocolate")) {
//         currentTotal += 4.00;
//         total.innerText = `Total: $${currentTotal}`;
//     } else {
//         currentTotal += 6.00;
//         total.innerText = `Total: $${currentTotal}`;
//     }
// });

buttonContainer.addEventListener("click", (event) => {
    console.log(event);
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"));
        console.log(amount);
        currentTotal += amount;
        total.innerText = `Total $${currentTotal}.00`;
    }
});

//#2 make money

let form = document.querySelector(".form");
let coinHolder = document.querySelector(".coin-holder");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form); //remember this!!!!
    let number = data.get("number");
    let coint = data.get("coint");
    console.log(number, coint);
    for (let i = 0; i < number; i++) {
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin-div");
        coinDiv.innerText = coint;
        coinHolder.append(coinDiv);
    }
    form.reset();
})

coinHolder.addEventListener("click", (event) => {
    if (event.target.classList.contains("coin-div")) {
        event.target.remove();
    }
})

let bulbContainer = document.querySelector(".light-bulb");
let lightbulb = document.querySelector(".light");
//let bulbButtons = document.querySelectorAll(".bulb");
bulbContainer.addEventListener("click", (event) => {
    console.log(event);
    if (event.target.classList.contains("on")) {
        lightbulb.style.backgroundColor = "red";
    } else if (event.target.classList.contains("off")) {
        lightbulb.style.backgroundColor = "grey";
    } else if (event.target.classList.contains("toggle")) {
        if (lightbulb.style.backgroundColor === "grey") {
            lightbulb.style.backgroundColor = "red";
        } else {
            lightbulb.style.backgroundColor = "grey"
        }
    } else if (event.target.classList.contains("end")) {
        lightbulb.remove();
        document.querySelector(".on").disabled = true;
        document.querySelector(".off").disabled = true;
        document.querySelector(".toggle").disabled = true;
        document.querySelector(".end").disabled = true;

    }


})

//couldnt figure out how to select all the elements called bulb to disable
//had some problems with toggle, i know there is a method but i couldnt figure out how to implement it
//Do i have to have an else statement at the ned or can I end on and else if?




