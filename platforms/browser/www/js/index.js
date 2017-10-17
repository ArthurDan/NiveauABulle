/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        if (window.cordova)
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        else
            this.onDeviceReady(); 
    },


    onDeviceReady: function() {
        console.log('Device is ready');
        var options = { frequency: 300 };  // Update every 3/10 seconds
        var watchID = navigator.accelerometer.watchAcceleration(this.onSuccess, this.onError, options);
        $('#app').load('views/index.html');
    },


    onSuccess: function(acceleration) {
        /*let accelerationData = {
            x: acceleration.x,
            y: acceleration.y,
            z: acceleration.z,
            timestamp: acceleration.timestamp
        };*/
        console.log(acceleration);
        $("#accelerationX").text((acceleration.x + 10) * 5);
        $("#accelerationY").text((acceleration.y +10) * 5);
        $("#accelerationZ").text(acceleration.z);
        var  elmt = document.getElementById("bulleX");
        elmt.style.left= acceleration.x*2,4;
        var  elmt = document.getElementById("bulleY");
        elmt.style.top= acceleration.y*2,4
    },

    onError: function() {
        alert('onError!');
    }

};

app.initialize();