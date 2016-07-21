$(document).ready(function() {
     $("#hamburgerWrapper").click(function() {
          //Tab variables
          var tabNumber = 4;
          var tabWidth = 200;
          var tabFinal = tabNumber*tabWidth + "px";
          var meatFinal = (tabNumber*tabWidth) - 60 + "px";

          //Animates height of border
          $(this).animate({height : "87px",
                           top: "10px"});
          //Centers the hamburger
          $("#meatWrapper").animate({"padding-top":"21px"});

          //Animates the width of the border
          $(this).delay(250).animate({width: tabFinal}, 1000);

          //Makes the burger not move
          $("#meatWrapper").delay(250).animate({"padding-left":meatFinal}, 1000);

          $("#tabReference").append("<div class = 'tab' id = 'tabOne'></div>");
          $("#tabReference").append("<div class = 'tab' id = 'tabTwo'></div>");
          $("#tabReference").append("<div class = 'tab' id = 'tabThree'></div>");
     })
})
