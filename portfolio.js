// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;

        // Simple validation
        if (name && email && subject && message) {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'alert alert-success alert-dismissible fade show';
            successMsg.innerHTML = `
                <strong>Success!</strong> Your message has been sent successfully. I'll get back to you soon.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            contactForm.parentNode.insertBefore(successMsg, contactForm);

            // Reset form
            contactForm.reset();

            // Remove alert after 5 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        } else {
            alert('Please fill in all fields');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service and portfolio cards
document.querySelectorAll('.service-card, .portfolio-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add fade-in animation to page on load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
