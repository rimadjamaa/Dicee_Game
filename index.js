var number1 =Math.random()*6 + 1;
number1=Math.floor(number1);
console.log(number1);


var number2 =Math.random()*6 + 1;
number2=Math.floor(number2);
console.log(number1);

var imgname1= "images/dice"+number1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgname1);

var imgname2= "images/dice"+number2+".png";
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",imgname2);

var headElement = document.getElementById('headElement');
if (number1 > number2){
  headElement.innerHTML = "🚩 Player 1 win";

} else if (number1 < number2){
  headElement.textContent = "Player 2 win 🚩";
} else {
  headElement.textContent = "🎲Draw!";
}