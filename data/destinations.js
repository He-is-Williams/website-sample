// Shared destinations dataset for the site
window.DESTINATIONS = {
    "maasai-mara": {
        "id": "maasai-mara",
        "title": "Maasai Mara National Reserve",
        "location": "Kenya",
        "image": "images/destination_maasai_mara.png",
        "type": "Wildlife Safari",
        "rating": "★★★★★",
        "price": "From $450",
        "description": "The Maasai Mara is Kenya’s most famous game reserve, world renowned for the Great Migration and abundant wildlife.",
        "highlights": ["Big Five safaris", "Great Migration (seasonal)", "Cultural visits to Maasai villages"],
        "facts": ["Best time: Jun - Oct", "Flight time from Nairobi: 1 hr", "Currency: KES"],
        "gallery": ["images/destination_maasai_mara.png","images/safari_tour.jpg","images/hero_1.jpg"],
        "tours": [
            {"title":"3-Day Maasai Mara Safari","link":"#","price":"$450","image":"images/safari_tour.jpg","excerpt":"A short, action-packed safari focusing on game drives and photography.","days":3},
            {"title":"5-Day Wildlife & Culture","link":"#","price":"$980","image":"images/safari_tour.jpg","excerpt":"Combine wildlife viewing with a cultural visit to Maasai communities.","days":5},
            {"title":"7-Day Great Migration Special","link":"#","price":"$1,500","image":"images/safari_tour.jpg","excerpt":"Witness the Great Migration with expert guides and prime viewing spots.","days":7},
            {"title":"Maasai Village Cultural Experience (Day Trip)","link":"#","price":"$120","image":"images/hero_1.jpg","excerpt":"Engage with Maasai traditions, crafts and cuisine during a guided visit.","days":1},
            {"title":"Photography Safari Weekend","link":"#","price":"$650","image":"images/safari_tour.jpg","excerpt":"Tailored for photographers: best light, expert advice and vehicle access.","days":2}
        ],
        "related": ["amboseli","nakuru","samburu"]
    },
    "amboseli": {
        "id": "amboseli",
        "title": "Amboseli National Park",
        "location": "Kenya",
        "image": "images/destination_amboseli.png",
        "type": "Wildlife Safari",
        "rating": "★★★★☆",
        "price": "From $320",
        "description": "Famous for its elephant herds and views of Mount Kilimanjaro.",
        "highlights": ["Elephant sightings","Kilimanjaro views","Bird watching"],
        "facts": ["Best time: Jun - Sep","Near: Nairobi 4-5 hrs drive"],
        "gallery": ["images/destination_amboseli.png","images/hero_3.jpg"],
        "tours": [
            {"title":"Amboseli Day Trip","link":"#","price":"$120","image":"images/hero_3.jpg","excerpt":"A quick visit focused on elephant sightings and scenic viewpoints.","days":1},
            {"title":"2-Day Amboseli Safari","link":"#","price":"$240","image":"images/safari_tour.jpg","excerpt":"Two days of game drives and camp-style accommodation.","days":2},
            {"title":"4-Day Amboseli & Tsavo Combo","link":"#","price":"$540","image":"images/safari_tour.jpg","excerpt":"Combine Amboseli with the diverse landscapes of Tsavo.","days":4},
            {"title":"Amboseli Birding Weekend","link":"#","price":"$200","image":"images/hero_3.jpg","excerpt":"Guided birding tours for keen ornithologists.","days":2},
            {"title":"Kilimanjaro View Safari","link":"#","price":"$300","image":"images/destination_amboseli.png","excerpt":"Enjoy spectacular Mount Kilimanjaro panoramas during game drives.","days":1}
        ],
        "related": ["maasai-mara","masai-mt-kenya","nakuru"]
    },
    "mombasa": {
        "id": "mombasa",
        "title": "Mombasa & Coastal Beaches",
        "location": "Kenya",
        "image": "images/destination_mombasa.png",
        "type": "Beach & Island",
        "rating": "★★★★☆",
        "price": "From $210",
        "description": "Historic port city with sandy beaches, Swahili culture and island excursions.",
        "highlights": ["Beaches","Old Town","Dhow trips"],
        "facts": ["Best time: Dec - Mar","Airport: Moi International"],
        "gallery": ["images/destination_mombasa.png","images/tropical_island_paradise.jpg"],
        "tours": [
            {"title":"Beach & Dhow Cruise","link":"#","price":"$210","image":"images/tropical_island_paradise.jpg","excerpt":"Relaxing dhow cruise with snorkelling and beach stops.","days":1},
            {"title":"3-Day Mombasa Beach Escape","link":"#","price":"$310","image":"images/tropical_island_paradise.jpg","excerpt":"Three days of sun, sea and cultural evenings.","days":3},
            {"title":"Old Town Cultural Walk","link":"#","price":"$80","image":"images/hero_2.jpg","excerpt":"Explore Mombasa’s Swahili architecture and markets.","days":1},
            {"title":"Wasini Island Snorkel Trip","link":"#","price":"$140","image":"images/tropical_island_paradise.jpg","excerpt":"A day trip to Wasini with excellent snorkelling and seafood lunch.","days":1},
            {"title":"Family Beach Package","link":"#","price":"$420","image":"images/tropical_island_paradise.jpg","excerpt":"Family-friendly beachfront accommodation and activities.","days":4}
        ],
        "related": ["diani","malindi","nakuru"]
    },
    "masai-mt-kenya": {
        "id": "masai-mt-kenya",
        "title": "Mount Kenya Region",
        "location": "Kenya",
        "image": "images/destination_mtkenya.png",
        "type": "Mountain Trek",
        "rating": "★★★★☆",
        "price": "From $300",
        "description": "Diverse highland landscapes offering trekking, wildlife and cultural encounters.",
        "highlights": ["Trekking","Scenic viewpoints","Wildlife"],
        "facts": ["Best time: Jan-Mar, Jul-Oct","Altitude: up to 5199m"],
        "gallery": ["images/destination_mtkenya.png","images/mountain_trek_tour.jpg"],
        "tours": [
            {"title":"Mount Kenya Trek - 4 Days","link":"#","price":"$520","image":"images/mountain_trek_tour.jpg","excerpt":"A four-day trek with experienced guides and scenic camps.","days":4},
            {"title":"2-Day Mount Kenya Hike","link":"#","price":"$260","image":"images/mountain_trek_tour.jpg","excerpt":"Shorter hike for those with limited time.","days":2},
            {"title":"Cultural Highlands Experience","link":"#","price":"$180","image":"images/hero_2.jpg","excerpt":"Meet local communities and explore highland farms.","days":1},
            {"title":"Wildlife & Waterfalls Day Trip","link":"#","price":"$150","image":"images/hero_2.jpg","excerpt":"See rare wildlife and visit hidden waterfalls.","days":1},
            {"title":"Summit Training Package (advanced)","link":"#","price":"$980","image":"images/mountain_trek_tour.jpg","excerpt":"A training package for technical summit attempts.","days":7}
        ],
        "related": ["maasai-mara","amboseli"]
    }
};
