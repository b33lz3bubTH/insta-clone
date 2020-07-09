from .db import db

class UserActionFollow(db.Model):
	__tablename__ = "follow_table"
	id = db.Column(db.Integer, primary_key=True)
	follwer_id = db.Column(db.Integer)
	following_id = db.Column(db.Integer)


	def __init__(self,follwer_id,following_id):
		self.follwer_id = follwer_id
		self.following_id = following_id
		

	def insert(self):
		db.session.add(self)
		db.session.commit() 

	def delete(self):
		db.session.delete(self)
		db.session.commit()