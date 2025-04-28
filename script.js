// Utility function to log errors
function logError(message) {
    console.error(`[Nuestro Amor Eterno] Error: ${message}`);
}

// Love Timer functionality
const startDate = new Date('2025-01-12T00:00:00');
const daysElement = document.getElementById('timer-days');
const hoursElement = document.getElementById('timer-hours');
const minutesElement = document.getElementById('timer-minutes');
const secondsElement = document.getElementById('timer-seconds');

if (daysElement && hoursElement && minutesElement && secondsElement) {
    function updateTimer() {
        const now = new Date();
        const timeDifference = now - startDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    window.addEventListener('unload', () => {
        clearInterval(timerInterval);
    });
} else {
    logError('Timer elements not found in the DOM.');
}

// Love Note functionality
const loveNoteBtn = document.getElementById('love-note-btn');
const loveNote = document.getElementById('love-note');
const closeNoteBtn = document.getElementById('close-note-btn');

if (loveNoteBtn && loveNote && closeNoteBtn) {
    loveNoteBtn.addEventListener('click', () => {
        loveNote.style.display = 'block';
    });

    closeNoteBtn.addEventListener('click', () => {
        loveNote.style.display = 'none';
    });
} else {
    logError('Love Note elements not found in the DOM.');
}

// Virtual Hug functionality
const virtualHugBtn = document.getElementById('virtual-hug-btn');
const virtualHug = document.getElementById('virtual-hug');
const figures = document.querySelectorAll('.figure');
const arms = document.querySelector('.arms');
const hugHearts = document.querySelectorAll('.hug-heart');

if (virtualHugBtn && virtualHug && figures.length && arms && hugHearts.length) {
    virtualHugBtn.addEventListener('click', () => {
        figures.forEach(figure => figure.classList.remove('active'));
        arms.classList.remove('active');
        hugHearts.forEach(heart => heart.classList.remove('active'));

        virtualHug.style.display = 'block';
        setTimeout(() => {
            figures.forEach(figure => figure.classList.add('active'));
            arms.classList.add('active');
            hugHearts.forEach(heart => heart.classList.add('active'));
        }, 10);

        setTimeout(() => {
            virtualHug.style.display = 'none';
        }, 3000);
    });
} else {
    logError('Virtual Hug elements not found in the DOM.');
}

// Love Letter Generator functionality
const generateLetterBtn = document.getElementById('generate-letter-btn');
const loveLetterDiv = document.getElementById('love-letter');
const nicknameInput = document.getElementById('nickname');
const memoryInput = document.getElementById('memory');

if (generateLetterBtn && loveLetterDiv && nicknameInput && memoryInput) {
    generateLetterBtn.addEventListener('click', () => {
        const nickname = nicknameInput.value.trim() || 'Mi Amor';
        const memory = memoryInput.value.trim() || 'nuestro primer encuentro bajo las estrellas';
        const letter = `Mi querida ${nickname},\n\nCada momento contigo es como un sueño del que nunca quiero despertar. Recuerdo con tanto cariño ${memory}, y cómo mi corazón supo desde entonces que eras mi todo. Tu sonrisa es mi luz, y tu amor mi refugio. Te amo con cada latido de mi corazón, como un ECG que no puede mentir.\n\nSiempre tuyo,\nTu amor eterno.`;
        loveLetterDiv.textContent = letter;
        loveLetterDiv.classList.add('visible');
    });
} else {
    logError('Love Letter Generator elements not found in the DOM.');
}

// Starry Night Sky functionality
const starryNightBtn = document.getElementById('starry-night-btn');
const starryNight = document.getElementById('starry-night');
const shootingStars = [
    document.getElementById('shooting-star-1'),
    document.getElementById('shooting-star-2'),
    document.getElementById('shooting-star-3')
];
const closeStarryBtn = document.getElementById('close-starry-btn');

if (starryNightBtn && starryNight && shootingStars.every(star => star) && closeStarryBtn) {
    let shootingStarIntervals = [];

    // Function to generate a random curved path for a shooting star
    function generateRandomPath() {
        const startX = Math.random() * 400; // Random start X (0 to 400)
        const startY = Math.random() * 50; // Random start Y (0 to 50)
        const controlX = startX + Math.random() * 100 + 50; // Control point X
        const controlY = startY + Math.random() * 100 + 50; // Control point Y
        const endX = startX + 200 + Math.random() * 100; // End X
        const endY = startY + 150 + Math.random() * 50; // End Y
        return `M${startX} ${startY} Q${controlX} ${controlY} ${endX} ${endY}`;
    }

    // Function to trigger a shooting star
    function triggerShootingStar(star) {
        const path = star.querySelector('.shooting-path');
        path.setAttribute('d', generateRandomPath());
        star.classList.remove('active');
        void star.offsetWidth; // Force animation restart
        star.classList.add('active');
    }

    starryNightBtn.addEventListener('click', () => {
        console.log('Opening Starry Night panel');
        starryNight.style.display = 'block';

        // Start a meteor shower effect with random intervals
        shootingStars.forEach((star, index) => {
            const interval = setInterval(() => {
                triggerShootingStar(star);
            }, (Math.random() * 2000 + 2000)); // Random interval between 2s and 4s
            shootingStarIntervals.push(interval);
            triggerShootingStar(star); // Initial trigger
        });
    });

    closeStarryBtn.addEventListener('click', () => {
        console.log('Closing Starry Night panel');
        starryNight.style.display = 'none';
        shootingStarIntervals.forEach(interval => clearInterval(interval));
        shootingStarIntervals = [];
    });
} else {
    logError('Starry Night elements not found in the DOM.');
}

// Heartbeat Sound Toggle functionality
const heartbeatSoundBtn = document.getElementById('heartbeat-sound-btn');
const heartbeatSound = document.getElementById('heartbeat-sound');
let isPlaying = false;

if (heartbeatSoundBtn && heartbeatSound) {
    heartbeatSoundBtn.addEventListener('click', () => {
        if (isPlaying) {
            heartbeatSound.pause();
            heartbeatSoundBtn.textContent = 'Activar latidos del corazón 💓';
        } else {
            heartbeatSound.play().catch(error => {
                logError(`Failed to play heartbeat sound: ${error.message}`);
            });
            heartbeatSoundBtn.textContent = 'Desactivar latidos del corazón 💓';
        }
        isPlaying = !isPlaying;
    });
} else {
    logError('Heartbeat Sound elements not found in the DOM.');
}

// Color Picker functionality
const bgColorInput = document.getElementById('bg-color');
const gradientOverlay = document.getElementById('gradient-overlay');

if (bgColorInput && gradientOverlay) {
    bgColorInput.addEventListener('input', (e) => {
        const color = e.target.value;
        gradientOverlay.style.background = `linear-gradient(135deg, ${color}66, ${color}33)`;
    });
} else {
    logError('Color Picker elements not found in the DOM.');
}

// Background Music Control
const backgroundMusic = document.getElementById('background-music');
if (backgroundMusic) {
    backgroundMusic.play().catch(error => {
        logError(`Failed to play background music: ${error.message}`);
    });
} else {
    logError('Background Music element not found in the DOM.');
}