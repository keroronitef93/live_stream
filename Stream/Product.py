from flask import Flask, render_template, Response
from Stream import Stream

app = Flask( __name__ )

@app.route('/')
def index():
    return render_template('index.html')

def generator(camera):
    while True:
        frame = camera.get_frame()
        if frame is not None:
            yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
        else:
            print('frame is none')

@app.route('/video')
def video():
    return Response(generator(Stream()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)