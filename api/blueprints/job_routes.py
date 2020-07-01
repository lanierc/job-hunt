from flask import Blueprint, jsonify, request
import mongoengine as me
import bcrypt
import json
import jwt
from dotenv import load_dotenv
import os
from blueprints.user_routes import User

# loading app secret
load_dotenv()
secret = os.getenv('SECRET')

# defining blueprint
job_routes = Blueprint('job_routes', __name__)

# create user model
class Job(me.Document):
	title = me.StringField(required=True)
	company = me.StringField(required=True)
	date_posted = me.DateTimeField(required=False)
	date_applied = me.DateTimeField(required=True)
	posting_url = me.StringField(required=False)
	direct_posting = me.BooleanField(required=True, default=False)
	contact_name = me.StringField(required=False)
	contact_email = me.StringField(required=True)
	active = me.BooleanField(required=True, default=True)
	feedback = me.StringField(required=False)
	ghosted = me.BooleanField(required=False)
	user = me.ReferenceField(User, required=True)


