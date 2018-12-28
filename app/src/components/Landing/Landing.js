import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import bgImage from "../../assets/img/stars.jpg"



const styles = theme => ({
    landingPage: {
        height: "33vh",
        width: "100vw",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPositionY: "-30px",
        backgroundPositionX: "center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        zIndex: "-1",
        pointerEvents: "auto"
    },
    mainTitle: {
        background: "inherit",
        "-webkit-background-clip": "text",
        backgroundClip: "text",
        color: "transparent",
        font: "900 35vmin/50vh cookie, cursive",
        textAlign: "center",
        filter: "invert(1)",
        paddingTop: "30px",
        fontFamily: "unset !important",
        fontSize: "3.5rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "5rem",

        },
        [theme.breakpoints.up('md')]: {
            fontSize: "8rem",

        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "11rem",

        },
    },
    mainSubTitle: {
        color: "#a7a7a7",
        mixBlendMode: "difference",
        fontFamily: "unset !important",
    },
})

function Landing(props) {
    const { classes } = props;
    return (
        <div className={classes.landingPage} id="landingPage">
            <Typography variant="h2" className={classes.mainTitle}>Ben Laney</Typography>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Landing))