from flask_restful import Resource,reqparse

from .services.userservice import UserService

from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity)


class UserFollow(Resource):
	def __init__(self):
		self.reqparse = reqparse.RequestParser()
		self.reqparse.add_argument('following_id', type = int, required = True, help="you need someone to follow")

		self.userServObj = UserService()
	@jwt_required
	def post(self,follwer_id):
		inputObj = self.reqparse.parse_args()
		# check token is for follwer_id or not.
		current_user = get_jwt_identity()
		if current_user["uuid"] is not follwer_id:
			return {'msg': "well tried, but this token is for {} id".format(current_user["uuid"])}
		# call the service for new user add
		msg = self.userServObj.addFollowing(follwer_id,inputObj.following_id)
		return {
			"msg": msg
		}
	@jwt_required
	def get(self,follwer_id):
		# get which users follower_id is following.
		current_user = get_jwt_identity()
		if current_user["uuid"] is not follwer_id:
			return {'msg': "well tried, but this token is for {} id".format(current_user["uuid"])}
		x = self.userServObj.getFollowingListFor(follwer_id)
		return {
			"Your UUID":current_user["uuid"],
			"data": x
			}
	@jwt_required
	def delete(self,follwer_id):
		inputObj = self.reqparse.parse_args()
		current_user = get_jwt_identity()
		if current_user["uuid"] is not follwer_id:
			return {'msg': "well tried, but this token is for {} id".format(current_user["uuid"])}

		msg = self.userServObj.deleteFollowing(follwer_id,inputObj.following_id)
		return {
			"msg":msg
		}