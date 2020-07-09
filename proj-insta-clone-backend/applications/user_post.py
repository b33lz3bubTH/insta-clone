import os
from flask import request
from flask_restful import Resource,reqparse
import werkzeug
import random
import string

from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity)
from .services.userservice import UserService

class NewPost(Resource):
	def __init__(self):
		self.reqparse = reqparse.RequestParser()
		self.reqparse.add_argument('postTitle', type = str, required = True, help="need post tile")
		self.reqparse.add_argument('postDesc', type = str, required = True, help="need post desc")
		self.reqparse.add_argument('file', type=werkzeug.datastructures.FileStorage, required = True, location='files', help='Image file cannot empty')
		self.userServObj = UserService()
	@jwt_required
	def post(self,posted_by):
		args = self.reqparse.parse_args()

		current_user = get_jwt_identity()
		if current_user["uuid"] is not posted_by:
			return {'msg': "well tried, but this token is for {} id".format(current_user["uuid"])}, 500
		
		img = args['file'] or None
		if img is None:
			return {"msg": "WHERE IS THE IMG?? "}, 500

		unique_name1 = str(current_user["uuid"])+'_'+img.name;
		unique_name2 = ''.join(random.choices(string.ascii_uppercase +string.digits, k = 15))
		unique_name = unique_name1 + unique_name2
		unique_name = str(unique_name)+'.jpeg'
		img.save('./img/' + unique_name)
		res = self.userServObj.addAPostForUser(unique_name, args.postDesc, args.postTitle, current_user["uuid"])
		return {
			'file_loc':unique_name,
			"status": res
		}