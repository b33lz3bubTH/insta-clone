from flask import request
from flask_restful import Resource,reqparse

from .services.userservice import UserService

class GetLoggedUserDeatils(Resource):
	def __init__(self):
		self.userServObj = UserService()

	def get(self,uuid):
		res, code = self.userServObj.getLoggedUserDetails(uuid)
		return {
			'data' : res
		}, code