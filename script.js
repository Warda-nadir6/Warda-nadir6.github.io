


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



  