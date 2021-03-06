from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from flask_mongoengine import MongoEngine
import os

# import blueprints
from ._blueprints.user_routes import user_routes

# Loading environmentals
load_dotenv()
mongodb_uri = os.getenv('MONGODB_URI')

# TODO: Set to false in production
DEBUG = True

# Creating flask instance for routing
app = Flask(__name__)
app.config.from_object(__name__)

# setting up cors
CORS(app, resources={r'/*': {'origins': '*'}})

# Connecting to MongoDB Atlas
app.config['MONGODB_SETTINGS'] = {
    'host': mongodb_uri
}
db = MongoEngine()
db.init_app(app)

# register routes
app.register_blueprint(user_routes, url_prefix='/api/users')

if __name__ == '__main__':
	app.run()
