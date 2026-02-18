from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route("/")
def start():
    return render_template("index.html")

@app.route("/yes")
def game():
    return render_template("yes.html")

if __name__ == "__main__":
    app.run(debug=True)