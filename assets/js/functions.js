document.addEventListener('DOMContentLoaded', function() {
    resetAnimations();
});

// Código del juego

function resetAnimations() {
    const scene = document.querySelector('.scene');
    const rocket = document.querySelector('.fa-rocket');
    const clouds = document.querySelectorAll('.fa-cloud');
    const countdown = document.querySelector('h3');

    scene.style.animation = 'none';
    rocket.style.animation = 'none';
    clouds.forEach(cloud => {
        cloud.style.animation = 'none';
    });

    // Reflow
    void scene.offsetWidth;
    void rocket.offsetWidth;
    clouds.forEach(cloud => {
        void cloud.offsetWidth;
    });

    scene.style.animation = null;
    rocket.style.animation = null;
    clouds.forEach(cloud => {
        cloud.style.animation = null;
    });

    let count = 3;
    countdown.textContent = `Despegue en ${count}`;
    const countdownInterval = setInterval(() => {
        count--;
        if (count >= 1) {
            countdown.textContent = `Despegue en ${count}`;
        } else {
            countdown.textContent = '¡Despegue!';
            clearInterval(countdownInterval);
        }
    }, 1000);
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function() {
    resetAnimations();
    resetButton.disabled = true;
    setTimeout(function() {
        resetButton.disabled = false;
    }, 3000);
});

// Cambio de colores
let mode = document.querySelector('.mode');
let powerOff = document.querySelector('.powerOff');

powerOff.onclick = function () {
    mode.classList.toggle('active')
}