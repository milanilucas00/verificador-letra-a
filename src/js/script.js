document.getElementById('checkButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const resultMessage = document.getElementById('resultMessage');
    
    // Contar a quantidade de letras 'a' e 'A'
    const countA = (inputString.match(/a/gi) || []).length;

    if (countA > 0) {
        resultMessage.textContent = `A letra 'A' (maiúscula e minúscula) aparece ${countA} vez(es) na string.`;
    } else {
        resultMessage.textContent = "A letra 'A' não foi encontrada na string.";
    }
});
