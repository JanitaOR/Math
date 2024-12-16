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
    setTimeout(() => { document.getElementById('answer').focus(); }, 10);
}
function handleKeyUp(event) { 
    if (event.key === 'Enter') { checkAnswer(); } 
}