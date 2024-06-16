//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let secondsRigth, secondsLeft, minutesRigth,minutesLeft, hoursRigth, hoursLeft;
secondsRigth = secondsLeft = minutesRigth = minutesLeft = hoursRigth = hoursLeft = 0;


setInterval(() => {
    if(secondsRigth == 9){
        secondsRigth = 0
        secondsLeft++
    }
    if(secondsLeft == 6){
        secondsLeft = 0
        minutesRigth++
    }
    if(minutesRigth == 9){
        minutesRigth = 0
        minutesLeft++
    }
    if(minutesLeft == 6){
        minutesLeft = 0
        hoursRigth++
    }
    
    if(hoursRigth == 9){
        hoursRigth = 0
        hoursLeft++
    }
    if(hoursLeft == 2 && hoursRigth == 4 ){
        secondsRigth = secondsLeft = minutesRigth = minutesLeft = hoursRigth = hoursLeft = 0;
    }
    
    //render your react application
    ReactDOM.render(<SecondsCounter 
        secondsRigth={secondsRigth}
        secondsLeft={secondsLeft}
        minutesRigth={minutesRigth}
        minutesLeft={minutesLeft}
        hoursRigth={hoursRigth}
        hoursleft={hoursLeft}
        
        />, document.querySelector("#app"));
    secondsRigth++
}, 1000);



