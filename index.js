function display(number){
    if(number==1){
      return "images/dice1.png";
    }
    else if (number==2) {
      return "images/dice2.png";
    }
    else if (number==3) {
      return "images/dice3.png";
    }
    else if (number==4) {
      return "images/dice4.png";
    }
    else if (number==5) {
      return "images/dice5.png";
    }
    else if (number==6) {
      return "images/dice6.png";
    }
}

function win(n1,n2){
  if(n1>n2){
    return "Player 1 Wins!"
  }
  else if (n1<n2) {
    return "Player 2 Wins!"
  }
  else{
    return "Draws!"
  }
}

var n1 = Math.floor(Math.random()*6) + 1;
var n2 = Math.floor(Math.random()*6) + 1;
// var a1 = display(n1);
var a1= "images/dice" + n1 + ".png";
// var a2 = display(n2);
var a2= "images/dice" + n2 + ".png";
var result = win(n1,n2);
// console.log(a2);
document.querySelector(".img1").setAttribute("src", a1);
document.querySelector(".img2").setAttribute("src", a2);
document.querySelector(".heading").innerHTML = result;
