document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const emailInput = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    // Регулярное выражение для проверки Gmail
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(emailInput)) {
        // Если email корректный, скрываем сообщение об ошибке и выполняем другие действия
        errorMessage.style.display = 'none';
        console.log('Valid Gmail address');
        // Здесь можно добавить логику для отправки формы или дальнейшей обработки
    } else {
        // Если email некорректный, показываем сообщение об ошибке
        errorMessage.style.display = 'block';
    }
});