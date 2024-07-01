let timer; // To hold the interval timer
let startTime; // To store the start time
let elapsedTime = 0; // To store the elapsed time in milliseconds

const display = document.getElementById('display');
const startPauseButton = document.getElementById('startPause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function startPause() {
    if (!timer) {
        // Start the stopwatch
        startPauseButton.textContent = 'Pause';
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
    } else {
        // Pause the stopwatch
        startPauseButton.textContent = 'Resume';
        clearInterval(timer);
        timer = null;
    }
}

function reset() {
    // Reset the stopwatch
    clearInterval(timer);
    timer = null;
    startPauseButton.textContent = 'Start';
    elapsedTime = 0;
    display.textContent = '00:00:00.000';
    lapsList.innerHTML = '';
}

function lap() {
    // Record a lap time
    if (timer) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapsList.prepend(lapItem);
    }
}

function updateDisplay() {
    // Update the stopwatch display
    const elapsed = Date.now() - startTime;
    elapsedTime = elapsed;
    display.textContent = formatTime(elapsed);
}

function formatTime(milliseconds) {
    // Format time as hh:mm:ss.SSS
    const date = new Date(milliseconds);
    return date.toISOString().substr(11, 12);
}

// Event listeners for buttons
startPauseButton.addEventListener('click', startPause);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);
