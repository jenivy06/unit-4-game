var won = 0;
document.getElementById("wins").innerHTML = "Wins: " + won;
var lost = 0;
document.getElementById("losses").innerHTML = "Losses: " + lost;
var yourTotalScore = 0;
document.getElementById("yourTotalScore").innerHTML = "Your total score: " + yourTotalScore;
// Start the game. Have the computer randomly pick a number between 19 and 120 that will become the target score.
//function startGame ()
    var min=19; 
    var max=120;  
    var targetScore =Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(targetScore);
    // Locate on HTML where the target score will be posted
    document.getElementById("score-to-match-text").innerHTML = "Number to match: " + targetScore;
//Show images of four crystals. Each crystal will have a separate numerical value (each will have a value randomly generated between 1 and 12).
    //var min=1; 
    ///var max=12;  
    //var crystalNumber1 = Math.floor(Math.random() * (+max - +min)) + +min; 
    ///console.log(crystalNumber1);
    //var crystalNumber2 = Math.floor(Math.random() * (+max - +min)) + +min; 
    //console.log(crystalNumber2);
    //var crystalNumber3 = Math.floor(Math.random() * (+max - +min)) + +min; 
    //console.log(crystalNumber3);
    //var crystalNumber4 = Math.floor(Math.random() * (+max - +min)) + +min; 
    //console.log(crystalNumber4);
    
//The user can click on a crystal image to see the value of that image. Each time a crystal image is clicked, it gets added to the user's total score.
    //Locate on HTML where crystal images will show    
    
    var counter = 0;
    var crystalnumberArray1 = [11, 8, 4, 2];
    for (var i = 0; i < crystalnumberArray1.length; i++) {
        console.log(crystalnumberArray1);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "https://cdn.pixabay.com/photo/2016/08/18/17/37/rock-crystal-1603480_960_720.jpg");
        imageCrystal.attr("data-crystalvalue", crystalnumberArray1[i]);
        console.log(crystalnumberArray1[i]);
        $("#crystals").append(imageCrystal);
    }
  
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        console.log(this);
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#yourTotalScore").text("Your total score: " + counter);
        console.log("counter", counter);
        console.log("crystal value", crystalValue);
        //alert("New score: " + counter);
    //Locate on HTML where user's score is posted
//If the user reaches the target score without going over:
    //Show an alert, "You win!"
    //Increase number of wins by one
    if (counter === targetScore) {
        alert("You win!!");
        won++;
        document.getElementById("wins").innerHTML = "Wins: " + won;
        //Reset counter and generate new values for each crystal
      }
//If the user's score goes over the target score:
    //Show an alert, "You lose!"
    //Increase number of losses by one
        //locate on HTML where number of losses is posted
    else if (counter > targetScore) {
        alert("You lose!!");
        lost++;
        document.getElementById("losses").innerHTML = "Losses: " + lost;
        //Clear user's total score
        //var yourNewTotalScore = 0;
        //document.getElementById("yourTotalScore").innerHTML = "Your total score: " + yourNewTotalScore;
        //Clear crystals div
        //document.getElementById("crystals").innerHTML = "";
        //Create new score to match
        //var min=19; 
        //var max=120;  
       // var newtargetScore =Math.floor(Math.random() * (+max - +min)) + +min; 
        //console.log(newtargetScore);
        // Locate on HTML where the target score will be posted
       // document.getElementById("score-to-match-text").innerHTML = "Number to match: " + newtargetScore; 
    }