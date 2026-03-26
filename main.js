
document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayLottoNumbers(numbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayLottoNumbers(numbers) {
        lottoNumbersContainer.innerHTML = '';
        for (const number of numbers) {
            const ball = document.createElement('div');
            ball.classList.add('ball');
            ball.textContent = number;
            ball.style.backgroundColor = getBallColor(number);
            lottoNumbersContainer.appendChild(ball);
        }
    }

    function getBallColor(number) {
        if (number <= 10) return 'gold';
        if (number <= 20) return 'dodgerblue';
        if (number <= 30) return 'firebrick';
        if (number <= 40) return 'gray';
        return 'limegreen';
    }
});
