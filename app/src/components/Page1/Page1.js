import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'

const styles = {
    firstPage : {
        height: "100vh",
        width: "100vw",
        backgroundColor: "aqua",
        zIndex: "1"
    }
}

function Page1(props) {
    const { classes } = props;

    return (
        <div className={classes.firstPage}>
            Hello World
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page1))