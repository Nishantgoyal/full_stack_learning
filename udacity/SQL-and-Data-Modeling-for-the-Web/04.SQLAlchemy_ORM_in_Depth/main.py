from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

config = {
    "user": "postgres",
    "password": "mysecretpassword",
    "host": "192.168.1.24",
    "port": "5432",
    "db": "todoapp"
}
db_uri = "postgresql://{user}:{password}@{host}:{port}/{db}".format(**config)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri

db = SQLAlchemy(app)


class Person(db.Model):
    __tablename__ = 'persons'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)


db.create_all()


@app.route('/')
def index():
    person = Person.query.first()
    return "Hello {}".format(person.name)


if __name__ == '__main__':
    app.run("0.0.0.0", port=8080)
