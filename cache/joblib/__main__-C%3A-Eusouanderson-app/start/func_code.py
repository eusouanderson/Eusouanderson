# first line: 14
@app.route('/')
@lru_cache(maxsize=None)
@memory.cache
def start():
    response = make_response('')
    response.set_cookie('cookie_name', 'cookie_value', domain='eusouanderson.onrender.com')
    return render_template('index.html' , date = date)
