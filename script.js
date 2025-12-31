// Intersection Observer for Scroll Animations
const observerOptions = {
    root: document.querySelector('.scroller'),
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in, .slide-up, .scale-up');
            elements.forEach(el => el.classList.add('visible'));
        } else {
            // Optional: Remove class to replay animation when scrolling back up
            // const elements = entry.target.querySelectorAll('.fade-in, .slide-up, .scale-up');
            // elements.forEach(el => el.classList.remove('visible'));
        }
    });
}, observerOptions);

document.querySelectorAll('.page').forEach(page => {
    observer.observe(page);
});

// Sakura Animation
function createSakura() {
    const sakuraContainer = document.getElementById('sakura-container');
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');

    // Random Properties
    const size = Math.random() * 15 + 10; // 10px to 25px
    const startLeft = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 5 + 5; // 5s to 10s
    const delay = Math.random() * 5;

    sakura.style.width = `${size}px`;
    sakura.style.height = `${size}px`;
    sakura.style.left = `${startLeft}vw`;
    sakura.style.top = `-50px`;
    sakura.style.animationDuration = `${duration}s`;
    sakura.style.animationDelay = `${delay}s`;

    sakuraContainer.appendChild(sakura);

    // Remove after animation
    setTimeout(() => {
        sakura.remove();
    }, (duration + delay) * 1000);
}

// Create Sakura constantly
setInterval(createSakura, 300);


// Star Animation
function createStars() {
    const starContainer = document.getElementById('stars-container');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const delay = Math.random() * 2;

        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;

        starContainer.appendChild(star);
    }
}

createStars();

// Fireworks Animation
function createFirework() {
    const container = document.getElementById('fireworks-container');
    const x = Math.random() * 100;
    const y = Math.random() * 80; // Keep in top 80%

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        particle.style.backgroundColor = color;
        particle.style.border = `1px solid ${color}`;

        particle.style.left = `${x}vw`;
        particle.style.top = `${y}vh`;

        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 100 + 50; // Distance

        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        particle.style.animationDelay = `${Math.random() * 0.2}s`; // Slight randomness in explosion

        container.appendChild(particle);

        // Cleanup
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

// Create fireworks randomly
setInterval(createFirework, 800);
