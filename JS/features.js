document.getElementById('btn-show-bonus').addEventListener('click',function(event){
          //event page reload
          event.preventDefault();  
          document.getElementById('get-bonus-form').classList.remove('hidden');
          document.getElementById('cash-out-show').classList.add('hidden');
          window.location.href='./bonus.html';
          
          

});
document.getElementById('btn-cash-out-show').addEventListener('click',function(event){
          //event page reload
          event.preventDefault();
          document.getElementById('cash-out-show').classList.remove('hidden');
          document.getElementById('get-bonus-form').classList.add('hidden');
          //window.location.href='./cashOut.html';
          document.getElementById('gift-title').innerText='Cash Out';
          
          
          
          
});