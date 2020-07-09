from flask import Flask, render_template, request, redirect, url_for
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


class TODO(db.Model):
    __tablename__ = "todos"
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    description = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return "<TODO {} {}>".format(self.id, self.description)


db.create_all()


@app.route("/todos/create", methods=["POST"])
def create_todo():
    description = request.form.get("description")
    todo = TODO(description=description)
    db.session.add(todo)
    db.session.commit()
    redirect(url_for('index'))


@app.route('/')
def index():
    return render_template("index.html", data=TODO.query.all())


if __name__ == '__main__':
    app.run("0.0.0.0", debug=True, port=8080)
