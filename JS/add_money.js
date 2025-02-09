console.log('add money js loaded');
document.getElementById('btn-add-money').addEventListener('click',function(event){
          //event page reload
          event.preventDefault();
          
          const addMoneyInput=parseFloat(document.getElementById('input-amount').value);
          console.log(typeof(addMoneyInput));

          const accountBalance=parseFloat(document.getElementById('account-balance').innerText);
          const inputBankName=document.getElementById('bank_name');

          const inputBankAccount=document.getElementById('bank_account-number').value;
          const pin=document.getElementById('input_pin').value;

         if((inputBankAccount== '1' || '2' || '3'|| '4') && (pin== '1234' || '2345' || '3456')){
          var sum=0;
          const totalAmount= sum + accountBalance + addMoneyInput;
          document.getElementById('account-balance').innerText=totalAmount;
          
          //window.location.href='./homePage.html'
         }
         else{
          alert('Select Bank Name');
         }
          
});