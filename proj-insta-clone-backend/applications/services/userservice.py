from ..models.user_model import UserModel
from ..models.follow_model import UserActionFollow
from ..models.user_post import UserPost
from sqlalchemy import exc

import hashlib
import random

class UserService:
	def __init__(self):
		self.prop = "demo"


	def addUser(self, inputObj):
		new_user = UserModel(inputObj.username,inputObj.email,inputObj.password)
		try:
			new_user.insert()
			return {"msg":"created"}, 200
		except exc.IntegrityError as err:
			# code = err.args[0]
			code, msg = err.orig.args
			return {
				"msg": msg
			}, code

	def addFollowing(self, follwer_id, following_id):
		if follwer_id == following_id:
			return "WTF! you cant follow yourself"
		# small check if following_id users has a valid account of not!
		checkUserAccountIsReal = UserModel.query.filter_by(id=following_id).first() or None
		if checkUserAccountIsReal is None:
			return {
				"code": 8000,
				"msg": "USER with id {} isnt REAL".format(following_id)
			}
		new_follow_row = UserActionFollow(follwer_id, following_id)

		try:
			new_follow_row.insert()
			return "Follow Successful"
		except exc.IntegrityError as err:
			code, msg = err.orig.args
			return {
				"code": code,
				"msg": msg
			}

	def deleteFollowing(self, follwer_id, following_id):
		row = UserActionFollow.query.filter_by(follwer_id=follwer_id,following_id=following_id).first() or None
		if row == None:
			return {
				"msg": "{} isnt following {}".format(follwer_id,following_id)
			}
		try:
			row.delete()
			return "UNFOLLOW SUCCESSFUL"
		except exc.IntegrityError as err:
			code, msg = err.orig.args
			return {
				"code": code,
				"msg": msg
			}


	def userLogin(self, username, password):
		y = hashlib.md5(password.encode())
		state = UserModel.query.filter_by(username=username, password=y.hexdigest()).first() or None

		if state is not None:
			return (True, "SUCCESSFUL", state.id)
		return (False, "WRONG EMAIL/PASSWORD", -1)

	def getFollowingListFor(self,follwer_id):
		arrOfFollowings = UserActionFollow.query.filter_by(follwer_id=follwer_id) or None

		lstOfUserFollowing = []

		for x in arrOfFollowings:
			y = UserModel.query.filter_by(id=x.following_id).first() or None
			# profile picture will be the recent picture that user post if nothing is posted then default img is sent
			if y:
				lstOfUserFollowing.append({'username':y.username,'uuid':y.id})

		return lstOfUserFollowing

	def addAPostForUser(self, imgPath, postDesc, postTitle, posted_by):

		newPost = UserPost(postTitle, postDesc, imgPath, posted_by)
		try:
			newPost.insert()
			return {'msg':'Successfully Posted'}
		except:
			return {'msg':'somthing went Posted'}


	def searchForUsers(self,username_matches,uuid):
		resArrList = UserModel.query.filter(UserModel.username.like('%'+username_matches+'%')).all()

		userSearchList = []
		for x in resArrList:
			following_status = UserActionFollow.query.filter_by(follwer_id=uuid, following_id=x.id).first() or None
			state = True
			if following_status == None:
				state = False
			if x.id == uuid:
				pass
			else:
				userSearchList.append(
						{
							'username': x.username,
							'uuid': x.id,
							'state': state
							# 'following_state': following_status.follwer_id
						}
					)
		return userSearchList
		
	def getPostForUser(self, uuid):
		resArrList = UserPost.query.filter_by(posted_by=uuid) or None
		# check the current uuid has liked it or not later.
		if resArrList is None:
			return {'msg':'No POST was posted_by {}'.format(uuid)},500

		post_list = []
		for x in resArrList:
			posted_by = UserModel.query.filter_by(id=x.posted_by).first() or None
			post_list.insert(0,
					{
						'postid': x.id,
						'postTitle': x.postTile,
						'postDescription': x.postDesc,
						'postLink': '/img/'+x.imgPath,
						'username': posted_by.username,
						'uuid': posted_by.id,
						'hasCommented': [], # future implementation
						'totalLikeCount': 0, # future like model implementatin
						'hasLiked': False # future like model implementatin
					}
				)
		return post_list, 200

	def getPostForOtherUsersWhomUUIDFollows(self, uuid):
		# uuid : the man who is asking for posts that he is following.
		following_list = self.getFollowingListFor(uuid)

		postListArray = []
		for x in following_list:
			res, status = self.getPostForUser(x['uuid'])
			for j in res:
				postListArray.append(j)# upcaking each post from a list

		random.shuffle(postListArray)
		return postListArray

	def getLoggedUserDetails(self, uuid):
		user = UserModel.query.filter_by(id=uuid).first() or None
		if user is None:
			return {'msg':'FUCK YOU, NO SUCH USER'}, 500
		following_list = self.getFollowingListFor(uuid)
		# follower_list = who is following  user with UUID this. jara amake follow korbe, amar following id thakbe entry te. follower hobe tokhon j follow korche amake
		follower_list = UserActionFollow.query.filter_by(following_id=uuid).all() or None
		if following_list is None:
			following_list = []
		if follower_list is None:
			follower_list = []
		return {
			'uuid': user.id,
			'username': user.username,
			'followerCount': len(follower_list),
			'followingCount': len(following_list)
		}, 200