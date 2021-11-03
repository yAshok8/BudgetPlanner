const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const inputCancel = document.querySelector('#btn-cancel');
const inputConfirm = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expense-list');
const totalExpensesOp = document.querySelector('#total-expenses');

let totalExpensesVal = 0;

const clear = () => { 
    inputReason.value = '';
    inputAmount.value = '';
};

inputCancel.addEventListener('click', clear);

inputConfirm.addEventListener('click', () =>{ 
    const reason = inputReason.value;
    const amount = inputAmount.value;
    
    if (reason.trim().length == 0 || amount <= 0 || amount.trim().length == 0){
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid Input';
        alert.message = 'Please Enter A Valid Input';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        alert.present();
        return;
    }

    console.log(reason, amount);

    totalExpensesVal += +amount;
    totalExpensesOp.textContent = totalExpensesVal;

    const newItem = document.createElement("ion-item");
    newItem.textContent = inputReason.value + ": $" +inputAmount.value;

    expenseList.appendChild(newItem);

    clear();


});

