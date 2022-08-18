#! /usr/local/bin python3

"""backend api hosting for stayges database information
"""

#from pickle import GET
from flask import Flask, jsonify, render_template , request, url_for, flash, redirect
from geopy.geocoders import Nominatim
from flask_cors import CORS, cross_origin
import db_conn


my_table = db_conn.db_to_json()
app = Flask(__name__)
cors = CORS(app)

def process_location(loc):
    """Process plaintext location using geocoder for long and lat output
    """
    locator = Nominatim(user_agent="myGeocoder")
    location = locator.geocode(loc)
    print(location.latitude, " ", location.longitude)


def api():
    """Main method for api application hosting
    """
    @app.route("/")
    def home():
        return "This is a test"

    # A route to return all of the available entries in our catalog.
    @app.route('/api/v1/resources/table/all', methods=['GET'])
    def api_table():
        return jsonify(my_table)

    @app.route('/backend/new_listing/', methods=['GET', 'POST'])
    def new_login():
        if request.method == 'POST':
            title = request.form['title']
            space_type = request.form['space_type']
            price = request.form['price']
            location = request.form['location']
            sqft = request.form['sqft']
            description = request.form['description']
            noise_max = request.form['noise_max']
            noise_rating = request.form['equipment']
            rules = request.form['rules']
            pictures = request.form['pictures']
            if not title:
                flash('Title is required!')
            elif not space_type:
                flash('Type is required!')
        return render_template('new_listing.html')

    """title, space_type, price, location, sqft,
        description, noise_max, noise_rating, equipment, rules, pictures
"""
api()

#process_location("San Francisco, California")
app.run()
