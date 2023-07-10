from flask import Flask, render_template, make_response

debug=True

app = Flask(__name__)

@app.route('/')
def start():
    response = make_response('')
    response.set_cookie('cookie_name', 'cookie_value', domain='eusouanderson.onrender.com')
    return render_template('index.html')

@app.errorhandler(404)  
def page_not_found(error):
    return render_template('index.html'), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)