//Function create Account
function createAccount() {
    let accountName = document.getElementById("accountName").value;
    let iniBalance = parseFloat(document.getElementById("iniBalance").value);

    if (!accountName || isNaN(iniBalance) || iniBalance < 0) {
        alert("Please enter account name and valid number.");
        return;
    }
    else {
        alert("Account created Successfully");
        return;
    }

    let account = {
        name: accountName,
        balance: iniBalance
    };
    //local storage

    localStorage.setItem("bankAccount", JSON.stringify(account));
    updateBalance(iniBalance);
}

//function deposit

function deposit() {
    let depAmount = parseFloat(document.getElementById("transactAmount").value);
    if (isNaN(depAmount) || depAmount <= 0) {
        alert("Please enter a valid deposit amount.");
        return;

    }

    let account = JSON.parse(localStorage.getItem("bankAccount"));
    account.balance += depAmount;
    localStorage.setItem("bankAccount", JSON.stringify(account));
    updateBalance(account.balance);
}

//function withdraw amount and validations

function withdraw() {
    let drawAmount = parseFloat(document.getElementById("transactAmount").value);
    if (isNaN(drawAmount) || drawAmount <= 0) {

    }

    let account = JSON.parse(localStorage.getItem("bankAccount"));
    if (drawAmount > account.balance) {
        alert("Insufficient funds.");
        return;

    }

    account.balance -= drawAmount;
    localStorage.setItem("bankAccount", JSON.stringify(account));
    updateBalance(account.balance);
}
// update balance function

function updateBalance(balance) {
    document.getElementById("balanceOutput").textContent = balance.toFixed(2);
}

// Initialize balance display
let storeAccount = localStorage.getItem("bankAccount");
if (storeAccount) {
    let account = JSON.parse(storeAccount);
    updateBalance(account.balance);



}