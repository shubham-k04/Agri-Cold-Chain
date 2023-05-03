from sklearn.preprocessing import MinMaxScaler
import numpy as np
from flask import Flask, request, render_template,jsonify
import pickle
from tensorflow import keras
import random
import cv2
import math

app=Flask(__name__)

#Temperature model with timwsteps
rel_model = keras.models.load_model('Model')
scalerfile = 'scaler.sav'
scaler = pickle.load(open(scalerfile, 'rb'))

#Temperature model without timestep (Actual dataset)
New_rel_model = keras.models.load_model('New_Model')
New_scalerfile = 'New_scaler.sav'
New_scaler = pickle.load(open(New_scalerfile, 'rb'))

#Home page
@app.route("/")
def home():
    return render_template("index.html")

#Generating random number for sensors data
#In real it will come from clouds
@app.route("/stuff",methods=["GET"])
def stuff():
    return jsonify(s1=np.random.uniform(285.617,308.003),s2=np.random.uniform(289.185,310.623))

#Color map using openCV 
@app.route("/map",methods=["POST"])
def map():
    s1=request.form.get("sensor1")
    s2=request.form.get("sensor2")
    z=request.form.get("z_value")
    _x=[-2.0, -1.75, -1.5, -1.25, -1.0, -0.75, -0.5, -0.25, 0.0, 0.25]
    _y=[-4.65, -4.02, -3.45, -2.85, -2.25, -1.65, -1.05, -0.45, 0.15, 0.75]
    temp=[]
    for i in _x:
        for j in _y:
            brr=scaler.transform(np.array([[s1,s2,0,i,j,z]]))
            temp.append([i,j,round(float(rel_model.predict(brr)),3)])

    X, Y = np.meshgrid(np.linspace(-2.0, 0.25, 800), np.linspace(-4.65, 0.75, 500))

    kernel_size = 1
    temp_interp = np.zeros_like(X)
    for i in range(len(temp)):
        kernel = np.exp(-((X - temp[i][0])**2 + (Y - temp[i][1])**2) / (2 * kernel_size**2))
        temp_interp += kernel * temp[i][2]
    temp_interp = (temp_interp / temp_interp.max() * 255).astype(np.uint8)

    color_map = cv2.applyColorMap(temp_interp, cv2.COLORMAP_JET)
    cv2.imwrite("static/Temp.jpg", color_map)

    image_url = 'static/Temp.jpg';
    return jsonify({'image_url': image_url})


#Quality map (10x10)
@app.route("/quality",methods=["POST"])
def quality():
    s1=request.form.get("sensor1")
    s2=request.form.get("sensor2")
    z=request.form.get("z_value")
    _x=[-2.0, -1.75, -1.5, -1.25, -1.0, -0.75, -0.5, -0.25, 0.0, 0.25]
    _y=[-4.65, -4.02, -3.45, -2.85, -2.25, -1.65, -1.05, -0.45, 0.15, 0.75]
    temp=[]
    for i in _x:
        ar=[]
        for j in _y:
            brr=New_scaler.transform(np.array([[s1,s2,i,j,z]]))
            temp_val=round(float(New_rel_model.predict(brr)),3)
            k = 2.685*(10**9)*math.exp((-48450.9567)/(temp_val*8.314))
            q_val = 100 - k*(1)
            ar.append(round(q_val,2))
        temp.append(ar)

    return jsonify({'arr':temp})

#Temperature Prediction at a particular point
@app.route("/predict",methods=["POST"])
def predict():
        
       s1=float(request.form.get("sensor1"))
       s2=float(request.form.get("sensor2"))
       x=float(request.form.get("x_val"))
       y=float(request.form.get("y_val"))
       z=float(request.form.get("z_val"))

       arr=New_scaler.transform(np.array([[s1,s2,x,y,z]]))
       prediction=round(float(New_rel_model.predict(arr)),5)

       return jsonify({'predicted_value':prediction})

#Quality prediction at a particular point
@app.route("/_quality",methods=["POST"])
def _quality():
        
       s1=float(request.form.get("sensor1"))
       s2=float(request.form.get("sensor2"))
       x=float(request.form.get("x_val"))
       y=float(request.form.get("y_val"))
       z=float(request.form.get("z_val"))
       day=int(request.form.get("day"))
       hour=int(request.form.get("hour"))
       t=day+hour/24

       arr=New_scaler.transform(np.array([[s1,s2,x,y,z]]))
       prediction=round(float(New_rel_model.predict(arr)),5)

       return jsonify({'predicted_value':prediction,'t':t})

#Temperature Vs time graph (using with timestep model)
@app.route("/plot",methods=["POST"])
def plot():
    
       s1=float(request.form.get("sensor1"))
       s2=float(request.form.get("sensor2"))
       x=float(request.form.get("x_val"))
       y=float(request.form.get("y_val"))
       z=float(request.form.get("z_val"))

       graph=[]
       for i in range(101):
            brr=scaler.transform(np.array([[s1,s2,100*i,x,y,z]]))
            graph.append(round(float(rel_model.predict(brr)),5))

       return jsonify({'_graph':graph})

if __name__=="__main__":
    app.run(debug=True)
    