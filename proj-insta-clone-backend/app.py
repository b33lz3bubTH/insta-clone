from flask import Flask,send_from_directory
from flask_restful import Api
from flask_jwt_extended import JWTManager

from applications.models.db import db

from applications.user_register import UserRegister
from applications.user_login import UserLogin
from applications.follow_action import UserFollow
from applications.user_post import NewPost
from applications.search_users import SearchUser
from applications.get_users_post import GetUsersPost
from applications.get_following_users_posts import GetPostForFollowingUsers
from applications.get_user_deatils import GetLoggedUserDeatils
from flask_cors import CORS
app = Flask(__name__)
# db.init_app(app)
api = Api(app)

CORS(app, origins="http://localhost:4200", allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
    supports_credentials=True)

app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'
jwt = JWTManager(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:wwe@localhost:3306/insta'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(UserFollow, '/follow/<int:follwer_id>')
api.add_resource(NewPost, '/new-post/<int:posted_by>')
api.add_resource(SearchUser, '/search/<int:uuid>')
api.add_resource(GetUsersPost, '/get-posts/<int:uuid>')
api.add_resource(GetPostForFollowingUsers, '/get-following-posts/<int:uuid>')
api.add_resource(GetLoggedUserDeatils, '/get-user-details/<int:uuid>')




#for Image file fetch
@app.route('/img/<path:path>')
def send_image(path):
    return send_from_directory('img', path)

@app.before_first_request
def create_table():
	db.create_all()

app.run(debug=True, port=8000)











# https://codeburst.io/jwt-authorization-in-flask-c63c1acf4eeb JWT HELP
