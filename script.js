function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateProblem() {
    const operation = document.getElementById('operation').value;
    const difficulty = parseInt(document.getElementById('difficulty').value);
    const max = Math.pow(10, difficulty);
    const num1 = getRandomInt(max);
    const num2 = getRandomInt(max);

    const problem = `${num1} ${operation} ${num2}`;
    document.getElementById('problem').innerText = problem;
    document.getElementById('result').innerText = '';
}

// Lytte etter Enter-tasten på input-feltet
document.getElementById('answer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

function checkAnswer() {
    const problem = document.getElementById('problem').innerText;
    const answer = parseInt(document.getElementById('answer').value);

    const correctAnswer = eval(problem);

    if (answer === correctAnswer) {
        document.getElementById('result').innerText = 'Riktig svar! Fortsett til neste.';
        generateProblem();
        document.getElementById('answer').value = '';
    } else {
        document.getElementById('result').innerText = 'Galt svar. Prøv igjen.';
    }

    // Sett fokus tilbake til input-feltet
    document.getElementById('answer').focus();
}
