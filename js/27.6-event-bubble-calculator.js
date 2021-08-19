/*========================================================
    27-6 Use event bubble to create calculator and clear
=========================================================*/

function getPin() {
        let pin = Math.round(Math.random() * 10000);
        let pinString = pin + '';
        if(pinString.length == 4) {
            return pin;
        }
        else {
            console.log('Got 3 digit and calling again, pin');
            return getPin();
        }
}

function generatePin() {
    let pin = Math.round(Math.random() * 10000);
    document.getElementById('display-pin').value = pin;
}

// 27.6

document.getElementById('key-pad').addEventListener('click', function(event) {
    let number = event.target.innerText;
    let calcInput = document.getElementById('typed-numbers');
    // let calc = document.getElementById('typed-numbers').value = number;
    if(isNaN(number)) {
        if(number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        let previousNumber = calcInput.value;
        let newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
});