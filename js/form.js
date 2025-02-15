document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

  
    setTimeout(() => {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Mensagem enviada com sucesso!';
        messageDiv.classList.add('success');
        messageDiv.style.display = 'block';

        document.getElementById('contactForm').reset();


        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }, 1000);
});