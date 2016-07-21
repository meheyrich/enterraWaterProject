/* Loading Ubuntu font */
@import 'https://fonts.googleapis.com/css?family=Ubuntu';

body {
     margin: 0;
}

/* Whole Navigation Bar thingy */
#navBar {
     width: 100%;
     height: 120px;
     background-color: #60112D;
}

/* Div Housing the logoPic */
#logoDiv {
     padding-top: 7px;
     padding-left: 20px;
     padding-right: 20px;
     display: inline-block;
}

#logoPic {
     height: 100px;
     width: auto;
}

/* Div housing the productName */
#productNameDiv {
     display: inline-block;
     height: 120px;
     position: absolute;
}

#productName {
     display: inline-block;
     color: white;
     text-align: center;

     /*Centering Vertically*/
     position: relative;
     top: 50%;
     transform: translateY(-50%);

     /* Stylizing the font */
     font-family: 'Ubuntu', sans-serif;
     font-size: 45px;
}

/* Outlined border thing */
#hamburgerWrapper {
     width: 60px;
     height: 60px;
     border: 6px solid white;
     border-radius: 20px;
     display: inline-block;

     /* Aligns the div to the right */
     position: absolute;
     right: 20px;

     top: 23px;
}

/* Meat House */
#meatWrapper {
     padding-top: 8px;
}

/* The meat */
.insideHamburger {
     width: 40px;
     height: 8px;
     background-color: white;
     border-radius: 5px;

     /*Aligning within div*/
     margin: auto;
     margin-top: 5px;
}

/*
.tab {
     width: 100px;
     height: 87px;
     background-color: green;
     display: inline-block;
}

#tabTwo {
     margin-left: 5px;
}

#tabThree {
     margin-left: 5px;
}
*/
