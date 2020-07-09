from flask_restful import Resource,reqparse

from .services.userservice import UserService
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity)


class UserLogin(Resource):
	def __init__(self):
		self.reqparse = reqparse.RequestParser()
		self.reqparse.add_argument('username', type = str, required = True, help="need username")
		self.reqparse.add_argument('password', type = str, required = True, help="need password")

		self.userServObj = UserService()

	def post(self):
		inputObj = self.reqparse.parse_args()
		# call the service for new user add
		state, msg, uuid = self.userServObj.userLogin(inputObj.username,inputObj.password)
		jwt = {}
		if state:
			access_token = create_access_token(identity = {'username':inputObj.username,'uuid':uuid})
			jwt = {'access_token': access_token}

		code = 200 if state else 500
		return {
			"msg": msg,
			"uuid": uuid,
			"username":inputObj.username,
			"state": state,
			"jwt":jwt
		},code