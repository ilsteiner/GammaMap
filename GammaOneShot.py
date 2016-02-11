from flask import Flask, render_template, json, Markup, jsonify
import os

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Gamma World!'


@app.route('/map.html')
def show_player_map():
    return render_template('pages/map.html')


@app.route('/show_map/<map_name>', methods=['GET'])
def get_styles(map_name):
    root = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(root, "static/json/map_styles", map_name + '.json')
    with open(json_url, 'r') as json_file:
        styles = json_file.read()
    return render_template('pages/map.html', styles=styles, active=map_name)

if __name__ == '__main__':
    app.run(debug=True)
