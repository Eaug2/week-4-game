$(document).ready(function(){
    var wins = 0;
    var looses = 0;
    var userTotal = 0;

    //targetNumb between 19-120
    var targetNumb = Math.floor(Math.random()*101+19);
    $("#goal-number").text("Number to Guess: " + targetNumb);
    console.log(targetNumb);
    console.log("-----");
    

    // crystal value between 1-12
    
    var crystal1 = Math.floor(Math.random()*11+1);
    var crystal2 = Math.floor(Math.random()*11+1);
    var crystal3 = Math.floor(Math.random()*11+1);
    var crystal4 = Math.floor(Math.random()*11+1);
    

    $("#wins").text("Wins: " + wins);
    $("#looses").text("Looses: " + looses);

    function reset(){
         targetNumb = Math.floor(Math.random()*101+19);
        $("#goal-number").text("Number to Guess: " + targetNumb);
        console.log(targetNumb);
        console.log("-----");
         crystal1 = Math.floor(Math.random()*11+1);
         crystal2 = Math.floor(Math.random()*11+1);
         crystal3 = Math.floor(Math.random()*11+1);
         crystal4 = Math.floor(Math.random()*11+1);
        userTotal = 0;
        $("#finalTotal").text(userTotal);
    };

//first crystal
    $("#one").on("click", function(){
        userTotal = userTotal + crystal1;
        $("#finalTotal").text(userTotal);

        if(userTotal === targetNumb){
            alert("You Win!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        }
        else if (userTotal > targetNumb){
            alert("You Lose!");
            looses++;
            $("#looses").text("Looses: " + looses);
            reset();
        }
    });

//second crystal
    $("#two").on("click", function(){
        userTotal = userTotal + crystal2;
        $("#finalTotal").text(userTotal);

        if(userTotal === targetNumb){
            alert("You Win!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        }
        else if (userTotal > targetNumb){
            alert("You Lose!");
            looses++;
            $("#looses").text("Looses: " + looses);
            reset();
        }
    });

// third crystal
    $("#three").on("click", function(){
        userTotal = userTotal + crystal3;
        $("#finalTotal").text(userTotal);

        if(userTotal === targetNumb){
            alert("You Win!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        }
        else if (userTotal > targetNumb){
            alert("You Lose!");
            looses++;
            $("#looses").text("Looses: " + looses);
            reset();
        }
    });

// forth crystal
    $("#four").on("click", function(){
        userTotal = userTotal + crystal4;
        $("#finalTotal").text(userTotal);

        if(userTotal === targetNumb){
            alert("You Win!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        }
        else if (userTotal > targetNumb){
            alert("You Lose!");
            looses++;
            $("#looses").text("Looses: " + looses);
            reset();
        }
    });

    

});