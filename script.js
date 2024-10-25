function calculateLoan(){
    const loanAmount =parseFloat(Document.getElementById("loanAmountInput").value);
    const intersRate=parseFloat(Document.getElementById("intersRatenput").value);
    const loanTerm=parseFloat(Document.getElementById("loanTermInput").value);

if(isNaN(loanAmount)||isNaN(intersRate)||isNaN( loanTerm)){
    showError('please enter valid number for all fields');
    return;
}


const monthlyInterest=intersRate/100/12;
const totalPayment = loanTerm;
const monthlyPayment = (loanAmount*monthlyInterest)/(1-Math.pow(1+monthlyInterest,-totalPayment));
const totalInterest =(monthlyPayment*totalPayment) -loanAmount;
displayResult(monthlyPayment,totalPayment)
}

function displayResult(monthlyPayment,totalInterest){
    const resulDiv = document.getElementById("result");

    resulDiv.innerHTML =`
    <p><strong>Monthly ayment :${monthlyPayment.toFixed(2)}</strong></p>
    
        <p><strong>Monthly ayment :${monthlyPayment.toFixed(2)}</strong></p>`;

}

function showError(message){
    const resulDiv = document.getElementById("result");
    resulDiv.innerHTML = `<p class="error">${message}</p>`
}
document.getElementById('calculateBtn').addEventListener("click",calculateLoan);