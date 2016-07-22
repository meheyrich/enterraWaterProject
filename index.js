$(document).ready(function() {

     function changer() {
          console.log($(window).width());
     }
     $(window).resize(changer);
     //Hides tab lines on load
     // $(".tabs").hide();

     var i = 0;

     $("#menuBtn").click(function() {
          //Tab variables
          var tabNumber = 4;
          var tabWidth = 200;
          var tabFinal = tabNumber*tabWidth + 60 + "px";
          var meatFinal = (tabNumber*tabWidth) + "px";

          if (i === 0 && $("#hamburgerWrapper").width() == 60 && $("#hamburgerWrapper").height() == 60) {

          //Animates height of border
          $("#hamburgerWrapper").removeClass("wrapperStretchUpReverse").addClass("wrapperStretchUp");
          //Centers the hamburger
          $("#meatWrapper").removeClass("burgerHolderUpReverse").addClass("burgerHolderUp");

          //Animates the width of the border
          // window.setTimeout(function(){$("#hamburgerWrapper").removeClass("wrapperStretchUp").addClass("wrapperStretchOut");}, 500);
          window.setTimeout(function(){$("#hamburgerWrapper").removeClass("wrapperStretchUp").addClass("wrapperStretchOut");}, 500);
          //Creates tab lines during animation
          window.setTimeout(function(){$("#tabZero").addClass("showTab");}, 550);
          window.setTimeout(function(){$("#tabOne").addClass("showTab");}, 700);
          window.setTimeout(function(){$("#tabTwo").addClass("showTab");}, 850);
          window.setTimeout(function(){$("#tabThree").addClass("showTab");}, 1050);

          //Makes the burger not move
          window.setTimeout(function(){$("#meatWrapper").removeClass("burgerHolderUp").addClass("burgerHolderLeft");}, 500);

          //Makes burger turn into an "X"
          $("#middleMeat").addClass("fadeout").removeClass("fadein");
          $("#bunOne").addClass("rotateUp").removeClass("rotateReverseUp");
          $("#bunTwo").addClass("rotateDown").removeClass("rotateReverseDown");


          i++;
     }

          else if( $("#hamburgerWrapper").width() == (tabNumber*tabWidth + 60) && $("#hamburgerWrapper").height() == 87) {
               //Close the hamburgerWrapper
               $("#hamburgerWrapper").removeClass("wrapperStretchOut").addClass("wrapperStretchOutReverse");
               $("#meatWrapper").removeClass("burgerHolderLeft").addClass("burgerHolderLeftReverse");
               window.setTimeout(function(){$("#hamburgerWrapper").removeClass("wrapperStretchOutReverse").addClass("wrapperStretchUpReverse");}, 1250);
               window.setTimeout(function(){$("#meatWrapper").removeClass("burgerHolderLeftReverse").addClass("burgerHolderUpReverse");}, 1250);

               //tabs disapear
               window.setTimeout(function(){$("#tabZero").removeClass("showTab");}, 900);
               window.setTimeout(function(){$("#tabOne").removeClass("showTab");}, 450);
               window.setTimeout(function(){$("#tabTwo").removeClass("showTab");}, 250);
               window.setTimeout(function(){$("#tabThree").removeClass("showTab");}, 200);

               //re-hamburger-ize the menu
               $("#middleMeat").addClass("fadein").removeClass("fadeout");
               $("#bunOne").addClass("rotateReverseUp").removeClass("rotateUp");
               $("#bunTwo").addClass("rotateReverseDown").removeClass("rotateDown");

               i--;
          }
     });
});
