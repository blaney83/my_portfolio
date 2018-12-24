import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import "./style.css"
import injectSheet from 'react-jss'

const styles = {

}

function Page1(props) {
    const { classes } = props;
    const [textColor, setTextColor] = useState(classes.Hello);

    function handleScroll(){
        // console.log(window.visualViewport.height)
        // console.log(window.scrollY)
        // console.log(window.visualViewport.width)
        let oneTall = window.visualViewport.height
        let oneWide = window.visualViewport.width
        if(window.scrollY < oneTall/2){
            console.log("click")
            document.getElementsByClassName("landingPage")[0].style.display = "block"
            document.getElementsByClassName("background2")[0].style.display = "none"            

            // document.getElementsByClassName("background1")[0].style.zIndex = "-1"
        }else if (window.scrollY >= oneTall/2 && window.scrollY < oneTall + oneTall/2){  
            console.log("clack")
            document.getElementsByClassName("landingPage")[0].style.display = "none" 
            document.getElementsByClassName("background2")[0].style.display = "block"            
            document.getElementsByClassName("background1")[0].style.display = "block" 
            document.getElementsByClassName("background3")[0].style.display = "none" 

            // document.getElementsByClassName("background2")[0].style.zIndex = "-3"            
        }else if(window.scrollY >= oneTall + oneTall/2 && window.scrollY < oneTall * 2  + oneTall/2){
            console.log("boom")
            document.getElementsByClassName("background1")[0].style.display = "block" 
            document.getElementsByClassName("background2")[0].style.display = "block"  
            document.getElementsByClassName("background3")[0].style.display = "none" 
            // document.getElementsByClassName("background2")[0].style.zIndex = "-1"            
        }else if(window.scrollY >= oneTall * 2 + oneTall/2 && window.scrollY < oneTall * 3 + oneTall/2){
            console.log("boom")
            document.getElementsByClassName("background1")[0].style.display = "block" 
            document.getElementsByClassName("background2")[0].style.display = "none"  
            document.getElementsByClassName("background3")[0].style.display = "block" 
            // document.getElementsByClassName("background2")[0].style.zIndex = "-1"            
        }
    }
    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", ()=>handleScroll())
      });
    return (
        <div className="firstPage">
            Hello World
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page1))