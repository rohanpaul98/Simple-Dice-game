var randomNumber1 = Math.floor(Math.random()*6)+1;
var imageSelected = "dice"+randomNumber1+".png";
var imageSelectedPath = "images/"+imageSelected;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSelectedPath);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSelected2 = "dice"+randomNumber2+".png";
var imageSelectedPath2 = "images/"+imageSelected2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSelectedPath2);


function reloadpage(){
    location.reload();
}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Its a draw";
}