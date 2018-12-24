import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import "./style.css"
import injectSheet from 'react-jss'

const styles = {

}

function Page1(props) {
    const { classes } = props;
    console.log(useState)
    const [textColor, setTextColor] = useState(classes.Hello);

    function handleScroll(){
        if(window.scrollY < 800){
            document.getElementsByClassName("background1")[0].style.zIndex = "-1"
        }else if (window.scrollY > 800 && window.scrollY < 1000){  
            document.getElementsByClassName("background2")[0].style.zIndex = "-3"            
        }else{
            document.getElementsByClassName("background2")[0].style.zIndex = "-1"            
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