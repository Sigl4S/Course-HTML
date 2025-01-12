//------------------------------------------------
//Javascript Tryout
//------------------------------------------------
function myFunction() {
document.getElementById("roast").innerHTML = "Hello JavaScript!";
}

//------------------------------------------------
//Geolocation API Tryout
//------------------------------------------------

const x = document.getElementById("PGeo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function watchLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

//------------------------------------------------
//Drag-and-Drop Tryout
//------------------------------------------------
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//------------------------------------------------
//Webstorage Tryout
//------------------------------------------------
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

//------------------------------------------------
//WebWorkers Tryout
//------------------------------------------------
var w;

function startWorker() {

  if(typeof(Worker) !== "undefined") {    
    if(typeof(w) == "undefined") {
      document.getElementById("WWresult").innerHTML = "started";
      w = new Worker("05HTML_JS_Workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("WWresult").innerHTML = event.data;
    };
  } else {
    document.getElementById("WWresult").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() {
    document.getElementById("WWresult").innerHTML = "stopped";    
  w.terminate();
  w = undefined;
}