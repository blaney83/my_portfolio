import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import bgImage from "../../assets/img/page1BG.jpg"

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