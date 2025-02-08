//form submit reloading the page

document.getElementById('btn_login').addEventListener('click', function(event){
          event.preventDefault();
          console.log('login button clicked');
          const number=document.getElementById('input_phonnumber').value;
          console.log(number);
          const pin=document.getElementById('input_pin').value;
          console.log(pin);
          if(number=='12345' && pin=='1234'){
                    window.location.href='./homePage.html';
          }
          else{
                    alert('wrong password');
                    number.value='';
                    pin.value='';
          }
          });



// add money
document.getElementById('btn_money').addEventListener('click',function(event){
          event.preventDefault();

          const bankName=document.getElementById('bank_name').innerText;
          console.log(bankName);
          const bankAccount=document.getElementById('bank_ac').value;

          const addMoney=document.getElementById('money').value;
       
          const amount=document.getElementById('amount').value;
          if(bankName =='Bandladesh Bank' || 'Sonali Bank'|| 'Rupali Bank' || 'Janata Bank' ||'Islami Bank'){
                    alert('Add Bank Name');
                    bankName.innerText='';

                    if(bankAccount == '1' || '2' || '3'|| '4'){
                              var sum=0;
                              sum=sum+amount+addMoney;
                              console.log(amount+addMoney);
                    }
                    else{
                              alert('Add Bank Account');
                              bankAccount.value='';
                    }
          }
          else{
                    alert('Wrong Bank Name');
          }
});