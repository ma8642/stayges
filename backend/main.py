#! /usr/local/bin python3

from pickle import GET
import flask
from flask import Flask
from flask import Flask, request, jsonify, render_template , request, url_for, flash, redirect
from geopy.geocoders import Nominatim
import db_conn

data = db_conn()
app = flask.Flask(__name__)

def process_location(loc):
    locator = Nominatim(user_agent="myGeocoder")
    location = locator.geocode(loc)
    print(location.latitude, " ", location.longitude)


def api():
    @app.route("/")
    def home():
        return "This is a test"

    # A route to return all of the available entries in our catalog.
    @app.route('/api/v1/resources/jobs/all', methods=['GET'])
    def api_jobs():
        return jsonify(my_table)

    home()

#api()

process_location("Largo FL")
#app.run()