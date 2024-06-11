var randomNumber = Math.floor(Math.random()*6)+1;

var randomImage = "dice" + randomNumber + ".png";

var randomSource =  randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "dice"+randomNumber2+".png";

var randomSource2 = randomImage2; 

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomSource2);

// if player1 win
if(randomNumber>randomNumber2)
    {
       document.querySelector("h1").innerHTML="🚩 Player 1 wins";
    }
    else if(randomNumber2>randomNumber)
        {
            document.querySelector("h1").innerHTML="Player 2 wins 🚩";
        }
        else{
            document.querySelector("h1").innerHTML="Match Draw";
        }