document.getElementById('btn-show-bonus').addEventListener('click',function(event){
          event.preventDefault();
          // document.getElementById('get-bonus-form').classList.remove('hidden');
          // document.getElementById('cash-out-show').classList.add('hidden');
          console.log('show bonus clicked');
          
});
document.getElementById('btn-bonus').addEventListener('click',function(event){
          event.preventDefault();
          
          const bonus=document.getElementById('coupon').value;
          if(bonus=='bonus'){
                    const accountBalance=parseFloat(document.getElementById('account-balance').innerText);
                    const bonusAmount=accountBalance* 0.10;
                    const totalAmount= accountBalance + bonusAmount;
                    document.getElementById('account-balance').innerText=totalAmount;
          }
          else{    
                    alert('wrong coupon');
           }

          console.log(bonus);
});

