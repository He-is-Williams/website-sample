"""
Flask Backend for WanderLust Adventures Website
This is an optional backend server for handling dynamic content and API requests
"""

from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

# Sample database (in production, use a real database)
destinations_db = [
    {
        "id": 1,
        "name": "Bali",
        "tours": 12,
        "badge": "Beach Paradise",
        "description": "Experience the tropical paradise of Bali with pristine beaches and rich culture"
    },
    {
        "id": 2,
        "name": "Iceland",
        "tours": 8,
        "badge": "Adventure",
        "description": "Discover the land of fire and ice with stunning natural wonders"
    },
    {
        "id": 3,
        "name": "Morocco",
        "tours": 10,
        "badge": "Cultural",
        "description": "Immerse yourself in the vibrant markets and ancient traditions"
    },
    {
        "id": 4,
        "name": "Japan",
        "tours": 15,
        "badge": "Heritage",
        "description": "Explore the perfect blend of ancient temples and modern technology"
    },
    {
        "id": 5,
        "name": "New Zealand",
        "tours": 9,
        "badge": "Nature",
        "description": "Adventure through breathtaking landscapes and pristine wilderness"
    }
]

tours_db = [
    {
        "id": 1,
        "title": "Tropical Island Paradise",
        "price": 2450,
        "rating": 9.2,
        "days": 5,
        "location": "Maldives",
        "description": "Relax on pristine beaches and explore underwater wonders",
        "available_dates": ["2024-12-15", "2025-01-10", "2025-02-05"]
    },
    {
        "id": 2,
        "title": "Mountain Trekking Experience",
        "price": 1890,
        "rating": 8.9,
        "days": 7,
        "location": "Nepal",
        "description": "Trek through the Himalayas with experienced guides",
        "available_dates": ["2024-12-20", "2025-03-15", "2025-04-10"]
    },
    {
        "id": 3,
        "title": "European City Discovery",
        "price": 3200,
        "rating": 9.5,
        "days": 10,
        "location": "Europe",
        "description": "Visit iconic cities and experience European culture",
        "available_dates": ["2025-01-05", "2025-05-12", "2025-06-20"]
    },
    {
        "id": 4,
        "title": "African Wildlife Safari",
        "price": 4100,
        "rating": 9.0,
        "days": 8,
        "location": "Tanzania",
        "description": "Witness the great migration and Africa's magnificent wildlife",
        "available_dates": ["2025-02-10", "2025-07-15", "2025-08-20"]
    }
]

newsletter_subscribers = []
bookings = []

# Routes
@app.route('/')
def home():
    """Serve the main page"""
    return render_template('index.html')

@app.route('/api/destinations', methods=['GET'])
def get_destinations():
    """Get all destinations"""
    return jsonify({
        "success": True,
        "data": destinations_db
    })

@app.route('/api/destinations/<int:destination_id>', methods=['GET'])
def get_destination(destination_id):
    """Get a specific destination by ID"""
    destination = next((d for d in destinations_db if d["id"] == destination_id), None)
    if destination:
        return jsonify({
            "success": True,
            "data": destination
        })
    return jsonify({
        "success": False,
        "message": "Destination not found"
    }), 404

@app.route('/api/tours', methods=['GET'])
def get_tours():
    """Get all tours with optional filtering"""
    location = request.args.get('location')
    max_price = request.args.get('max_price', type=int)
    min_rating = request.args.get('min_rating', type=float)
    
    filtered_tours = tours_db
    
    if location:
        filtered_tours = [t for t in filtered_tours if location.lower() in t['location'].lower()]
    if max_price:
        filtered_tours = [t for t in filtered_tours if t['price'] <= max_price]
    if min_rating:
        filtered_tours = [t for t in filtered_tours if t['rating'] >= min_rating]
    
    return jsonify({
        "success": True,
        "count": len(filtered_tours),
        "data": filtered_tours
    })

@app.route('/api/tours/<int:tour_id>', methods=['GET'])
def get_tour(tour_id):
    """Get a specific tour by ID"""
    tour = next((t for t in tours_db if t["id"] == tour_id), None)
    if tour:
        return jsonify({
            "success": True,
            "data": tour
        })
    return jsonify({
        "success": False,
        "message": "Tour not found"
    }), 404

@app.route('/api/search', methods=['POST'])
def search_tours():
    """Search tours based on criteria"""
    data = request.get_json()
    destination = data.get('destination', '').lower()
    date = data.get('date')
    tour_type = data.get('tour_type')
    
    results = tours_db
    
    if destination:
        results = [t for t in results if destination in t['location'].lower() or destination in t['title'].lower()]
    
    return jsonify({
        "success": True,
        "query": data,
        "count": len(results),
        "results": results
    })

@app.route('/api/newsletter/subscribe', methods=['POST'])
def subscribe_newsletter():
    """Subscribe to newsletter"""
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({
            "success": False,
            "message": "Email is required"
        }), 400
    
    # Check if already subscribed
    if email in newsletter_subscribers:
        return jsonify({
            "success": False,
            "message": "Email already subscribed"
        }), 400
    
    newsletter_subscribers.append(email)
    
    return jsonify({
        "success": True,
        "message": "Successfully subscribed to newsletter",
        "email": email
    })

@app.route('/api/bookings', methods=['POST'])
def create_booking():
    """Create a new tour booking"""
    data = request.get_json()
    
    required_fields = ['tour_id', 'customer_name', 'customer_email', 'num_people', 'travel_date']
    for field in required_fields:
        if field not in data:
            return jsonify({
                "success": False,
                "message": f"Missing required field: {field}"
            }), 400
    
    tour = next((t for t in tours_db if t["id"] == data['tour_id']), None)
    if not tour:
        return jsonify({
            "success": False,
            "message": "Tour not found"
        }), 404
    
    booking = {
        "id": len(bookings) + 1,
        "tour_id": data['tour_id'],
        "tour_title": tour['title'],
        "customer_name": data['customer_name'],
        "customer_email": data['customer_email'],
        "num_people": data['num_people'],
        "travel_date": data['travel_date'],
        "total_price": tour['price'] * data['num_people'],
        "booking_date": datetime.now().isoformat(),
        "status": "pending"
    }
    
    bookings.append(booking)
    
    return jsonify({
        "success": True,
        "message": "Booking created successfully",
        "booking": booking
    }), 201

@app.route('/api/bookings/<int:booking_id>', methods=['GET'])
def get_booking(booking_id):
    """Get booking details"""
    booking = next((b for b in bookings if b["id"] == booking_id), None)
    if booking:
        return jsonify({
            "success": True,
            "data": booking
        })
    return jsonify({
        "success": False,
        "message": "Booking not found"
    }), 404

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get website statistics"""
    return jsonify({
        "success": True,
        "stats": {
            "total_destinations": len(destinations_db),
            "total_tours": len(tours_db),
            "newsletter_subscribers": len(newsletter_subscribers),
            "total_bookings": len(bookings),
            "average_rating": sum(t['rating'] for t in tours_db) / len(tours_db) if tours_db else 0
        }
    })

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "message": "Endpoint not found"
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        "success": False,
        "message": "Internal server error"
    }), 500

if __name__ == '__main__':
    # Run the Flask development server
    # In production, use a proper WSGI server like Gunicorn
    app.run(debug=True, host='0.0.0.0', port=5000)
    print("WanderLust Adventures API Server running on http://localhost:5000")