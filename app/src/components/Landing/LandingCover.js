import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import "./style.css"
import injectSheet from 'react-jss'

const styles = {
    landingCover: {
        height: "50vh",
        width: "100vw",
        zIndex: "-10",
        pointerEvents: "none"
    }
}

function LandingCover(props) {
    const { classes } = props;

    return (
            <div className={classes.landingCover}>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(LandingCover))