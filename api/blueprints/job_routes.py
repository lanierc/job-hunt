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


# create a job
@job_routes.route('', methods=['POST'])
def create_job():
	post_data = request.get_json()
	new_job = Job(
		title=post_data.get('title'),
		company=post_data.get('company'),
		date_posted=post_data.get('date_posted'),
		date_applied=post_data.get('date_applied'),
		posting_url=post_data.get('posting_url'),
		direct_posting=post_data.get('direct_posting'),
		contact_name=post_data.get('contact_name'),
		contact_email=post_data.get('contact_email'),
		user=post_data.get('user')
	)
	new_job.save()
	return jsonify({
		'status': 'success',
		'data': new_job
	})
