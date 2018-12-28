import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import Button from '@material-ui/core/Button';
import bgImage from "../../assets/img/forest.jpg"
import Typography from '@material-ui/core/Typography';
import bgImage1 from "../../assets/img/rainy.jpg"
import bgImage2 from "../../assets/img/bg4.jpg"
import bgImage3 from "../../assets/img/bg5.jpg"
import GraphTabs from "../GraphTabs/GraphTabs.js"


const styles = theme => ({
    fifthContainer: {
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
        backgroundImage: "url('" + bgImage3 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    fifthPage: {
        position: "absolute",
        height: "100vh",
        width: "33vw",
        top: "0px",
        left: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage3 + "')",
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: '100vh',
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
    },
    fifthEmptyHalf: {
        position: "absolute",
        height: "60vh",
        width: "67vw",
        top: "0px",
        left: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage1 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
    },
    fifthEmpty1Half: {
        position: "absolute",
        height: "100vh",
        width: "0vw",
        bottom: "0px",
        left: "25vw",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage3 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    fifthEmpty2Half: {
        position: "absolute",
        height: "40vh",
        width: "67vw",
        bottom: "0px",
        right: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage3 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    resourcesContainer: {
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
    resourcesHeader: {
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


function Page5(props) {
    const { classes } = props;

    return (
        <div className={classes.fifthContainer}>
            {/* <div className={classes.fifthPage} /> */}
            <div className={classes.fifthEmptyHalf} />
            {/* <div className={classes.fifthEmpty1Half} /> */}
            {/* <div className={classes.fifthEmpty2Half} /> */}
            <div className={classes.resourcesContainer}>
                <Typography variant="h2" className={classes.resourcesHeader}>Contact</Typography>
                {/* <GraphTabs></GraphTabs> */}
            </div>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page5))