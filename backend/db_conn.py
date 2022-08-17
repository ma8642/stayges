#!/usr/local/bin/python3
"""DB connection script for CRUD functions of Stayges database"""
import json
import collections
import hashlib
import os
from secrets import choice
import mysql.connector
from dotenv import load_dotenv

load_dotenv()
db_user = os.environ.get('db_user')
db_pass = os.environ.get('db_pass')
db_ip = os.environ.get('db_ip')

"""Class for database connection"""
def encrypt_string(hash_string):
    """encrypt a string to it's sha256sum"""
    sha_signature = hashlib.sha256(hash_string.encode()).hexdigest()
    return sha_signature

def add_listing_frontend(
    title,
    sp_type,
    price,
    location,
    sqft,
    description,
    noise_max,
    noise_rate,
    equipment,
    rules,
    picture
  ):

    """Builds a query to insert information
    into the jobs database from the front end"""
    cnx = mysql.connector.connect(
    user=db_user, password=db_pass, host=db_ip, database='stayges'
    )

    mycursor = cnx.cursor()
    sql = f"""
    INSERT INTO test_data (title, space_type, price, location, sqft, description, noise_max, noise_rating, equipment, rules, pictures)
    VALUES ('{title}', '{sp_type}', '{price}', '{location}', '{sqft}', '{description}', '{noise_max}', '{noise_rate}', '{equipment}', '{rules}', '{picture}');
    """
    mycursor.execute(sql)
    cnx.commit()
    mycursor.close()
    cnx.close()

def add_listing():
    """Builds a query to insert information
    into the jobs database"""
    cnx = mysql.connector.connect(
    user=db_user, password=db_pass, host=db_ip, database='stayges')
    title = input("Title: ")  # Simple plain text string
    sp_type = input("Listing type: ")  # Drop down to a string
    price = input("Price: ")  # Float
    location = input("Location: ")  # plain text location name
    sqft = input("Square Footage: ")  # int
    description = input("Description: ")  # string
    # possible hoverable graphic
    noise_max = input("Noise max (number 0-5): ")
    # possible hoverable graphic
    noise_rate = input("Noise rating(number 0-5): ")
    equipment = input("Equipment: ")  # simple list
    # multiple word bubble things passed in as a single list
    rules = input("Rules: ")
    picture = input("Photo URL: ")

    mycursor = cnx.cursor()
    sql = f"""
    INSERT INTO test_data (title, space_type, price, location, sqft, description, noise_max, noise_rating, equipment, rules, pictures)
    VALUES ('{title}', '{sp_type}', '{price}', '{location}', '{sqft}', '{description}', '{noise_max}', '{noise_rate}', '{equipment}', '{rules}', '{picture}');
    """
    mycursor.execute(sql)
    cnx.commit()
    mycursor.close()
    cnx.close()

def print_table():
    """Prints out the information from the jobs
    database"""
    cnx = mysql.connector.connect(
    user=db_user, password=db_pass, host=db_ip, database='stayges')
    mycursor = cnx.cursor()
    sql = "select * from test_data"
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
    user=db_user, password=db_pass, host=db_ip, database='stayges')
    mycursor = cnx.cursor()
    print("Which ID would you like to delete?")
    del_id = input("ID:")
    sql = f"DELETE from test_data where id = {del_id}"
    mycursor.execute(sql)
    cnx.commit()
    mycursor.close()
    cnx.close()

def alter_table():
    """ Changes the value in the database table"""
    cnx = mysql.connector.connect(
    user=db_user, password=db_pass, host=db_ip, database='stayges')
    table_name = input("Table Name")
    #mycursor = cnx.cursor()
    sql = f"ALTER TABLE {table_name} RENAME COLUMN old_column_name TO new_column_name;"

def db_to_json():
    """Prints out the information from the jobs
    database as json"""
    cnx = mysql.connector.connect(
    user=db_user, password=db_pass, host=db_ip, database='stayges')
    mycursor = cnx.cursor()
    sql = "select * from test_data"
    mycursor.execute(sql)

    rows = mycursor.fetchall()
    # print(rows)
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
        alpha = {}  # collections.OrderedDict()
        beta = {}  # collections.OrderedDict()

        # Assign values to keys

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
        beta['pictures'] = row[12]
    descr_dict.append(beta)
    alpha[row[1]] = descr_dict[i]
    property_dict.append(alpha)
    i += 1

    return property_dict
