$(document).ready(function() {

     //Hides tab lines on load
     $(".tabs").hide();

     var i = 0;

     $("#menuBtn").click(function() {
          //Tab variables
          var tabNumber = 4;
          var tabWidth = 200;
          var tabFinal = tabNumber*tabWidth + 60 + "px";
          var meatFinal = (tabNumber*tabWidth) + "px";

          if (i === 0) {

          //Animates height of border
          $("#hamburgerWrapper").animate({height : "87px",
                           top: "10px"}, 250);
          //Centers the hamburger
          $("#meatWrapper").animate({"padding-top":"21px"}, 250);

          //Animates the width of the border
          $("#hamburgerWrapper").delay(250).animate({width: tabFinal}, 1000);

          //Creates tab lines during animation
          $("#tabZero").delay(550).fadeIn(1);
          $("#tabOne").delay(850).fadeIn(1);
          $("#tabTwo").delay(1000).fadeIn(1);
          $("#tabThree").delay(1200).fadeIn(1);

          //Makes the burger not move
          $("#meatWrapper").delay(250).animate({"padding-left":meatFinal}, 1000);

          //Makes burger turn into an "X"
          $("#middleMeat").addClass("fadeout").removeClass("fadein");
          $("#bunOne").addClass("rotateUp").removeClass("rotateReverseUp");
          $("#bunTwo").addClass("rotateDown").removeClass("rotateReverseDown");


          i++;

          }

          else {
               //Close the hamburgerWrapper
               $("#hamburgerWrapper").animate({width: "60px"}, 1000);
               $("#meatWrapper").animate({"padding-left":0}, 1000);
               $("#hamburgerWrapper").delay(250).animate({height : "60px",
                                top: "23px"}, 250);
               $("#meatWrapper").delay(250).animate({"padding-top":"8px"}, 250);

               //tabs disapear
               $("#tabZero").delay(930).fadeOut(1);
               $("#tabOne").delay(650).fadeOut(1);
               $("#tabTwo").delay(500).fadeOut(1);
               $("#tabThree").delay(300).fadeOut(1);

               //re-hamburger-ize the menu
               $("#middleMeat").addClass("fadein").removeClass("fadeout");
               $("#bunOne").addClass("rotateReverseUp").removeClass("rotateUp");
               $("#bunTwo").addClass("rotateReverseDown").removeClass("rotateDown");

               i--;
          }
     })
})
