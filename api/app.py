from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from flask_mongoengine import MongoEngine
import os

# load environmentals
load_dotenv()
mongodb_uri = os.getenv('MONGODB_URI')

# TODO: Set to false in production
DEBUG = True

# Create flask instance for routing
app = Flask(__name__)
app.config.from_object(__name__)

# Set up cors
CORS(app, resources={r'/*': {'origins': '*'}})

# Connecting to Mongo

app.config['MONGODB_SETTINGS'] = {
	'host': mongodb_uri
}
db = MongoEngine()
db.init_app(app)

# start server
if __name__ == '__main__':
	app.run()
