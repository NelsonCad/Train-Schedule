$(document).ready(function () {
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCezcaWLzFQUKIukuWYcnaND4MsxzN_H9I",
    authDomain: "iliketrains-e7564.firebaseapp.com",
    databaseURL: "https://iliketrains-e7564.firebaseio.com",
    projectId: "iliketrains-e7564",
    storageBucket: "",
    messagingSenderId: "425659136502",
    appId: "1:425659136502:web:aa4bb59f375d75c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database();

  $("#add-train-btn").on("click", function (){

    //obtain train info
    let trainNm = $("#train-name-input").val().trim();

    let trainDest = $("#destination-input").val().trim();

    let trainTime = $("#time-input").val().trim();

    let trainFreq = $("#frequency").val().trim();

    let newTrain = {
        name: trainNm,
        destination: trainDest,
        time: trainTime,
        frequency: trainFreq
    };

    database.ref().push(newTrain);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency").val("");
  });

  database.ref().on("child_added", function (addedTrain) {


    
  });


});