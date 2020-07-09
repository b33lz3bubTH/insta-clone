from flask import request
from flask_restful import Resource,reqparse

from .services.userservice import UserService

class GetUsersPost(Resource):
	def __init__(self):
		self.userServObj = UserService()

	
	def get(self,uuid):
		res_post_list, status_code = self.userServObj.getPostForUser(uuid)
		return {
			'data': res_post_list
		},status_code