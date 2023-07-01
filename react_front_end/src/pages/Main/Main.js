//
import React from 'react';
const Main = () =>{

    let mediaQuery = window.matchMedia('(max-width: 1600px)');
    console.log(mediaQuery);
    if(mediaQuery.matches){
        return(
            <div id="FromAndTo">
                <div class = "box-wrapper">
                출발지 :&nbsp;<input type="text" id="fromdrection"/>
                </div>
                <div class = "box-wrapper">
                도착지 :&nbsp;<input type="text" id="todrection"/>
                </div>
            </div>
        )
    }else{
        return(
            <div id="FromAndTo">
                <div class = "box-wrapper">
                출발지 :&nbsp;<input type="text" id="fromdrection"/>
                </div>
                <div class = "box-wrapper">
                도착지 :&nbsp;<input type="text" id="todrection"/>
                </div>
                <div id="loginAndSignup">
                    <button id="login">Login</button><button id="signup">Sign Up</button>
                </div>
            </div>
        )
    }
    
}


export default Main; 