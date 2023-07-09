from flask import Flask, render_template

debug=True

app = Flask(__name__)

@app.route('/')
def start():
    return render_template('index.html')

@app.errorhandler(404)  
def page_not_found(error):
    return render_template('not_found.html'), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0')