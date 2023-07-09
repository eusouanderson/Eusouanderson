from flask import Flask, render_template

debug=True

app = Flask(__name__)

@app.route('/')
def start():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')