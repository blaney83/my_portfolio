import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'

const styles = {
    thirdPage : {
        position: "relative",
        height: "100vh",
        width: "50vw",
        backgroundColor: "aqua",
        zIndex: "1"
    },
    thirdContainer : {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
    },
    thirdEmptyHalf : {
        position: "relative",
        height: "100vh",
        width: "50vw",
    }
}

function Page3(props){
    const { classes } = props;

    return(
        <div className={classes.thirdContainer}>
        <div className={classes.thirdEmptyHalf}></div>
        <div className={classes.thirdPage}>
            Hello World
        </div>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page3))