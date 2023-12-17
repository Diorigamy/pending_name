from flask import render_template, redirect, url_for, flash
from app import app, db, bcrypt
from app.models import User
from app.forms import RegistrationForm, LoginForm
from flask_login import login_user, current_user, logout_user, login_required

@app.route("/register", methods=['GET', 'POST'])
def register():
    # Implementation here
    pass

@app.route("/login", methods=['GET', 'POST'])
def login():
    # Implementation here
    pass

@app.route("/user/dashboard")
@login_required
def user_dashboard():
    # Implementation here
    pass

