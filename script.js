let seconds = 0, minutes = 0, hours = 0;
let timer;
let running = false;

const updateDisplay = () => {
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
};

const startStopwatch = () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
        document.getElementById('startStop').textContent = 'Stop';
    } else {
        clearInterval(timer);
        running = false;
        document.getElementById('startStop').textContent = 'Start';
        recordLapTime();
    }
};

const resetStopwatch = () => {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    running = false;
    updateDisplay();
    document.getElementById('startStop').textContent = 'Start';
    document.getElementById('laps').innerHTML = '';
};

const recordLapTime = () => {
    const lapTime = `${document.getElementById('hours').textContent}:${document.getElementById('minutes').textContent}:${document.getElementById('seconds').textContent}`;
    const lapList = document.getElementById('laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
};

document.getElementById('startStop').addEventListener('click', startStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
