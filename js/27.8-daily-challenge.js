/*===============================================
    27-8 Pin Matcher overview and daily challenge
================================================*/

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

// 27.7 

function verifyPin() {
    let pin = document.getElementById('display-pin').value;
    let typedNumbers = document.getElementById('typed-numbers').value;

    let notifySuccess = document.getElementById('notify-success');
    let notifyFail = document.getElementById('notify-fail');
    if(pin == typedNumbers) {
            notifySuccess.style.display = 'block';
            notifyFail.style.display = 'none';
    }
    else {
            notifyFail.style.display = 'block';
            notifySuccess.style.display = 'none';
    } 
};

// 27.8

