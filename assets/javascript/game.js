//  Crystals Collector Game
var won = 0;
var lost = 0;
var yourTotalScore = 0;

// Have the computer randomly pick a number between 19 and 120 that will become the target score.
    var min=19; 
    var max=120;  
    var targetScore =Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(targetScore);

    // Locate on HTML where the target score will be posted

    $('score-to-match-text').text(targetScore);


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
    
    var crystalnumberArray1 = [11, 8, 4, 2];
    for (var i = 0; i < crystalnumberArray1.length; i++) {
        console.log(crystalnumberArray1);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "https://cdn.pixabay.com/photo/2016/08/18/17/37/rock-crystal-1603480_960_720.jpg");
        imageCrystal.attr("data-crystalvalue", crystalnumberArray1[i]);
        $("#crystals").append(imageCrystal);
  }

    //Locate on HTML where user's score is posted
//If the user reaches the target score without going over:
    //Show an alert, "You win!"
    //Increase number of wins by one
        //Locate on HTML where number of wins is posted.
    //Generate a new random target score
    //Reset the values for each crystal image.
//If the user's score goes over the target score:
    //Show an alert, "You lose!"
    //Increase number of losses by one
        //locate on HTML where number of losses is posted
        //Generate a new random target score
        //Reset the values for each crystal image.