document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const toggleBtn = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    toggleBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Close menu when a nav link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // // Hide header on scroll down, show on scroll up
    // let lastScrollTop = 0;
    // window.addEventListener("scroll", function () {
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     const header = document.querySelector('header');

    //     if (scrollTop > lastScrollTop && scrollTop > 100) {
    //         header.style.transform = 'translateY(-100%)';
    //     } else {
    //         header.style.transform = 'translateY(0)';
    //     }
    //     lastScrollTop = scrollTop;
    // });

    // Close mobile menu if window is resized to desktop view
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
        }
    });
});

// Counter Data
const counters = {
    users: 300,
    subscribers: 50,
    events: 20,
    awards: 15
};

// Animate individual counter
function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
        if (current < target) {
            current += increment;
            element.innerHTML = current + "+";
        } else {
            element.innerHTML = target + "+";
            clearInterval(interval);
        }
    }, 20);
}

// Update all counters
function updateCounters() {
    animateCounter(document.getElementById('users-count'), counters.users);
    animateCounter(document.getElementById('subscribers-count'), counters.subscribers);
    animateCounter(document.getElementById('events-count'), counters.events);
    animateCounter(document.getElementById('awards-count'), counters.awards);
}

// Trigger counter animation on scroll
function onScrollToStatistics() {
    const statisticsSection = document.querySelector('.statistics');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statisticsSection);
}

window.onload = onScrollToStatistics;
