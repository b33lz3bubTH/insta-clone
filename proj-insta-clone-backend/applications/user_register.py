from flask_restful import Resource,reqparse

from .services.userservice import UserService

class UserRegister(Resource):
	def __init__(self):
		self.reqparse = reqparse.RequestParser()
		self.reqparse.add_argument('username', type = str, required = True, help="need username")
		self.reqparse.add_argument('password', type = str, required = True, help="need password")
		self.reqparse.add_argument('email', type = str, required = True, help="need email")

		self.userServObj = UserService()

	def post(self):
		inputObj = self.reqparse.parse_args()
		# call the service for new user add
		msg, code = self.userServObj.addUser(inputObj)
		if code != 200:
			code = 500
		return {
			"msg": msg
		}, code
