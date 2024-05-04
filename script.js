const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


document.addEventListener('DOMContentLoaded', function () {
    
    var questions = document.querySelectorAll('.question');
    
    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            
            this.classList.toggle('active');
            var answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});



document.getElementById('payment-form').addEventListener('submit', function(event) {
    
    event.preventDefault();
  
   
    alert('Congratulations! Your payement details are confirmed');
});



document.getElementById('login-form').addEventListener('submit', function(event) {
    
    event.preventDefault();
  
   
    alert('Welcome to BRANSTORE!!');
});



  