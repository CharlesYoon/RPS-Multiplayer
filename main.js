//fireBase configuration
var config = {
    apiKey: "AIzaSyCcYGXXKB2aiA9NotwYz5CcJnq9Kiilf-M",
    authDomain: "rockpaperscissors-cc639.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-cc639.firebaseio.com",
    projectId: "rockpaperscissors-cc639",
    storageBucket: "",
    messagingSenderId: "101707668234"
  };
  firebase.initializeApp(config);

//variables necessary for rockPaperScissors

//ScoreBoard
var wins, losses = 0;

//Players playing, if there is only one player playing
//put in a computer that randomly chooses RPS
var playerOneStatus = false;
var playerTwoStatus = false;

//Players decision
//use strings rock, paper, or scissors
//makes it less confusing that using numbers
var playerOneChoice, playerTwoChoice = "";

//reference to the database
var database = firebase.database();
//references to the players
var player1 = database.ref("/playerOne");
var player2 = database.ref("/playerTwo");

//create a function for win conditions
function RPSOutcome(){
    //getting both the values
    player1.once("value", function(snapshot) {
		playerOneChoice = snapshot;
	}, function(errorObject) {
		console.log(errorObject.code);
	});
	player2.once("value", function(snapshot) {
		playerTwoChoice = snapshot;
	}, function(errorObject) {
		console.log(errorObject.code);
    });
    
    //now checking RPS
    if (playerOneChoice.val() == "p" && playerTwoChoice.val() == "r"){
        $("#playerOneScore").html($("#playerOneScore").val()++);
    }else if(playerOneChoice.val() == "r" && playerTwoChoice.val() == "p"){
        $("#playerTwoScore").html($("#playerOneScore").val()++);
    }else if(playerOneChoice.val() == "s" && playerTwoChoice.val() == "p"){
        $("#playerOneScore").html($("#playerOneScore").val()++);
    }else if(playerOneChoice.val() == "p" && playerTwoChoice.val() == "s"){
        $("#playerTwoScore").html($("#playerOneScore").val()++);
    }else if(playerOneChoice.val() == "r" && playerTwoChoice.val() == "s"){
        $("#playerOneScore").html($("#playerOneScore").val()++);
    }else if(playerOneChoice.val() == "s" && playerTwoChoice.val() == "r"){
        $("#playerTwoScore").html($("#playerOneScore").val()++);
    }
}


//input player one into the game
player1.on("value", function(snapshot) {
	if (snapshot.val() !== null) {
        playerOneChoice = database.ref("/playerOne/choice");
        console.log(playerOneChoice);
	};
}, function(errorObject) {
	console.log("The read failed: " + errorObject.code);
});

//input player two into the game
player2.on("value", function(snapshot) {
	if (snapshot.val() !== null) {
        playerOneChoice = database.ref("/playerOne/choice");
        console.log(playerOneChoice);
	};
}, function(errorObject) {
	console.log("The read failed: " + errorObject.code);
});
