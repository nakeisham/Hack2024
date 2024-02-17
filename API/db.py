#mf600_minas
#H50*Jz-lRwlg


import sqlite3
import os
import datetime


import pymysql

# database connection
connection = pymysql.connect(host="localhost",  user="mf600_minas", passwd="H50*Jz-lRwlg")

if connection:
    print("Database connected")
else:
    print("Database not connected")

