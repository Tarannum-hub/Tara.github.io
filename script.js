document.querySelectorAll('nav a').forEach(link => 
    {link.addEventListener('click', e => {e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {target.scrollIntoView({ behavior: 'smooth' });
    }
    });
});
function toggleContent() {
    const content = document.getElementById("extraContent");
    const toggleText = document.getElementById("toggleText");
  // Toggle content visibility
    content.style.display = content.style.display === "none" ? "block" : "none";
  // Change text color only when clicked
    toggleText.style.color = "blue";
} 
      //about me//
      //calculator-box//
function calculateTip(billAmount, chosenTip){
    const percentageRates = {
        ten: 10,
        fifteen: 15,
        twenty: 20,
};
    let chosenPercentage = percentageRates[chosenTip] || chosenTip;

    const tipAmount = (billAmount*chosenPercentage)/100;
    return tipAmount;
}
    function handleCalculate(){
        const billAmount = parseFloat(document.getElementById("billInput").value);

        const tipPercent = parseFloat(document.getElementById("tipInput").value);

        if (isNaN(billAmount) || isNaN(tipPercent)){
            alert("Please enter valid numbers for both fields.");
            return;
        }
        const tipAmount = calculateTip(billAmount, tipPercent);
        const totalBill = billAmount + tipAmount;

        document.getElementById("billDisplay").textContent = `User Inputs Bill: £${billAmount.toFixed(2)}`;
        document.getElementById("tipDisplay").textContent = `User Select Tip Percent: ${tipPercent}%`;
        document.getElementById("totalDisplay").textContent = `Total bill including tip: £${totalBill.toFixed(2)}`;
    }  
      //calculator-box//
      
      //modalpopup//
function captureCode(codeId, modalId, imgId) {
  const codeElement = document.getElementById(codeId);
    
    const originalDisplay = codeElement.style.display;
    codeElement.style.display = 'block'; // temporarily show
    html2canvas(codeElement).then(canvas => {
      document.getElementById(imgId).src = canvas.toDataURL('image/png');
      document.getElementById(modalId).style.display = 'flex';
      codeElement.style.display = 'none'; // hide again
  });
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function downloadImage(imgId, fileName) {
    const imgSrc = document.getElementById(imgId).src;
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = fileName;
    link.click();
  }
      //modalpopup//

      //ATM Machine//

    function atmMachine(withdrawalAmount, enteredPin) {
    const storedPin = 1234;
    let accountBalance = 200;
    if (enteredPin !== storedPin) {
    return "Transaction declined: Incorrect Pin.<br> Hint:1234";
}
    if (withdrawalAmount > accountBalance){
    return "Transaction declined: Insufficient balance";
}
    accountBalance -= withdrawalAmount;
    return `Transaction approved: \nYou withdrew £${withdrawalAmount}. \nRemaining balance: £${accountBalance}.`;
}

function processATM() {
  const withdrawalAmount = parseFloat (document.getElementById('withdrawInput').value);
  const enteredPin = parseInt(document.getElementById('pinInput').value);

  const result = atmMachine(withdrawalAmount, enteredPin);
  document.getElementById('resultDisplay').innerHTML = result;
}

//onsole.log(atmMachine(50 , 1234));//
      
//ATM Machine//

        //Contact us//
(function(){
        emailjs.init("YIxIyRD6T0Ti_gxHu");
        })();

  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_0to9tr3', 'template_5hwcsvv', this)
        .then(() => {
          alert('Email Sent!');
        }, (error) => {
          console.log('FAILED...', error);
          alert('Email failed to send.');
        });
    });
  };
        //Contact us//





