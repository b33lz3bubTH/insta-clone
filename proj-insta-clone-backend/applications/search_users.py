from flask import request
from flask_restful import Resource,reqparse

from .services.userservice import UserService

class SearchUser(Resource):
	def __init__(self):
		self.userServObj = UserService()

	def get(self, uuid):
		search_for_usr = request.args.get('username', default='_0x00souraav_', type = str)
		res_list = self.userServObj.searchForUsers(search_for_usr, uuid)
		return {
			'searched_for': res_list
		}