$(document).ready(function() {

     //Make links unclickable
     $("#home").addClass("unclickable");
     $("#about").addClass("unclickable");
     $("#contact").addClass("unclickable");
     $("#account").addClass("unclickable");
     $("#homeSymbol").addClass("unclickable");
     $("#dropSymbol").addClass("unclickable");
     $("#contactSymbol").addClass("unclickable");
     $("#accountSymbol").addClass("unclickable");

     //button click function
     $("#menuBtn").click(function() {
          // Tab variables
          var tabNumber = 4
          if ( $(window).width() > 1250 ) {
               var tabWidth = 200;
          }
          else {
               var tabWidth = 125;
          }

          if ($("#hamburgerWrapper").width() == 60 && $("#hamburgerWrapper").height() == 60) {

               //Animates height of border
               $("#hamburgerWrapper").removeClass("wrapperStretchUpReverse").addClass("wrapperStretchUp");

               //Centers the hamburger
               $("#meatWrapper").removeClass("burgerHolderUpReverse").addClass("burgerHolderUp");

               //Animates the width of the border
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

               //Animates Text
               window.setTimeout(function(){$(".textHome").addClass("slide");
                                            $("#home").removeClass("unclickable");}, 950);
               window.setTimeout(function(){$(".textAbout").addClass("slide");
                                            $("#about").removeClass("unclickable");}, 750);
               window.setTimeout(function(){$(".textContact").addClass("slide");
                                            $("#contact").removeClass("unclickable");}, 650);
               window.setTimeout(function(){$(".textAccount").addClass("slide");
                                            $("#account").removeClass("unclickable");}, 500);

               //Animates Symbols for Mobile
               window.setTimeout(function(){$(".houseImg").addClass("slideSymbol");
                                            $("#homeSymbol").removeClass("unclickable");}, 500);
               window.setTimeout(function(){$(".dropImg").addClass("slideSymbol");
                                            $("#dropSymbol").removeClass("unclickable");}, 650);
               window.setTimeout(function(){$(".contactImg").addClass("slideSymbol");
                                            $("#contactSymbol").removeClass("unclickable");}, 750);
               window.setTimeout(function(){$(".accountImg").addClass("slideSymbol");
                                            $("#accountSymbol").removeClass("unclickable");}, 975);
          }

          else if( $("#hamburgerWrapper").width() == (tabNumber*tabWidth + 60) && $("#hamburgerWrapper").height() == 87 || $("#hamburgerWrapper").height() == (tabNumber*tabWidth + 60) && $("#hamburgerWrapper").width() == 87) {
               //Close the hamburgerWrapper
               $("#hamburgerWrapper").removeClass("wrapperStretchOut").addClass("wrapperStretchOutReverse");
               $("#meatWrapper").removeClass("burgerHolderLeft").addClass("burgerHolderLeftReverse");
               window.setTimeout(function(){$("#hamburgerWrapper").removeClass("wrapperStretchOutReverse").addClass("wrapperStretchUpReverse");}, 1250);
               window.setTimeout(function(){$("#meatWrapper").removeClass("burgerHolderLeftReverse").addClass("burgerHolderUpReverse");}, 1250);

               //tabs disapear
               window.setTimeout(function(){$("#tabZero").removeClass("showTab");}, 855);
               window.setTimeout(function(){$("#tabOne").removeClass("showTab");}, 450);
               window.setTimeout(function(){$("#tabTwo").removeClass("showTab");}, 250);
               window.setTimeout(function(){$("#tabThree").removeClass("showTab");}, 200);

               //re-hamburger-ize the menu
               $("#middleMeat").addClass("fadein").removeClass("fadeout");
               $("#bunOne").addClass("rotateReverseUp").removeClass("rotateUp");
               $("#bunTwo").addClass("rotateReverseDown").removeClass("rotateDown");

               //Animates Text
               window.setTimeout(function(){$(".textHome").removeClass("slide");
                                            $("#home").addClass("unclickable");}, 0);
               window.setTimeout(function(){$(".textAbout").removeClass("slide");
                                            $("#about").addClass("unclickable");}, 100);
               window.setTimeout(function(){$(".textContact").removeClass("slide");
                                            $("#contact").addClass("unclickable");}, 225);
               window.setTimeout(function(){$(".textAccount").removeClass("slide");
                                            $("#account").addClass("unclickable");}, 400);

               //Animates Symbols for Mobile
               window.setTimeout(function(){$(".houseImg").removeClass("slideSymbol");
                                            $("#homeSymbol").addClass("unclickable");}, 500);
               window.setTimeout(function(){$(".dropImg").removeClass("slideSymbol");
                                            $("#dropSymbol").addClass("unclickable");}, 300);
               window.setTimeout(function(){$(".contactImg").removeClass("slideSymbol");
                                            $("#contactSymbol").addClass("unclickable");}, 100);
               window.setTimeout(function(){$(".accountImg").removeClass("slideSymbol");
                                            $("#accountSymbol").addClass("unclickable");}, 0);
          }
     });

     //JSON requests to access data
     $.getJSON("/json/index.json", function(data) {
          console.log(data);
          var fillHeight = Math.floor((data.volumes.rain/14.5) * 100)
          console.log($("#raindropWrapper").height())
          $('#raindropFill').css("height",(data.volumes.rain/14.5) * 100 + "%");
          $('#percentRainFill').html(fillHeight + "%")
          $('#raindropFillOpposite').css("height", (100 - fillHeight) - 1 + "%")
          $('#percentRainFillOpposite').html(fillHeight + "%")
     })
});
