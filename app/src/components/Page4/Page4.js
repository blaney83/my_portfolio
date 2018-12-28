import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import Button from '@material-ui/core/Button';
import bgImage from "../../assets/img/bg5.jpg"
import Typography from '@material-ui/core/Typography';
import bgImage1 from "../../assets/img/bg6.jpg"
import GraphTabs from "../GraphTabs/GraphTabs.js"


const styles = theme => ({
    secondContainer: {
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
    },
    secondPage: {
        position: "absolute",
        height: "100vh",
        width: "50vw",
        top: "0px",
        left: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
    },
    secondEmptyHalf: {
        position: "absolute",
        height: "100vh",
        width: "50vw",
        top: "0px",
        right: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage1 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    graphTabsContainer: {
        boxSizing: "border-box",
        padding: "8px",
        [theme.breakpoints.up('sm')]: {
            paddingLeft: "72px",
            paddingRight: "72px",
        },
        width: "100%",
        height: "100%",
        paddingTop: "30px",
    },
    graphTabsHeader: {
        backgroundImage: "url('" + bgImage1 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        "-webkit-background-clip": "text",
        backgroundClip: "text",
        color: "transparent",
        textAlign: "center",
        filter: "invert(1) grayscale(1) contrast(9)",
        fontSize: "3rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "4rem",
        },
        fontFamily: "monospace",
        fontVariant: "ordinal",
        fontWeight: "bold",
        marginBottom: "2rem"
    },
})


function Page2(props) {
    const { classes } = props;

    return (
        <div className={classes.secondContainer}>
            <div className={classes.secondPage} />
            <div className={classes.secondEmptyHalf} />
            <div className={classes.graphTabsContainer}>
                <Typography variant="h2" className={classes.graphTabsHeader}>Resources/References</Typography>
                {/* <GraphTabs></GraphTabs> */}
            </div>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page2))