from flask import Flask, render_template, make_response
from datetime import date
from functools import lru_cache
from joblib import Memory

memory = Memory('./cache', verbose=0)

debug=True

app = Flask(__name__)
date = f"{date.today()} "


@app.route('/')
@lru_cache(maxsize=None)
@memory.cache
def start():
    response = make_response('')
    response.set_cookie('cookie_name', 'cookie_value', domain='eusouanderson.onrender.com')
    return render_template('index.html' , date = date)
   
@app.route('/projects')
def projects():
	
	return render_template('projectss.html')

@app.errorhandler(404)  
def page_not_found(error):
    return render_template('index.html'), 404

print(date)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
