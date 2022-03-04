const btn = document.querySelector(".btn")
const error = document.querySelector(".error")
const tip = document.querySelector(".tip")
const total = document.querySelector(".total")

btn.addEventListener("click", calculateTip);

function hideError() {
    setTimeout(() => { //function, time in ms, let's the error disappear after 3000 ms
        error.style.display = "none"
    }, 5000)
}

function calculateTip() {
    const tip = document.querySelector(".tip")
    const bill = document.querySelector(".bill").value
    const rate = document.querySelector(".rate").value

    if (bill == "" || rate == 0) {
        error.style.display = "block"
        hideError()
    } else if (isNaN(bill)){ //isNaN checks whether bill is a number or not and returns a boolean
        error.innerHTML = "Please enter a number."
        error.style.display = "block"
        hideError()
    } else {
        let tipAmount = Math.round(bill * rate)
        tip.innerHTML = `Tip amount: ${tipAmount}$`
        let totalBill = Number(bill) + tipAmount //bill is a string, convert to number for addition
        total.innerHTML = `Total amount: ${totalBill}$`
    }
}