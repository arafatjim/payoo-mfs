
document.getElementById('btn-withdraw').addEventListener('click',function(event){
          //event page reload
          event.preventDefault();
          const withdrawAmount=parseFloat(document.getElementById('withdraw-amount').value);
          //console.log(typeof(withdrawAmount));
          const accountBalance=parseFloat(document.getElementById('account-balance').innerText);
          const inputBankName=document.getElementById('bank_name');
          const agentNumber=document.getElementById('agent-number').value;
          const pin=document.getElementById('input_pin').value;

          //const agentNumber=document.getElementById('agent-number').value;
          console.log(agentNumber);
         if((agentNumber == '1' || '2' || '3'|| '4') && (pin == '1234' || '2345' || '3456')){
         
            var sum=0;
          const totalAmount= accountBalance - withdrawAmount;
          document.getElementById('account-balance').innerText=totalAmount;
          //window.location.href='./homePage.html';
          
        
          
         }
         else{
          alert('Wrong Information');
          pin.innerText='';
          agentNumber.value='';
          withdrawAmount.innerText='';
         }
         
          
});



