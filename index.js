$(document).ready(function() {
     
     //Hides tab lines on load
     $(".tabs").hide();
    
     $("#hamburgerWrapper").click(function() {
          //Tab variables
          var tabNumber = 4;
          var tabWidth = 200;
          var tabFinal = tabNumber*tabWidth + 60 + "px";
          var meatFinal = (tabNumber*tabWidth) + "px";

          //Animates height of border
          $(this).animate({height : "87px",
                           top: "10px"}, 250);
          //Centers the hamburger
          $("#meatWrapper").animate({"padding-top":"21px"}, 250);

          //Animates the width of the border
          $(this).delay(250).animate({width: tabFinal}, 1000);
          
          //Creates tab lines during animation
          $("#tabZero").delay(550).fadeIn(1);
          $("#tabOne").delay(850).fadeIn(1);
          $("#tabTwo").delay(1000).fadeIn(1);
          $("#tabThree").delay(1200).fadeIn(1);
          
          //Makes the burger not move
          $("#meatWrapper").delay(250).animate({"padding-left":meatFinal}, 1000);
     })
})
