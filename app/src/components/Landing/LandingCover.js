import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import "./style.css"
import injectSheet from 'react-jss'

const styles = {
    landingCover: {
        height: "33vh",
        width: "100vw",
        zIndex: "-10",
        pointerEvents: "none"
    },
    titleName: {
        font: "1.5rem",
        color: "grey",
        margin: "0 !important"
    }
}

function LandingCover(props) {
    const { classes } = props;

    return (
        <div className={classes.landingCover}>
            <h1 className={classes.titleName}>Ben Laney</h1>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(LandingCover))