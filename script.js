// Destinations Data
const destinations = [
    {
        id: 'mombasa',
        name: "Mombasa",
        tours: 4,
        badge: "Beach Paradise",
        image: "images/destination_mombasa.png",
        tile: "tile-tall",
        featured: true
    },
    {
        id: 'nakuru',
        name: "Nakuru",
        tours: 8,
        badge: "Adventure",
        image: "images/destination_nakuru.png",
        tile: "",
        featured: true
    },
    {
        id: 'amboseli',
        name: "Amboseli",
        tours: 7,
        badge: "Wildlife",
        image: "images/destination_amboseli.png",
        tile: "tile-tall",
        featured: true   
    },
    {
        id: 'maasai-mara',
        name: "Maasai Mara",
        tours: 5,
        badge: "Heritage",
        image: "images/destination_maasai_mara.png",
        tile: "tile-small",
        featured: true
    },
    {
        id: 'diani',
        name: "Diani",
        tours: 9,
        badge: "Nature",
        image: "images/destinantion_diani.png",
        tile: "",
        featured: true
    },
    {
        id: 'samburu',
        name: "Samburu",
        tours: 11,
        badge: "Wildlife",
        image: "images/destination_samburu.png",
        tile: "tile-wide"
    },
    {
        id: 'naivasha',
        name: "Naivasha",
        tours: 10,
        badge: "Cultural",
        image: "images/destinantion_naivasha.png",
        tile: "tile-small"
    },
    {
        id: 'masai-mt-kenya',
        name: "Mount Kenya",
        tours: 13,
        badge: "Adventure",
        image: "images/destination_mtkenya.png",
        tile: ""
    },
    {
        id: 'malindi',
        name: "Malindi",
        tours: 9,
        badge: "Cultural",
        image: "images/destinantion_malindi.png",
        tile: ""
    },
    {
        id: 'kisumu',
        name: "Kisumu",
        tours: 6,
        badge: "City Break",
        image: "images/destination_kisumu.png",
        tile: ""
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
        image: "images/tropical_island_paradise.jpg"
    },
    {
        title: "Mountain Trekking Experience",
        price: 1890,
        rating: 8.9,
        days: 7,
        location: "Nepal",
        image: "images/mountain_trek_tour.jpg"
    },
    {
        title: "European City Discovery",
        price: 3200,
        rating: 9.5,
        days: 10,
        location: "Europe",
        image: "images/city_explore_tour.jpg"
    },
    {
        title: "African Wildlife Safari",
        price: 4100,
        rating: 9.0,
        days: 8,
        location: "Tanzania",
        image: "images/safari_tour.jpg"
    }
];

// expose as globals for pages that reference window.tours
window.tours = tours;

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

// expose testimonials and destinations too (some pages reference window.testimonials / window.destinations)
window.testimonials = testimonials;
window.destinations = destinations;

// Load Destinations
function loadDestinations() {
    // prefer the new destinations list container if present (destinations.html)
    let container = document.getElementById('destinations-list');
    if (!container) container = document.getElementById('destinations-container');
    if (!container) return; // nothing to render into

    // ensure the grid class is present so CSS rules apply
    if (!container.classList.contains('destinations-grid')) {
        container.classList.add('destinations-grid');
    }

    // pattern used when a destination doesn't declare its own tile size
    const tilePattern = ["", "tile-large", "", "tile-wide", "", "tile-tall", "tile-wide", "", ""]; 

    // On the home page (destinations-container) show up to 5 featured cards; if none, fall back to first 5
    const isHomeList = container.id === 'destinations-container';
    let itemsToRender = destinations;
    if (isHomeList) {
        const featured = destinations.filter(d => d.featured);
        itemsToRender = featured.length ? featured.slice(0, 5) : destinations.slice(0, 5);
    }

    container.innerHTML = itemsToRender.map((dest, idx) => {
        // use tile from data or fall back to a repeatable pattern (use overall index when not on home)
        const globalIndex = destinations.indexOf(dest);
        const tileClass = dest.tile ? dest.tile : tilePattern[globalIndex % tilePattern.length] || '';
        const classes = `destination-card ${tileClass}`.trim();
        return `
        <div class="${classes}">
            <a href="destination.html?id=${dest.id}" class="destination-link">
                <img src="${dest.image}" alt="${dest.name}" class="destination-img">
                <div class="destination-info">
                    <span class="destination-badge">${dest.badge}</span>
                    <h3 class="destination-title">${dest.name}</h3>
                    <p class="destination-tours">${dest.tours} Amazing Tours</p>
                </div>
            </a>
        </div>
        `;
    }).join('');
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

    // Initialize hero slideshow (auto-fade)
    function initHeroSlideshow(interval = 4000) {
        const slides = document.querySelectorAll('.hero-slides .slide');
        if (!slides || slides.length < 2) return; // nothing to rotate

        let current = Array.from(slides).findIndex(s => s.classList.contains('active'));
        if (current === -1) current = 0;

        let timer = null;

        function show(index) {
            slides.forEach((s, i) => {
                s.classList.toggle('active', i === index);
            });
        }

        function next() {
            current = (current + 1) % slides.length;
            show(current);
        }

        // start automatic cycling
        timer = setInterval(next, interval);

        // pause on hover/focus for accessibility
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', () => {
                if (timer) { clearInterval(timer); timer = null; }
            });
            hero.addEventListener('mouseleave', () => {
                if (!timer) timer = setInterval(next, interval);
            });
        }

        // pause/resume when slides receive focus (keyboard users)
        slides.forEach(slide => {
            slide.setAttribute('tabindex', '-1');
            slide.addEventListener('focusin', () => {
                if (timer) { clearInterval(timer); timer = null; }
            });
            slide.addEventListener('focusout', () => {
                if (!timer) timer = setInterval(next, interval);
            });
        });
    }

    // start slideshow
    initHeroSlideshow(4000);

    // Destinations mega-menu toggle
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const megaMenu = document.getElementById('destinations-menu');
    if (dropdownToggle && megaMenu) {
        dropdownToggle.addEventListener('click', (e) => {
            const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
            dropdownToggle.setAttribute('aria-expanded', String(!expanded));
            const hidden = megaMenu.getAttribute('aria-hidden') === 'true';
            megaMenu.setAttribute('aria-hidden', String(!hidden));
        });

        // close on outside click
        document.addEventListener('click', (e) => {
            if (!megaMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
                dropdownToggle.setAttribute('aria-expanded', 'false');
                megaMenu.setAttribute('aria-hidden', 'true');
            }
        });

        // close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                dropdownToggle.setAttribute('aria-expanded', 'false');
                megaMenu.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Enhanced mega-menu behavior: keep menu visible while scrolling on desktop
    (function enhanceMegaMenu() {
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const megaMenu = document.getElementById('destinations-menu');
        const dropdownItem = document.querySelector('.has-dropdown');
        if (!dropdownToggle || !megaMenu || !dropdownItem) return;

        let isOpen = false;
        let isFixed = false;

        function updatePosition() {
            if (!isOpen || !isFixed) return;
            const rect = dropdownToggle.getBoundingClientRect();
            const menuWidth = Math.min(320, window.innerWidth - 16); // clamp width
            let left = rect.left;
            // ensure menu doesn't overflow right edge
            if (left + menuWidth > window.innerWidth - 8) {
                left = window.innerWidth - menuWidth - 8;
            }
            const top = rect.bottom + 6; // position below the toggle
            megaMenu.style.position = 'fixed';
            megaMenu.style.left = `${left}px`;
            megaMenu.style.top = `${top}px`;
            megaMenu.style.width = `${menuWidth}px`;
            // limit height and allow scrolling inside the menu
            const maxH = Math.max(120, window.innerHeight - top - 24);
            megaMenu.style.maxHeight = `${maxH}px`;
            megaMenu.style.overflowY = 'auto';
        }

        function openMegaMenu(focus = false) {
            isOpen = true;
            // on desktop, pin the menu as fixed so it stays visible while scrolling
            if (window.innerWidth >= 769) {
                isFixed = true;
            } else {
                isFixed = false;
                // ensure menu uses normal static positioning on mobile
                megaMenu.style.position = '';
                megaMenu.style.left = '';
                megaMenu.style.top = '';
                megaMenu.style.width = '';
                megaMenu.style.maxHeight = '';
                megaMenu.style.overflowY = '';
            }
            dropdownToggle.setAttribute('aria-expanded', 'true');
            megaMenu.setAttribute('aria-hidden', 'false');
            updatePosition();
            // attach listeners to update while scrolling/resizing
            window.addEventListener('scroll', updatePosition, { passive: true });
            window.addEventListener('resize', updatePosition);
            if (focus) megaMenu.focus();
        }

        function closeMegaMenu() {
            isOpen = false;
            isFixed = false;
            dropdownToggle.setAttribute('aria-expanded', 'false');
            megaMenu.setAttribute('aria-hidden', 'true');
            // reset any inline styles we applied
            megaMenu.style.position = '';
            megaMenu.style.left = '';
            megaMenu.style.top = '';
            megaMenu.style.width = '';
            megaMenu.style.maxHeight = '';
            megaMenu.style.overflowY = '';
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        }

        // Desktop: open on mouseenter, close on mouseleave
        dropdownItem.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 769) openMegaMenu();
        });
        dropdownItem.addEventListener('mouseleave', () => {
            if (window.innerWidth >= 769) closeMegaMenu();
        });

        // Keyboard accessibility: open on focus within, close on focusout if leaving
        dropdownItem.addEventListener('focusin', () => openMegaMenu(true));
        dropdownItem.addEventListener('focusout', (e) => {
            // close only if focus moved outside the dropdownItem
            if (!dropdownItem.contains(e.relatedTarget)) closeMegaMenu();
        });

        // Mobile / caret button: toggle menu using open/close functions
        const caretButton = document.querySelector('.dropdown-toggle');
        const mainDestLink = document.querySelector('.dropdown-link');
        if (caretButton) {
            caretButton.addEventListener('click', (e) => {
                e.stopPropagation();
                if (megaMenu.getAttribute('aria-hidden') === 'true') {
                    openMegaMenu(true);
                } else {
                    closeMegaMenu();
                }
            });
        }

        // Make sure clicking the main Destinations link navigates away (no preventDefault)
        if (mainDestLink) {
            mainDestLink.addEventListener('click', (e) => {
                // allow navigation; close menu to be safe
                closeMegaMenu();
            });
        }

        // Close on Escape or outside click (preserve earlier behavior)
        document.addEventListener('click', (e) => {
            if (!megaMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
                closeMegaMenu();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMegaMenu();
        });
    })();

});