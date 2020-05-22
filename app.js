window.onload = function(){
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const enteredExpenses = document.querySelector('#expenses')
const totalExpensesOutput = document.querySelector('#total-expenses')

let totalExpenses = 0;
const clear = () => {
    reasonInput.value = '',
    amountInput.value = ''
}
function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Input';
    alert.message = 'Please enter valid reason and amount!';
    alert.buttons = ['Okay'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

confirmBtn.addEventListener('click',() => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 ||
        enteredAmount <=0 ||
        enteredAmount.trim().length <= 0
    ) {
        presentAlert();
        return;

    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': INR ' + enteredAmount;

    enteredExpenses.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = " : INR " + String(totalExpenses);

    clear();

});


cancelBtn.addEventListener('click',clear);
}