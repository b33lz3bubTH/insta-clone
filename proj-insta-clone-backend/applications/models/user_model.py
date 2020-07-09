import hashlib
from .db import db

class UserModel(db.Model):
	__tablename__ = "users"
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(80), unique=True)
	email = db.Column(db.String(120), unique=True)
	password = db.Column(db.String(120))

	def __init__(self,username,email,password):
		self.username = username
		self.email = email
		y = hashlib.md5(password.encode())
		self.password = y.hexdigest()


	def insert(self):
		db.session.add(self)
		db.session.commit() 
