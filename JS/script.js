//form submit reloading the page



document.getElementById('btn_login').addEventListener('click',function(event){
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
})