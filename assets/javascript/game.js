$(document).ready(function() {
var won = 0;
$("#wins").text("Wins: " + won);
//document.getElementById("wins").innerHTML = "Wins: " + won;
var lost = 0;
//document.getElementById("losses").innerHTML = "Losses: " + lost;
$("#losses").text("Lost: " + lost);
var yourTotalScore = 0;
$("#yourTotalScore").text("Your total score: " + yourTotalScore);
//document.getElementById("yourTotalScore").innerHTML = "Your total score: " + yourTotalScore;
// Start the game. Have the computer randomly pick a number between 19 and 120 that will become the target score.
var min=19; 
    var max=120;  
    var targetScore =Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(targetScore);
    // Locate on HTML where the target score will be posted
    document.getElementById("score-to-match-text").innerHTML = "Number to match: " + targetScore;
    //Show images of four crystals. Each crystal will have a separate numerical value (each will have a value randomly generated between 1 and 12).
    var min=1; 
    var max=12;  
    var crystalNumber1 = Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(crystalNumber1);
    var crystalNumber2 = Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(crystalNumber2);
    var crystalNumber3 = Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(crystalNumber3);
    var crystalNumber4 = Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(crystalNumber4);
//The user can click on a crystal image to see the value of that image. Each time a crystal image is clicked, it gets added to the user's total score.
    //Locate on HTML where crystal images will show    
    
    var counter = 0;
    var crystalnumberArray1 = [crystalNumber1, crystalNumber2, crystalNumber3, crystalNumber4];
    for (var i = 0; i < crystalnumberArray1.length; i++) {
        console.log(crystalnumberArray1);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "assets/images/whitecrystal.jpg");
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
        if (counter === targetScore) {
            alert("You win!! Play again?");
            won++;
            $("#wins").text("Wins: " + won);
            //Clear user's total score
            var yourNewTotalScore = 0;
            $("#yourTotalScore").text("Your total score: " + yourNewTotalScore);
            //Clear crystals div
            document.getElementById("crystals").innerHTML = "";
            //Create new score to match
            var min=19; 
            var max=120;  
            var newtargetScore =Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(newtargetScore);
            // Locate on HTML where the target score will be posted
            document.getElementById("score-to-match-text").innerHTML = "Number to match: " + newtargetScore;
            //create new crystal images with new attributes and data values
            var min=1; 
            var max=12;  
            var crystalNumber1 = Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(crystalNumber1);
            var crystalNumber2 = Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(crystalNumber2);
            var crystalNumber3 = Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(crystalNumber3);
            var crystalNumber4 = Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(crystalNumber4);
            var newCounter = 0;
            var crystalnumberArray2 = [crystalNumber1, crystalNumber2, crystalNumber3, crystalNumber4];
            console.log(crystalnumberArray2);
            for (var i = 0; i < crystalnumberArray2.length; i++) {
                var imageCrystal = $("<img>");
                imageCrystal.addClass("crystal-image");
                imageCrystal.attr("src", "assets/images/purplecrystal.jpg");
                imageCrystal.attr("data-crystalvalue", crystalnumberArray2[i]);
                $("#crystals").append(imageCrystal);
            }
            // Create new function that lets users click on image and image will have a numerical value that posts to "Your Total Score".
            $(".crystal-image").on("click", function() {
                var crystalValue = ($(this).attr("data-crystalvalue"));
                console.log(this);
                crystalValue = parseInt(crystalValue);
                newCounter += crystalValue;
                $("#yourTotalScore").text("Your total score: " + newCounter);
                console.log("counter", newCounter);
                console.log("crystal value", crystalValue);
                if (newCounter > newtargetScore) {
                    alert("You lost again! Want to play more? Refresh this page.");
                    lost++;
                    document.getElementById("losses").innerHTML = "Losses: " + lost;
                    //Clear user's total score
                    var yourNewTotalScore = 0;
                    document.getElementById("yourTotalScore").innerHTML = "Your total score: " + yourNewTotalScore;
                }
                else if (newCounter === newtargetScore) {
                    alert("Congrats, you won! Refresh the page to keep playing!");
                }
            });
        }
        else if (counter > targetScore) {
            alert("You lose!! Play again?");
            lost++;
            document.getElementById("losses").innerHTML = "Losses: " + lost;
            //Clear user's total score
            var yourNewTotalScore = 0;
            document.getElementById("yourTotalScore").innerHTML = "Your total score: " + yourNewTotalScore;
            //Clear crystals div
            document.getElementById("crystals").innerHTML = "";
            //Create new score to match
            var min=19; 
            var max=120;  
            var newCounter = 0;
            var newtargetScore =Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(newtargetScore);
            // Locate on HTML where the target score will be posted
            document.getElementById("score-to-match-text").innerHTML = "Number to match: " + newtargetScore;
            //create new crystal images with new attributes and data values
            var min=1; 
            var max=12;  
            var crystalNumber1 = Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(crystalNumber1);
            var crystalNumber2 = Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(crystalNumber2);
            var crystalNumber3 = Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(crystalNumber3);
            var crystalNumber4 = Math.floor(Math.random() * (+max - +min)) + +min; 
            console.log(crystalNumber4);
            var crystalnumberArray2 = [crystalNumber1, crystalNumber2, crystalNumber3, crystalNumber4];
            console.log(crystalnumberArray2);
            for (var i = 0; i < crystalnumberArray2.length; i++) {
                var imageCrystal = $("<img>");
                imageCrystal.addClass("crystal-image");
                imageCrystal.attr("src", "assets/images/purplecrystal.jpg");
                imageCrystal.attr("data-crystalvalue", crystalnumberArray2[i]);
                $("#crystals").append(imageCrystal);
            }
            // Create new function that lets users click on image and image will have a numerical value that posts to "Your Total Score".
        $(".crystal-image").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            console.log(this);
            crystalValue = parseInt(crystalValue);
            newCounter += crystalValue;
            $("#yourTotalScore").text("Your total score: " + newCounter);
            if (newCounter > newtargetScore) {
                alert("You lost again! Want to play more? Refresh this page.");
                lost++;
                document.getElementById("losses").innerHTML = "Losses: " + lost;
                //Clear user's total score
                var yourNewTotalScore = 0;
                document.getElementById("yourTotalScore").innerHTML = "Your total score: " + yourNewTotalScore;
            }
            else if (newCounter === newtargetScore) {
                alert("Congrats, you won! Refresh the page to keep playing!");
            }
        });       
        }
        
        
    });
});