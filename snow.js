setInterval(createsnow, 100);

function createsnow() {
    const snow = document.createElement('i');
    snow.classList.add('snow');
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.animationDuration = Math.random() * 3 + 2 + 's';
    //between 2 - 5 seconds
    snow.style.opacity = Math.random();
    snow.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 5000)
}