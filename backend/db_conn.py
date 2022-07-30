#!/usr/local/bin/python3
import json
import collections
import hashlib
from secrets import choice
from turtle import clear
import mysql.connector

def encrypt_string(hash_string):
    """encrypt a string to it's sha256sum"""
    sha_signature = hashlib.sha256(hash_string.encode()).hexdigest()
    return sha_signature

def add_listing():
    """Builds a query to insert information
    into the jobs database"""
    cnx = mysql.connector.connect(
        user='admin', password='stayGES', host='50.17.21.116', database='stayges')
    title = input ("Title: ")  # Simple plain text string
    sp_type = input("Listing type: ") # Drop down to a string
    price = input("Price: ") # Float
    location = input("Location: ") # plain text location name
    sqft = input("Square Footage: ") # int
    rating = input("Rating: ") # drop down menu 1-5
    description = input("Description: ") # string
    noise_max = input("Noise max (number 0-5): ") # possible hoverable graphic
    noise_rate = input("Noise rating(number 0-5): ") # possible hoverable graphic
    equipment = input("Equipment: ") # simple string
    rules = input("Rules: ") # multiple word bubble things passed in as a single string

    mycursor = cnx.cursor()
    sql = """INSERT INTO spaces (title, space_type, price, location, sqft, rating, description, noise_max, noise_rating, equipment, rules)
    VALUES ('{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}');""".format(title, sp_type, price, location, sqft, rating, description, noise_max, noise_rate, equipment, rules )
    mycursor.execute(sql)
    cnx.commit()
    mycursor.close()
    cnx.close()

def print_table():
    """Prints out the information from the jobs
    database"""
    cnx = mysql.connector.connect(
        user='admin', password='stayGES', host='50.17.21.116', database='stayges')
    mycursor = cnx.cursor()
    sql = "select * from spaces"
    mycursor.execute(sql)
    myresult = mycursor.fetchall()
    print(myresult)
    json_dump = json.dumps(myresult)
    mycursor.close()
    cnx.close()
    return json_dump

def del_listing():
    """deletes a job from the jobs database  based on id"""
    
    cnx = mysql.connector.connect(
        user='admin', password='stayGES', host='50.17.21.116', database='stayges')
    mycursor = cnx.cursor()
    print("Which ID would you like to delete?")
    del_id = input("ID:")
    sql = "DELETE from spaces where id = {}".format(del_id)
    mycursor.execute(sql)
    cnx.commit()
    mycursor.close()
    cnx.close()

def db_to_json():
    """Prints out the information from the jobs
    database as json"""
    cnx = mysql.connector.connect(
        user='admin', password='stayGES', host='50.17.21.116', database='stayges')
    mycursor = cnx.cursor()
    sql = "select * from spaces"
    mycursor.execute(sql)

    rows = mycursor.fetchall()
    #print(rows)
    num = 0
    rowarray_list = []
    for row in rows:
        if num < len(rows):
            rowarray_list.append(row)
            num += 1
        else:
            break
    
    # list of tuples
    # print(rowarray_list)
    property_dict = []
    descr_dict = []
    i = 0
    for row in rows:
        alpha = {} # collections.OrderedDict()
        beta = {} # collections.OrderedDict()
        # Assign values to keys
        alpha['title'] = row[1]
        beta['space_type'] = row[2]
        beta['price'] = row[3]
        beta['location'] = row[4]
        beta['sqft'] = row[5]
        beta['rating'] = row[6]
        beta['description'] = row[7]
        beta['noise_max'] = row[8]
        beta['noise_rating'] = row[9]
        beta['equipment'] = row[10]
        beta['rules'] = row[11]
        descr_dict.append(beta)
        alpha['space_details'] = descr_dict[i]
        property_dict.append(alpha)
        i += 1

    return property_dict

# add_listing()
# print_table()
# del_listing()
# db_to_json()
#       
