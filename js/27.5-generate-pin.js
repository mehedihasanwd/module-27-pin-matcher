/*========================================================
    27-5 Pin matcher overview, Generate pin and display it
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