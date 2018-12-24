import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'

const styles = {
    fourthPage : {
        position: "relative",
        height: "100vh",
        width: "50vw",
        backgroundColor: "aqua",
        zIndex: "1"
    },
    fourthContainer : {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
    },
    fourthEmptyHalf : {
        position: "relative",
        height: "100vh",
        width: "50vw",
    }
}

function Page4(props){
    const { classes } = props;

    return(
        <div className={classes.fourthContainer}>
        <div className={classes.fourthPage}>
            Hello World
        </div>
        <div className={classes.fourthEmptyHalf}></div>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page4))