from flask import request
from flask_restful import Resource,reqparse

from .services.userservice import UserService
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity)

class GetPostForFollowingUsers(Resource):
	def __init__(self):
		self.userServObj = UserService()

	@jwt_required
	def get(self,uuid):
		current_user = get_jwt_identity()
		if current_user["uuid"] is not uuid:
			return {'msg': "well tried, but this token is for {} id".format(current_user["uuid"])}
		resList = self.userServObj.getPostForOtherUsersWhomUUIDFollows(uuid)
		return {
			'data' : resList
		}