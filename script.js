// Destinations Data
const destinations = [
    {
        name: "Bali",
        tours: 12,
        badge: "Beach Paradise",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 350'><rect fill='%23c0e8f9' width='400' height='350'/><path fill='%2386d3f4' d='M0 250 Q100 200 200 250 T400 250 V350 H0 Z'/><circle fill='%23ffd93d' cx='320' cy='60' r='40'/><text x='50' y='180' font-size='24' fill='%23333' font-family='Arial'>Bali</text></svg>"
    },
    {
        name: "Iceland",
        tours: 8,
        badge: "Adventure",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 350'><rect fill='%23d4e9d7' width='400' height='350'/><path fill='%2387b38d' d='M0 280 L100 250 L200 270 L300 240 L400 260 V350 H0 Z'/><text x='50' y='180' font-size='24' fill='%23333' font-family='Arial'>Iceland</text></svg>"
    },
    {
        name: "Morocco",
        tours: 10,
        badge: "Cultural",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 350'><rect fill='%23f4e4c1' width='400' height='350'/><path fill='%23d4a574' d='M0 200 Q100 180 200 200 T400 200 V350 H0 Z'/><circle fill='%23e8b86d' cx='100' cy='100' r='50'/><circle fill='%23d4a574' cx='320' cy='120' r='40'/><text x='50' y='180' font-size='24' fill='%23333' font-family='Arial'>Morocco</text></svg>"
    },
    {
        name: "Japan",
        tours: 15,
        badge: "Heritage",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 350'><rect fill='%23ffd6d6' width='400' height='350'/><path fill='%23ff9a9a' d='M0 240 L400 260 V350 H0 Z'/><circle fill='%23ff6b9d' cx='200' cy='100' r='30'/><text x='50' y='180' font-size='24' fill='%23333' font-family='Arial'>Japan</text></svg>"
    },
    {
        name: "New Zealand",
        tours: 9,
        badge: "Nature",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 350'><rect fill='%23c8e6c9' width='400' height='350'/><path fill='%2381c784' d='M0 220 Q100 200 200 220 T400 220 V350 H0 Z'/><text x='50' y='180' font-size='24' fill='%23333' font-family='Arial'>New Zealand</text></svg>"
    }
];

// Tours Data
const tours = [
    {
        title: "Tropical Island Paradise",
        price: 2450,
        rating: 9.2,
        days: 5,
        location: "Maldives",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%2387ceeb' width='400' height='250'/><circle fill='%23ffd700' cx='350' cy='40' r='30'/><path fill='%23f4a460' d='M0 180 Q100 160 200 180 T400 180 V250 H0 Z'/><path fill='%2332cd32' d='M50 200 L70 180 L90 200 Z'/><path fill='%2332cd32' d='M150 210 L170 190 L190 210 Z'/></svg>"
    },
    {
        title: "Mountain Trekking Experience",
        price: 1890,
        rating: 8.9,
        days: 7,
        location: "Nepal",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%23d3d3d3' width='400' height='250'/><path fill='%23a9a9a9' d='M0 150 L100 100 L200 130 L300 90 L400 120 V250 H0 Z'/><path fill='white' d='M150 70 L170 60 L190 70 L210 55 L230 70'/><circle fill='%23fffacd' cx='350' cy='40' r='25' opacity='0.6'/></svg>"
    },
    {
        title: "European City Discovery",
        price: 3200,
        rating: 9.5,
        days: 10,
        location: "Europe",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%23ff7f50' width='400' height='250'/><circle fill='%23ffd700' cx='80' cy='60' r='40'/><rect fill='%234b0082' x='150' y='150' width='60' height='100'/><rect fill='%234b0082' x='250' y='120' width='50' height='130'/><path fill='%23ffa500' d='M0 200 Q200 180 400 200 V250 H0 Z'/></svg>"
    },
    {
        title: "African Wildlife Safari",
        price: 4100,
        rating: 9.0,
        days: 8,
        location: "Tanzania",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%23228b22' width='400' height='250'/><circle fill='%23ff6347' cx='100' cy='80' r='15'/><circle fill='%23ff6347' cx='300' cy='100' r='15'/><ellipse fill='%238b4513' cx='200' cy='180' rx='80' ry='40'/><path fill='%23006400' d='M0 200 Q100 170 200 200 T400 200 V250 H0 Z'/></svg>"
    }
];

// Testimonials Data
const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Honeymooner",
        initials: "SM",
        text: "The most incredible journey of my life! The attention to detail and personalized service made our honeymoon absolutely perfect. We can't wait to book our next adventure."
    },
    {
        name: "James Cooper",
        role: "Adventure Seeker",
        initials: "JC",
        text: "As a solo traveler, I felt completely safe and supported throughout my journey. The local guides were knowledgeable and friendly, making every moment memorable."
    },
    {
        name: "Maria Rodriguez",
        role: "Family Traveler",
        initials: "MR",
        text: "Traveling with kids can be challenging, but WanderLust made it effortless. Every detail was planned perfectly, and our children had the time of their lives!"
    }
];

// Load Destinations
function loadDestinations() {
    const container = document.getElementById('destinations-container');
    container.innerHTML = destinations.map(dest => `
        <div class="destination-card">
            <img src="${dest.image}" alt="${dest.name}" class="destination-img">
            <div class="destination-info">
                <span class="destination-badge">${dest.badge}</span>
                <h3 class="destination-title">${dest.name}</h3>
                <p class="destination-tours">${dest.tours} Amazing Tours</p>
            </div>
        </div>
    `).join('');
}

// Load Tours
function loadTours() {
    const container = document.getElementById('tours-container');
    container.innerHTML = tours.map(tour => `
        <div class="tour-card">
            <div class="tour-image">
                <img src="${tour.image}" alt="${tour.title}">
                <span class="tour-rating">⭐ ${tour.rating}</span>
            </div>
            <div class="tour-details">
                <h3 class="tour-title">${tour.title}</h3>
                <p class="tour-price">$${tour.price.toLocaleString()} / Person</p>
                <div class="tour-meta">
                    <span>${tour.days} Days</span>
                    <span>${tour.location}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Testimonials
function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.initials}</div>
                <div>
                    <strong>${testimonial.name}</strong>
                    <p style="font-size: 14px; opacity: 0.8;">${testimonial.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Search Tours Function
function searchTours() {
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('travel-date').value;
    const tourType = document.getElementById('tour-type').value;

    if (!destination && !date && tourType === 'Tour Type') {
        alert('Please fill in at least one search field');
        return;
    }

    console.log('Searching tours:', { destination, date, tourType });
    alert(`Searching for tours to ${destination || 'any destination'} on ${date || 'flexible dates'} with type: ${tourType}`);
}

// Newsletter Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;

    if (email) {
        alert(`Thank you for subscribing with ${email}! You'll receive our latest travel deals and tips.`);
        document.getElementById('newsletter-email').value = '';
    }
}

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '60px';
        nav.style.right = '20px';
        nav.style.background = 'white';
        nav.style.padding = '20px';
        nav.style.borderRadius = '10px';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    loadDestinations();
    loadTours();
    loadTestimonials();

    // Add animation on scroll
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

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});