import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import Particles from "react-particles-js"
import injectSheet from 'react-jss'
import bgImage from "../../assets/img/page1BG.jpg"
const PartParams = require("./particles.json")

const styles = {
    firstPage : {
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        zIndex: "1"
    },
    particleDiv: {
        height: "100vh",
        width: "100vw",
    }
}

function Page1(props) {
    const { classes } = props;

    return (
        <div className={classes.firstPage}>
            Hello World
            <Particles
            className={classes.particleDiv}
            params={PartParams}
            />
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page1))