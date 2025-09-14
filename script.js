// Typing effect for About Me paragraph
window.addEventListener('DOMContentLoaded', function() {
    var aboutMe = document.querySelector('.about-me p');
    if (!aboutMe) return;
    var text = aboutMe.textContent;
    aboutMe.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            aboutMe.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 55); // Slower typing speed
        } else {
            aboutMe.style.borderRight = 'none';
        }
    }
    typeWriter();
});
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler (placeholder)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            console.log('Form submitted:', { name: name.value, email: email.value, message: message.value });
            var popup = document.getElementById('message-popup');
            if (popup) {
                popup.style.display = 'block';
                // Handle OK button click
                var okBtn = document.getElementById('popup-ok');
                if (okBtn) {
                    okBtn.onclick = function() {
                        popup.style.display = 'none';
                        name.value = '';
                        email.value = '';
                        message.value = '';
                    };
                }
            }
        });
    }

    // Add animation trigger for sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});