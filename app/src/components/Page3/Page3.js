import React, { useState } from "react"
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import bgImage from "../../assets/img/page3BG.jpg"
import bgImage1 from "../../assets/img/trianglify.png"
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Portfolio from "../Portfolio/Portfolio.js"
import Left from '@material-ui/icons/KeyboardArrowLeft';
import Right from '@material-ui/icons/KeyboardArrowRight';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import green from '@material-ui/core/colors/green';
import ScrollableAnchor from 'react-scrollable-anchor'


const styles = theme => ({
    thirdContainer: {
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
    },
    thirdPage: {
        position: "absolute",
        height: "100vh",
        width: "50vw",
        top: "0px",
        left: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage1 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
    },
    thirdEmptyHalf: {
        position: "absolute",
        height: "100vh",
        width: "50vw",
        top: "0px",
        right: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    portfolioContainer: {
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
    portfolioHeader: {
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
            marginBottom: "1rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "5rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "8rem",
            // marginBottom: "0px"
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "10rem",
            // marginBottom: "0px"
        },
        fontFamily: "monospace",
        fontVariant: "ordinal",
        fontWeight: "bold",
        // marginBottom: "2rem"
    },
    portfolioGridListContainer: {
        // padding: "30px",
        paddingLeft: "3px",
        paddingRight: "3px",
        [theme.breakpoints.up('sm')]: {
            paddingLeft: "30px",
            paddingRight: "33px",
        },
        // paddingBottom: "30px",
        borderRadius: "3px",
        backgroundColor: "#81848399"
    },
    // root: {
    //     backgroundColor: theme.palette.background.paper,
    //     width: 500,
    //     position: 'relative',
    //     minHeight: 200,
    // },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
    },
    portfolioTabBar: {
        backgroundColor: "transparent",
        boxShadow: "none !important"
    },
    portfolioTabs: {
        color: "#000000e3"
    },
    leftIcon: {
        fontSize: "2rem",
        marginRight: "1rem"
    },
    rightIcon: {
        fontSize: "2rem",
        marginLeft: "1rem"
    }
})


function Page3(props) {
    const { classes } = props;
    const [portfolioSort, setPortfolioSort] = useState(0)
    let mousedownIDL = -1;
    let mousedownIDR = -1;
    function scrollPortfolioLeft(x) {
        let currentPosition = document.getElementById("portfolioTarget").scrollLeft
        document.getElementById("portfolioTarget").scroll({
            left: currentPosition.scrollLeft - 200,
            behavior: 'smooth'
        })
    }
    function scrollPortfolioRight(x) {
        let currentPosition = document.getElementById("portfolioTarget")
        currentPosition.scroll({
            left: currentPosition.scrollLeft + 200,
            behavior: 'smooth'
        })
    }
    function mousedownL(event) {
        if (mousedownIDL === -1)  //Prevent multimple loops!
            mousedownIDL = setInterval(whilemousedownL, 300 /*execute every 100ms*/);
    }
    function mouseupL(event) {
        if (mousedownIDL !== -1) {  //Only stop if exists
            clearInterval(mousedownIDL);
            mousedownIDL = -1;
        }
    }
    function whilemousedownL() {
        scrollPortfolioLeft()
    }
    function mousedownR(event) {
        if (mousedownIDR === -1)  //Prevent multimple loops!
            mousedownIDR = setInterval(whilemousedownR, 300 /*execute every 100ms*/);
    }
    function mouseupR(event) {
        if (mousedownIDR !== -1) {  //Only stop if exists
            clearInterval(mousedownIDR);
            mousedownIDR = -1;
        }
    }
    function whilemousedownR() {
        scrollPortfolioRight()
    }






    return (
        <ScrollableAnchor id={'projects'}>
            <div className={classes.thirdContainer}>
                <div className={classes.thirdPage} />
                <div className={classes.thirdEmptyHalf} />
                <div className={classes.portfolioContainer}>
                    <Typography variant="h2" className={classes.portfolioHeader}>Project Anthology</Typography>
                    <div className={classes.portfolioGridListContainer}>
                        <AppBar position="static" color="default" className={classes.portfolioTabBar}>
                            <Tabs
                                value={portfolioSort}
                                // onChange={this.handleChange}
                                indicatorColor="primary"
                                // textColor="primary"
                                fullWidth
                                className={classes.portfolioTabs}
                            >
                                <Tab label="All" onClick={() => setPortfolioSort(0)} />
                                <Tab label="Polished" onClick={() => setPortfolioSort(1)} />
                                <Tab label="Practice" onClick={() => setPortfolioSort(2)} />
                            </Tabs>
                        </AppBar>
                        <Portfolio sort={portfolioSort} ></Portfolio>
                        <IconButton>
                            <Left className={classes.leftIcon} onClick={scrollPortfolioLeft} onMouseDown={mousedownL} onMouseUp={mouseupL} />
                        </IconButton>
                        <IconButton>
                            <Right className={classes.rightIcon} onClick={scrollPortfolioRight} onMouseDown={mousedownR} onMouseUp={mouseupR} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )

}

// function mapDispatchToProps(dispatch) {
// }

// function mapStateToProps(state) {

// }

export default connect(null, null)(withStyles(styles)(Page3))