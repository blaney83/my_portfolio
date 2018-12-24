import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import "./style.css"
import injectSheet from 'react-jss'

const styles = {
    landingPage: {
        position: "fixed",
        height: "50vh",
        width: "100vw",
        backgroundColor: "pink",
        zIndex: "-1",
        pointerEvents: "auto"
    }
}

function Landing(props) {
    const { classes } = props;

    function logMe(e) {
        console.log(e)
    }

    return (
        <div className={"landingPage"}>
            Hello World<button onClick={logMe}>click me</button>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Landing))