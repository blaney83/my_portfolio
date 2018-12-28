import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import Button from '@material-ui/core/Button';
import bgImage from "../../assets/img/page2BG.jpg"
import bgImage1 from "../../assets/img/trianglify.png"


const styles = {
    secondPage : {
        position: "relative",
        height: "100vh",
        width: "50vw",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
        zIndex: "1"
    },
    secondContainer : {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
    },
    secondEmptyHalf : {
        position: "relative",
        height: "100vh",
        width: "50vw",
        backgroundImage: "url('" + bgImage1 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }
}

function Page2(props){
    const { classes } = props;

    return(
        <div className={classes.secondContainer}>
        <div className={classes.secondPage}>
            Hello World
            <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
        </div>
        <div className={classes.secondEmptyHalf}></div>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page2))