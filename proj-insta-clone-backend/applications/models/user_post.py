from .db import db

class UserPost(db.Model):
	__tablename__ = "post"
	id = db.Column(db.Integer, primary_key=True)
	postTile = db.Column(db.String(80), unique=False)
	postDesc = db.Column(db.String(200), unique=False)
	imgPath = db.Column(db.String(200), unique=False)
	posted_by = db.Column(db.Integer)

	def __init__(self,postTile,postDesc,imgPath,posted_by):
		self.postTile = postTile
		self.postDesc = postDesc
		self.imgPath = imgPath
		self.posted_by = posted_by

	def insert(self):
		db.session.add(self)
		db.session.commit() 
