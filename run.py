from flask import Flask
from flask import render_template, redirect, url_for
from models import User, db
from forms import RegistrationForm, LoginForm

app = Flask(__name__)

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, password=form.password.data)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    # Implement login logic here
    return render_template('login.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)

