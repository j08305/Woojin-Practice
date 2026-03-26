
document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const numbers = generateLottoNumbers();
            const row = document.createElement('div');
            row.classList.add('lotto-row');
            displayLottoNumbers(numbers, row);
            lottoNumbersContainer.appendChild(row);
        }
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayLottoNumbers(numbers, container) {
        for (const number of numbers) {
            const ball = document.createElement('div');
            ball.classList.add('ball');
            ball.textContent = number;
            ball.style.backgroundColor = getBallColor(number);
            container.appendChild(ball);
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
