
const projects = [
    {
        title: "Hospital Doctors Directory Kiosk",
        tech: "HTML, CSS, PHP, MySQL",
        images: [
            "others/assets/DoctorDirectory1.png", // Replace with your screenshots
            "others/assets/DoctorDirectory2.png",
            "others/assets/DoctorDirectory3.png",
            "others/assets/DoctorDirectory4.png"
        ],
        description: "Interactive kiosk system deployed at hospital entrance for patients to easily find and locate specialized doctors. Features intuitive search by illness type, specialty, and doctor availability with real-time updates. The touch-optimized interface ensures accessibility for all age groups.",
        features: [
            "Search doctors by illness type and medical specialty",
            "Real-time doctor availability and schedule status",
            "Touch-screen optimized interface for easy navigation",
            "Interactive department location mapping",
            "Quick search with intelligent auto-suggestions",
            "Patient-friendly interface with large, readable text"
        ],
        impact: "Reduced patient wait times by 35% and significantly improved hospital navigation efficiency"
    },
    {
        title: "Restaurant Table Reservation System",
        tech: "NetBeans, Java, MySQL",
        images: [
            "others/assets/Reservation1.jpg", // Replace with your screenshots
            "others/assets/Reservation2.jpg",
            "others/assets/Reservation3.jpg",
            "others/assets/Reservation4.jpg"
        ],
        description: "Comprehensive desktop application for restaurant table management and reservations. Streamlines the booking process with visual table layout representation, real-time availability tracking, and automated confirmation system. Built using Java in NetBeans IDE with robust database integration.",
        features: [
            "Visual drag-and-drop table layout management",
            "Real-time reservation tracking and updates",
            "Customer database with booking history",
            "Automated SMS/email booking confirmations",
            "Intelligent waitlist management system",
            "Comprehensive reporting and analytics dashboard"
        ],
        impact: "Increased booking efficiency by 40% and reduced no-shows by 25% for restaurant operations"
    },
    {
        title: "Online Bookstore E-Commerce",
        tech: "Vite, Tailwind CSS, PHP, MySQL",
        images: [
            "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=500&fit=crop", // Replace with your screenshots
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop"
        ],
        description: "Full-featured e-commerce platform for book sales with advanced search capabilities, intuitive shopping cart, and secure checkout process. Includes comprehensive admin panel for inventory management, order processing, and sales analytics. Built with modern frontend framework for optimal performance.",
        features: [
            "Advanced book search with filters (genre, author, price)",
            "Secure shopping cart and checkout system",
            "User account management with order history",
            "Admin panel for inventory and order management",
            "Payment gateway integration",
            "Responsive design for mobile shopping experience"
        ],
        impact: "Enabled seamless online book purchasing with 99.9% uptime and positive user feedback"
    },
    {
        title: "Hospital Intranet Portal",
        tech: "HTML, CSS, PHP, MySQL",
        images: [
            "others/assets/Intranet1.png", // Replace with your screenshots
            "others/assets/Intranet2.png",
            "others/assets/Intranet3.png",
            "others/assets/Intranet4.png"
        ],
        description: "Internal communication and collaboration platform designed for hospital departments. Enables staff to post announcements, schedule events, and coordinate departmental activities. Features role-based access control ensuring appropriate information visibility across different hospital units.",
        features: [
            "Department-specific announcement boards",
            "Event calendar with scheduling capabilities",
            "Role-based access control for different departments",
            "Document sharing and resource library",
            "Staff directory with contact information",
            "Emergency notification broadcast system"
        ],
        impact: "Improved inter-departmental communication by 60% and centralized hospital information management"
    }
];

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.getElementById('heroBg');
    const heroContent = document.getElementById('heroContent');
    
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.002);
    }
});

// Gallery state
let currentImageIndex = 0;
let currentProject = null;

// Modal Functions
function openModal(index) {
    const project = projects[index];
    currentProject = project;
    currentImageIndex = 0;
    const modalBody = document.getElementById('modalBody');
    
    let featuresHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');

    let imagesHTML = project.images.map((img, idx) => 
        `<img src="${img}" alt="${project.title} - Screenshot ${idx + 1}" class="modal-image ${idx === 0 ? 'active' : ''}">`
    ).join('');

    let dotsHTML = project.images.map((_, idx) => 
        `<div class="gallery-dot ${idx === 0 ? 'active' : ''}" onclick="goToImage(${idx})"></div>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="modal-gallery">
            ${imagesHTML}
            <button class="gallery-nav prev" onclick="changeImage(-1)">‹</button>
            <button class="gallery-nav next" onclick="changeImage(1)">›</button>
            <div class="image-counter">${currentImageIndex + 1} / ${project.images.length}</div>
            <div class="gallery-dots">
                ${dotsHTML}
            </div>
        </div>
        <div class="modal-body-content">
            <h3>${project.title}</h3>
            <p class="modal-tech">${project.tech}</p>
            <p class="modal-description">${project.description}</p>
            <h4>Key Features</h4>
            <ul class="features-list">
                ${featuresHTML}
            </ul>
            <div class="impact">
                <strong>Impact:</strong> ${project.impact}
            </div>
        </div>
    `;
    
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function changeImage(direction) {
    const images = document.querySelectorAll('.modal-image');
    const dots = document.querySelectorAll('.gallery-dot');
    const counter = document.querySelector('.image-counter');
    
    images[currentImageIndex].classList.remove('active');
    dots[currentImageIndex].classList.remove('active');
    
    currentImageIndex += direction;
    
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
    counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
}

function goToImage(index) {
    const images = document.querySelectorAll('.modal-image');
    const dots = document.querySelectorAll('.gallery-dot');
    const counter = document.querySelector('.image-counter');
    
    images[currentImageIndex].classList.remove('active');
    dots[currentImageIndex].classList.remove('active');
    
    currentImageIndex = index;
    
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
    counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeModalOnBackdrop(event) {
    if (event.target.id === 'modal') {
        closeModal();
    }
}

// Smooth reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe skill tags
    const skills = document.querySelectorAll('.skill-tag');
    skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(30px)';
        skill.style.transition = `all 0.5s ease ${index * 0.05}s`;
        observer.observe(skill);
    });
});

// Add parallax to sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Hero parallax
    const heroBg = document.getElementById('heroBg');
    const heroContent = document.getElementById('heroContent');
    
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = Math.max(0, 1 - (scrolled * 0.002));
    }

    // Projects section parallax
    const projectsSection = document.querySelector('.projects');
    if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const offset = window.pageYOffset - projectsSection.offsetTop;
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            projectsSection.style.backgroundPositionY = `${offset * 0.3}px`;
        }
    }
});

// Add smooth hover effect to nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add this to your index.js file or create a separate contact.js file

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const formMessage = document.getElementById('formMessage');
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';
            
            // Get form data
            const formData = new FormData(this);
            
            try {
                const response = await fetch('contact.php', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    formMessage.textContent = data.message;
                    formMessage.classList.add('success');
                    this.reset(); // Clear form
                } else {
                    formMessage.textContent = data.message;
                    formMessage.classList.add('error');
                }
            } catch (error) {
                formMessage.textContent = 'An error occurred. Please try again later or contact me directly via email.';
                formMessage.classList.add('error');
            } finally {
                // Re-enable button and restore original state
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                formMessage.style.display = 'block';
                
                // Auto-hide success message after 5 seconds
                if (formMessage.classList.contains('success')) {
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 5000);
                }
            }
        });
    }
});

           
