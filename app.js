// Intersection Observer for .appear elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.01
});

const appearElements = document.querySelectorAll('.appear');
appearElements.forEach(element => observer.observe(element));

// Bubble Expansion on Scroll
const bubbles = document.querySelector('.bubbles');
const storySection = document.querySelector('.story-content');

let lastScrollY = 0; // Track previous scroll position

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const storySectionTop = storySection.offsetTop;
    const scrollDelta = scrollY - lastScrollY; // Calculate scroll speed

    if (scrollY > storySectionTop - window.innerHeight / 2) {
        bubbles.classList.add('expanded');
        bubbles.innerHTML = '';
        for (let i = 0; i < 50; i++) {
            const bubble = document.createElement('img');
            bubble.src = 'images/bubble.png';
            bubble.style.width = `${Math.random() * 50 + 20}px`;
            bubble.style.animationDuration = `${7 - Math.abs(scrollDelta) * 0.1}s`;
            bubble.style.animationDelay = `${Math.random() * 7}s`;
            bubbles.appendChild(bubble);
        }
    } else {
        bubbles.classList.remove('expanded');
        bubbles.innerHTML = '';
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('img');
            bubble.src = 'images/bubble.png';
            bubble.style.width = `${Math.random() * 50 + 20}px`;
            bubble.style.animationDuration = `${7 - Math.abs(scrollDelta) * 0.1}s`;
            bubble.style.animationDelay = `${Math.random() * 3}s`;
            bubbles.appendChild(bubble);
        }
    }

    if (scrollY > storySectionTop) {
        bubbles.classList.add('full');
    } else {
        bubbles.classList.remove('full');
    }

    lastScrollY = scrollY;
});