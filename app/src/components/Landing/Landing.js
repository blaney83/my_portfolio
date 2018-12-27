import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import bgImage from "../../assets/img/stars.jpg"

const styles = {
    landingPage: {
        // position: "fixed",
        height: "33vh",
        width: "100vw",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
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
        <div className={classes.landingPage} id="landingPage">
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Landing))