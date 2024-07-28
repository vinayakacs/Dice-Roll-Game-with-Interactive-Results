document.addEventListener("DOMContentLoaded", function() {

    var dice=["./images/dice1.png",
        "./images/dice2.png",
        "./images/dice3.png",
        "./images/dice4.png",
        "./images/dice5.png",
        "./images/dice6.png"];

        function getRan(arrayLength){
            return  Math.floor(Math.random()*arrayLength);
          }

    var img11 = document.querySelector(".img1");
    var img22 = document.querySelector(".img2");

    if(img11>img22){

      document.getElementsByTagName("h1")[0].innerHTML="Player1 Won";
    }

      var index1 = getRan(dice.length)
      var index2 = getRan(dice.length)

    

      img11.src=dice[index1];
      img22.src=dice[index2];

      if(index1>index2){

        document.getElementsByTagName("H1")[0].innerHTML="Player 1 - Won 🚩";
      }

      else if(index1<index2){
        document.getElementsByTagName("H1")[0].innerHTML="Player 2 - Won 🚩";

      }
      else{
        document.getElementsByTagName("H1")[0].innerHTML="It's a Draw🚩";
      }


});