// Variables And Object

let lfcur = document.getElementById('fCur');
let ltcur = document.getElementById('tCur');
let country = { 
    'USD': {'EUR': 0.85, 'GBP': 0.73, 'JPY': 111.20, 'CAD': 1.27},
    'EUR': {'USD': 1.18, 'GBP': 0.86, 'JPY': 130.89, 'CAD': 1.48},
    'GBP': {'USD': 1.38, 'EUR': 1.16, 'JPY': 152.22, 'CAD': 1.73},
    'JPY': {'USD': 0.009, 'EUR': 0.008, 'GBP': 0.007, 'CAD': 0.011},
    'CAD': {'USD': 0.79, 'EUR': 0.68, 'GBP': 0.58, 'JPY': 88.11}
};

// Country Loop

for (var currency in country) {
    lfcur.innerHTML += `<option value="${currency}">${currency}</option>`;
    ltcur.innerHTML += `<option value="${currency}">${currency}</option>`;
}

// Onclick Function 

function convert() {
    let value = parseFloat(document.getElementById('amount').value);
    let fCur = document.getElementById('fCur').value;
    let tCur = document.getElementById('tCur').value;

    let exRate = getExchangeRate(fCur, tCur);
    
    // Validations
  
    if (exRate !== null) {
        let conAmount = value * exRate;
        document.getElementById('res').innerHTML = '<h4>Converted Amount:</h4>' + value + ' ' + fCur + ' = ' + conAmount.toFixed(2) + ' ' + tCur;
    } 
    else if(fCur === tCur) {
        document.getElementById('res').innerHTML = 'Please select different currencies';
        if (isNaN(value)) {
            document.getElementById('res').innerHTML = 'Please Enter a number';
        }
        else if(value <= 0){
            document.getElementById('res').innerHTML = 'Please Enter a valid number';
        }
    }
}

// Result Function

function getExchangeRate(fCur, tCur) {
    if (country[fCur] && country[fCur][tCur]) {
        return country[fCur][tCur];
    } else {
        return null;
    }
}