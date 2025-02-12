var random_number1=Math.random();
random_number1=Math.floor(random_number1*6)+1;
var random_dice_image="dice"+random_number1+".png";
var random_image_source="images/"+random_dice_image;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", random_image_source);

var random_number2=Math.random();
random_number2=Math.floor(random_number2*6)+1;
var random_dice_image2="dice"+random_number2+".png";
var random_image_source2="images/"+random_dice_image2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", random_image_source2);

if(random_number1>random_number2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(random_number2>random_number1){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}
