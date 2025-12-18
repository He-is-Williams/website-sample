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

function parsePriceValue(value) {
    if (value === null || value === undefined) return 0;
    if (typeof value === 'number') return value;
    const cleaned = String(value).replace(/[^0-9.]+/g, '');
    const parsed = parseFloat(cleaned);
    return Number.isFinite(parsed) ? parsed : 0;
}

function parseRatingValue(rating) {
    if (typeof rating === 'number') return rating;
    if (!rating) return 4.5;
    const stars = (rating.match(/★/g) || []).length;
    if (stars) return stars;
    const numeric = Number(rating);
    return Number.isFinite(numeric) ? numeric : 4.5;
}

function formatCurrency(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) return 'Contact us';
    return `$${value.toLocaleString()}`;
}

function summarizeText(value, maxLength = 120) {
    if (!value) return '';
    const trimmed = String(value).trim();
    if (trimmed.length <= maxLength) return trimmed;
    return `${trimmed.slice(0, maxLength).trim()}…`;
}

function createSearchCatalog() {
    const shared = window.DESTINATIONS || {};
    const entries = [];

    Object.values(shared).forEach((dest, destIdx) => {
        const baseRating = parseRatingValue(dest.rating);
        const toursList = Array.isArray(dest.tours) ? dest.tours : [];
        toursList.forEach((tour, tourIdx) => {
            const catalogIndex = entries.length;
            const priceNumeric = parsePriceValue(tour.price) || parsePriceValue(dest.price);
            const ratingValue = parseRatingValue(tour.rating) || baseRating;
            entries.push({
                catalogIndex,
                title: tour.title || `${dest.title} experience`,
                description: tour.excerpt || dest.description || 'Curated travel experience.',
                price: tour.price || dest.price || '',
                priceLabel: priceNumeric ? formatCurrency(priceNumeric) : (tour.price || dest.price || 'Contact us'),
                priceValue: priceNumeric || 0,
                days: tour.days || 0,
                rating: ratingValue,
                location: dest.location,
                destinationTitle: dest.title,
                type: tour.type || dest.type || 'Adventure',
                image: tour.image || dest.image || 'images/tropical_island_paradise.jpg',
                destinationId: dest.id,
                tourIndex: tourIdx,
                publishedAt: new Date(2024, (destIdx + tourIdx) % 12, 1 + ((destIdx + tourIdx) % 28)),
                popularity: Math.round((ratingValue || 4) * 20) + (tourIdx * 5)
            });
        });
    });

    if (entries.length) {
        return entries;
    }

    return tours.map((tour, index) => {
        const priceValue = parsePriceValue(tour.price);
        const ratingValue = parseRatingValue(tour.rating);
        return {
            catalogIndex: index,
            title: tour.title,
            description: tour.description || `Experience ${tour.location}`,
            price: tour.price ? `$${tour.price.toLocaleString()}` : '',
            priceLabel: tour.price ? `$${tour.price.toLocaleString()}` : 'Contact us',
            priceValue,
            days: tour.days || 0,
            rating: ratingValue,
            location: tour.location,
            destinationTitle: tour.location,
            type: 'Featured',
            image: tour.image,
            destinationId: null,
            tourIndex: index,
            publishedAt: new Date(2024, index % 12, 1 + (index % 28)),
            popularity: (ratingValue || 0) * 10
        };
    });
}

const SEARCH_CATALOG = createSearchCatalog();
window.SEARCH_CATALOG = SEARCH_CATALOG;

const searchState = {
    catalog: SEARCH_CATALOG,
    baseResults: [],
    filteredResults: [],
    currentPage: 1,
    pageSize: 6,
    lastDestination: '',
    lastTourType: '',
    lastDate: ''
};

function getHeroSearchInputs() {
    return {
        destinationInput: document.getElementById('destination'),
        dateInput: document.getElementById('travel-date'),
        tourTypeInput: document.getElementById('tour-type')
    };
}

function hasHeroSearchTerms(values = {}) {
    const destination = (values.destination || '').trim();
    const date = values.date || '';
    const tourType = values.tourType || '';
    return Boolean(destination || date || tourType);
}

function handleHeroSearch(event, options = {}) {
    const { preventNavigation = false } = options;
    const { destinationInput, dateInput, tourTypeInput } = getHeroSearchInputs();
    const destination = destinationInput ? destinationInput.value.trim() : '';
    const date = dateInput ? dateInput.value : '';
    const tourType = tourTypeInput ? tourTypeInput.value : '';

    if (!hasHeroSearchTerms({ destination, date, tourType })) {
        if (event) event.preventDefault();
        alert('Please fill in at least one search field');
        return false;
    }

    if (preventNavigation && event) {
        event.preventDefault();
    }

    return true;
}

function prefillHeroFormFromParams(params) {
    if (!params) return false;
    const { destinationInput, dateInput, tourTypeInput } = getHeroSearchInputs();
    let filled = false;
    const destination = params.get('destination');
    const date = params.get('travel-date');
    const tourType = params.get('tour-type');

    if (destination && destinationInput) {
        destinationInput.value = destination;
        filled = true;
    }
    if (date && dateInput) {
        dateInput.value = date;
        filled = true;
    }
    if (tourType && tourTypeInput) {
        tourTypeInput.value = tourType;
        filled = true;
    }

    return filled;
}

function isSearchResultsPage() {
    const fileName = window.location.pathname.split('/').pop().toLowerCase();
    return fileName === 'search-results.html';
}

function initSearchPage() {
    if (!isSearchResultsPage()) return;
    const heroForm = document.getElementById('hero-search-form');
    if (heroForm) {
        heroForm.addEventListener('submit', (event) => {
            if (handleHeroSearch(event, { preventNavigation: true })) {
                searchTours();
            }
        });
    }

    const params = new URLSearchParams(window.location.search);
    const hasParams = prefillHeroFormFromParams(params);
    if (hasParams) {
        searchTours({ skipValidation: true });
    }
}

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
    if (!container) return;
        container.innerHTML = tours.map((tour, idx) => {
            const priceLabel = tour.destinationPriceLabel ||
                (typeof tour.price === 'number' ? `$${tour.price.toLocaleString()}` : tour.price || 'Contact us');
            const priceDisplay = priceLabel.includes('/ Person') ? priceLabel : `${priceLabel} / Person`;
            const rating = typeof tour.rating === 'number' ? tour.rating.toFixed(1) : tour.rating;
            const excerpt = summarizeText(tour.excerpt || tour.description || '', 110);

            return `
                <div class="tour-card">
                    <img class="card-img" src="${tour.image}" alt="${tour.title}">
                    <div class="card-body">
                        <div>
                            <h3 class="card-title">${tour.title}</h3>
                            ${excerpt ? `<p class="card-description">${excerpt}</p>` : '<p class="card-description">Discover a curated experience with Wanderlust Adventures.</p>'}
                        </div>
                        <div class="card-footer">
                            <span class="card-price">${priceDisplay}</span>
                            <a class="btn-primary card-btn" href="tour.html?dest=${tour.destinationId || ''}&tour=${tour.tourIndex || 0}">View details</a>
                        </div>
                        <button class="card-add add-cart" data-idx="${idx}">Add to cart</button>
                    </div>
                </div>
            `;
        }).join('');
}

// Load Testimonials
function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
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
function searchTours(options = {}) {
    const { skipValidation = false } = options;
    const destinationInput = document.getElementById('destination');
    const dateInput = document.getElementById('travel-date');
    const tourTypeInput = document.getElementById('tour-type');
    const destination = destinationInput ? destinationInput.value.trim() : '';
    const date = dateInput ? dateInput.value : '';
    const tourType = tourTypeInput ? tourTypeInput.value : '';

    if (!skipValidation && !hasHeroSearchTerms({ destination, date, tourType })) {
        alert('Please fill in at least one search field');
        return;
    }

    searchState.lastDestination = destination;
    searchState.lastTourType = tourType || '';
    searchState.lastDate = date;

    const destinationTerm = destination.toLowerCase();
    const tourTypeTerm = searchState.lastTourType ? searchState.lastTourType.toLowerCase() : '';
    const catalog = searchState.catalog || [];

    searchState.baseResults = catalog.filter(tour => {
        const matchesDestination = !destinationTerm ||
            (tour.destinationTitle && tour.destinationTitle.toLowerCase().includes(destinationTerm)) ||
            (tour.location && tour.location.toLowerCase().includes(destinationTerm));
        const matchesType = !tourTypeTerm ||
            (tour.type && tour.type.toLowerCase().includes(tourTypeTerm));
        return matchesDestination && matchesType;
    });

    showSearchSection(true);
    toggleEmptyState(false);
    setLoadingState(true);

    setTimeout(() => {
        if (!searchState.baseResults.length) {
            searchState.filteredResults = [];
            renderSearchResults();
            setLoadingState(false);
            return;
        }
        applyActiveFilters(true);
        setLoadingState(false);
    }, 450);
}

function initSearchControls() {
    const priceInput = document.getElementById('filter-price');
    const durationInput = document.getElementById('filter-duration');
    const ratingSelect = document.getElementById('filter-rating');
    const sortSelect = document.getElementById('search-sort');
    const priceValueLabel = document.getElementById('filter-price-value');
    const durationValueLabel = document.getElementById('filter-duration-value');
    const loadMoreButton = document.getElementById('search-load-more');

    if (!priceInput || !durationInput || !ratingSelect || !sortSelect) return;

    const maxPrice = Math.max(...searchState.catalog.map(t => t.priceValue || 0), 500);
    priceInput.max = Math.max(500, Math.ceil(maxPrice / 50) * 50);
    priceInput.value = priceInput.max;

    const maxDuration = Math.max(...searchState.catalog.map(t => t.days || 0), 7);
    durationInput.max = Math.max(7, maxDuration);
    durationInput.value = durationInput.max;

    updateRangeLabel(priceInput, priceValueLabel, val => formatCurrency(val));
    updateRangeLabel(durationInput, durationValueLabel, val => `${val} day${val === 1 ? '' : 's'}`);

    priceInput.addEventListener('input', () => {
        updateRangeLabel(priceInput, priceValueLabel, val => formatCurrency(val));
        if (searchState.baseResults.length) applyActiveFilters(false);
    });

    durationInput.addEventListener('input', () => {
        updateRangeLabel(durationInput, durationValueLabel, val => `${val} day${val === 1 ? '' : 's'}`);
        if (searchState.baseResults.length) applyActiveFilters(false);
    });

    ratingSelect.addEventListener('change', () => {
        if (searchState.baseResults.length) applyActiveFilters(false);
    });

    sortSelect.addEventListener('change', () => {
        if (searchState.baseResults.length) applyActiveFilters(false);
    });

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', handleLoadMore);
    }
}

function updateRangeLabel(input, label, formatter) {
    if (!input || !label) return;
    const value = Number(input.value);
    label.textContent = formatter ? formatter(value) : String(value);
}

function applyActiveFilters(resetPage = true) {
    const priceInput = document.getElementById('filter-price');
    const durationInput = document.getElementById('filter-duration');
    const ratingSelect = document.getElementById('filter-rating');
    const sortSelect = document.getElementById('search-sort');

    if (!priceInput || !durationInput || !ratingSelect || !sortSelect) return;

    const priceMax = Number(priceInput.value);
    const durationMax = Number(durationInput.value);
    const ratingMin = parseFloat(ratingSelect.value) || 0;
    const sortOption = sortSelect.value;

    let list = searchState.baseResults.filter(tour => {
        return (tour.priceValue || 0) <= priceMax &&
            (tour.days || 0) <= durationMax &&
            (tour.rating || 0) >= ratingMin;
    });

    list = sortSearchCatalog(list, sortOption);
    searchState.filteredResults = list;
    if (resetPage) {
        searchState.currentPage = 1;
    }
    renderSearchResults();
}

function sortSearchCatalog(list, mode) {
    const sorted = list.slice();
    switch (mode) {
        case 'price-asc':
            sorted.sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
            break;
        case 'price-desc':
            sorted.sort((a, b) => (b.priceValue || 0) - (a.priceValue || 0));
            break;
        case 'rating-desc':
            sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
        case 'date-desc': {
            sorted.sort((a, b) => {
                const aTime = a.publishedAt instanceof Date ? a.publishedAt.getTime() : 0;
                const bTime = b.publishedAt instanceof Date ? b.publishedAt.getTime() : 0;
                return bTime - aTime;
            });
            break;
        }
        case 'popularity-desc':
            sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
            break;
        default:
            sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
    }
    return sorted;
}

function renderSearchResults() {
    const grid = document.getElementById('search-results-grid');
    const summary = document.getElementById('search-summary');
    const emptyState = document.getElementById('search-empty-state');
    const loadMoreButton = document.getElementById('search-load-more');

    if (!grid || !summary) return;

    const total = searchState.filteredResults.length;
    const visibleLimit = searchState.currentPage * searchState.pageSize;
    const visibleItems = searchState.filteredResults.slice(0, visibleLimit);

    if (!total) {
        grid.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        if (loadMoreButton) loadMoreButton.classList.add('hidden');
        summary.textContent = 'No tours match your preferences yet.';
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    grid.innerHTML = visibleItems.map(tour => {
        const detailLink = `tour.html?index=${tour.catalogIndex}`;
        const excerpt = summarizeText(tour.description || tour.excerpt || '', 100);
        const priceDisplay = tour.priceLabel || formatCurrency(tour.priceValue);
        return `
            <article class="search-tour-card">
                <img class="card-img" src="${tour.image}" alt="${tour.title}">
                <div class="card-body">
                    <h3 class="card-title">${tour.title}</h3>
                    ${excerpt ? `<p class="card-description">${excerpt}</p>` : ''}
                    <div class="card-footer">
                        <span class="card-price">${priceDisplay}</span>
                        <a class="btn-primary card-btn" href="${detailLink}" aria-label="View details for ${tour.title}">View details</a>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    const summaryLocation = getSummaryLocation();
    const shownCount = Math.min(visibleItems.length, total);
    summary.textContent = `Showing ${shownCount} of ${total} tours${summaryLocation}.`;

    if (loadMoreButton) {
        if (shownCount < total) {
            loadMoreButton.classList.remove('hidden');
        } else {
            loadMoreButton.classList.add('hidden');
        }
    }
}

function handleLoadMore() {
    const totalPages = Math.ceil(searchState.filteredResults.length / searchState.pageSize);
    if (searchState.currentPage < totalPages) {
        searchState.currentPage += 1;
        renderSearchResults();
    }
}

function getSummaryLocation() {
    if (searchState.lastDestination) {
        return ` near ${searchState.lastDestination}`;
    }
    if (searchState.lastTourType) {
        return ` for ${searchState.lastTourType}`;
    }
    return '';
}

function showSearchSection(visible) {
    const section = document.getElementById('search-results-section');
    if (!section) return;
    section.classList.toggle('hidden', !visible);
}

function setLoadingState(isLoading) {
    const loader = document.getElementById('search-loading-state');
    if (!loader) return;
    loader.classList.toggle('hidden', !isLoading);
}

function toggleEmptyState(visible) {
    const emptyState = document.getElementById('search-empty-state');
    if (!emptyState) return;
    emptyState.classList.toggle('hidden', !visible);
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

    initSearchControls();
    initSearchPage();

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