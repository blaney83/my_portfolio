import React, { useEffect, useState } from "react"
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import Home from "../../assets/icons/Home"
import Coding from "../../assets/icons/Coding"
import Contact from "../../assets/icons/Contact"
import PageDown from "../../assets/icons/PageDown"
import PageUp from "../../assets/icons/PageUp"
import Portfolio from "../../assets/icons/Portfolio"
import Profile from "../../assets/icons/Profile"
import Resources from "../../assets/icons/Resources"
import ToBottom from "../../assets/icons/ToBottom"
import ToTop from "../../assets/icons/ToTop"
import bgImage from "../../assets/img/page2BG.jpg"
setConfiguration({ gridColumns: 20 });

const styles = {
    breadCrumbContainer: {
        position: "fixed",
        marginTop: "33vh !important",
        marginBottom: "33vh !important",
        height: "33vh !important",
        width: "5vw ! important",
        padding: "0 !important",
        boxSizing: "none !important",
        right: "0",
        backgroundColor: "#424242d1",
        zIndex: "10"
    },
    breadCrumbRow: {
        flexDirection: "column",
        color: "white"
    },
    sideIcons: {
        color: "white",
        size: ".9rem"
    },
    hiddenClass: {
        display: "none"
    },
    shownClass: {
        display: "block"
    }
}


function Breadcrumb(props) {
    const { classes } = props;
    const [homeHD, setHomeHD] = useState(classes.hiddenClass)
    const [topHD, setTopHD] = useState(classes.hiddenClass)
    const [upHD, setUpHD] = useState(classes.hiddenClass)
    const [aboutMeHD, setAboutMeHD] = useState(classes.hiddenClass)
    const [codingBreakdownHD, setCodingBreakdownHD] = useState(classes.hiddenClass)
    const [portfolioHD, setPortfolioHD] = useState(classes.hiddenClass)
    const [resourcesHD, setResourcesHD] = useState(classes.hiddenClass)
    const [contactHD, setContactHD] = useState(classes.hiddenClass)
    const [downHD, setDownHD] = useState(classes.hiddenClass)
    const [bottomHD, setBottomHD] = useState(classes.hiddenClass)
    const [bcTracker, setBCTracker] = useState(0)

    let oneTall = window.visualViewport.height

    function breadScroll() {
        if (window.scrollY < oneTall / 3) {
            toggleClass("initial")
            setBCTracker(1)
        } else if (window.scrollY > oneTall / 3 - .2) {
            toggleClass("scrolling")
            setBCTracker(0)
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        let timeToSnap
        window.addEventListener("scroll", () => {
            clearTimeout(timeToSnap)
            timeToSnap = setTimeout(() => snappyScroll(), 200)
            breadScroll()
        })
    });

    function snappyScroll(direction) {
        let scrollNumber = window.scrollY / oneTall
        let pageNumber = Math.floor(window.scrollY / oneTall - .33)
        let instanceRemainder = (window.scrollY / oneTall - .33)
        let scrollRemainder = instanceRemainder - pageNumber
        if (instanceRemainder < -.02) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (scrollRemainder > .001 && scrollRemainder < .999) {
            window.scrollTo({
                top: oneTall * (parseInt(scrollNumber)) + oneTall / 3,
                behavior: 'smooth'
            });
        }
    }

    function navScroll(e) {
        let scrollNumber = window.scrollY / oneTall
        if (e.target.querySelector("h5") !== null) {
            switch (e.target.querySelector("h5").innerHTML) {
                case ("Home"):
                    window.scrollTo({
                        top: oneTall / 3,
                        // left: 100,
                        behavior: 'smooth'
                    });
                    return
                case ("Top"):
                    window.scrollTo({
                        top: 0,
                        // left: 100,
                        behavior: 'smooth'
                    });
                    return
                case ("Up"):
                    if (scrollNumber * 10 < 5) {
                        window.scrollTo({
                            top: 0,
                            // left: 100,
                            behavior: 'smooth'
                        });
                    } else {
                        window.scrollTo({
                            top: oneTall * (parseInt(scrollNumber) - 1) + oneTall / 3,
                            // left: 100,
                            behavior: 'smooth'
                        });
                    }
                    return
                case ("About Me"):
                    window.scrollTo({
                        top: oneTall * 1 + oneTall / 3,
                        // left: 100,
                        behavior: 'smooth'
                    });
                    return
                case ("Coding Breakdown"):
                    window.scrollTo({
                        top: oneTall * 2 + oneTall / 3,
                        // left: 100,
                        behavior: 'smooth'
                    });
                    return
                case ("Portfolio"):
                    window.scrollTo({
                        top: oneTall * 3 + oneTall / 3,
                        // left: 100,
                        behavior: 'smooth'
                    });
                    return
                case ("Resources"):
                    window.scrollTo({
                        top: oneTall * 4 + oneTall / 3,
                        // left: 100,
                        behavior: 'smooth'
                    });
                    return
                case ("Contact"):
                    window.scrollTo({
                        top: oneTall * 5 + oneTall / 3,
                        // left: 100,
                        behavior: 'smooth'
                    });
                    return
                case ("Down"):
                    if (scrollNumber * 10 < 5) {
                        window.scrollTo({
                            top: oneTall / 3,
                            // left: 100,
                            behavior: 'smooth'
                        });
                    } else {
                        window.scrollTo({
                            top: oneTall * (parseInt(scrollNumber) + 1) + oneTall / 3,
                            // left: 100,
                            behavior: 'smooth'
                        });
                    }
                    return
                case ("Bottom"):
                    window.scrollTo({
                        bottom: 0,
                        // left: 100,
                        behavior: 'smooth'
                    });
                    return
                default:
                    return
            }
        }
    }


    function toggleClass(e) {
        if (e === "initial") {
            setHomeHD(classes.shownClass)
            setTopHD(classes.shownClass)
            setUpHD(classes.shownClass)
            setAboutMeHD(classes.shownClass)
            setCodingBreakdownHD(classes.shownClass)
            setPortfolioHD(classes.shownClass)
            setResourcesHD(classes.shownClass)
            setContactHD(classes.shownClass)
            setDownHD(classes.shownClass)
            setBottomHD(classes.shownClass)
        } else if (e === "scrolling") {
            setHomeHD(classes.hiddenClass)
            setTopHD(classes.hiddenClass)
            setUpHD(classes.hiddenClass)
            setAboutMeHD(classes.hiddenClass)
            setCodingBreakdownHD(classes.hiddenClass)
            setPortfolioHD(classes.hiddenClass)
            setResourcesHD(classes.hiddenClass)
            setContactHD(classes.hiddenClass)
            setDownHD(classes.hiddenClass)
            setBottomHD(classes.hiddenClass)
        }
        else {
            if (e.target.querySelector("h5") !== null) {
                if (e.type === "mouseenter") {
                    switch (e.target.querySelector("h5").innerHTML) {
                        case ("Home"):
                            setHomeHD(classes.shownClass)
                            return
                        case ("Top"):
                            setTopHD(classes.shownClass)
                            return
                        case ("Up"):
                            setUpHD(classes.shownClass)
                            return
                        case ("About Me"):
                            setAboutMeHD(classes.shownClass)
                            return
                        case ("Coding Breakdown"):
                            setCodingBreakdownHD(classes.shownClass)
                            return
                        case ("Portfolio"):
                            setPortfolioHD(classes.shownClass)
                            return
                        case ("Resources"):
                            setResourcesHD(classes.shownClass)
                            return
                        case ("Contact"):
                            setContactHD(classes.shownClass)
                            return
                        case ("Down"):
                            setDownHD(classes.shownClass)
                            return
                        case ("Bottom"):
                            setBottomHD(classes.shownClass)
                            return
                        default:
                            return
                    }
                } else if (e.type === "mouseleave") {
                    switch (e.target.querySelector("h5").innerHTML) {
                        case ("Home"):
                            setHomeHD(classes.hiddenClass)
                            return
                        case ("Top"):
                            setTopHD(classes.hiddenClass)
                            return
                        case ("Up"):
                            setUpHD(classes.hiddenClass)
                            return
                        case ("About Me"):
                            setAboutMeHD(classes.hiddenClass)
                            return
                        case ("Coding Breakdown"):
                            setCodingBreakdownHD(classes.hiddenClass)
                            return
                        case ("Portfolio"):
                            setPortfolioHD(classes.hiddenClass)
                            return
                        case ("Resources"):
                            setResourcesHD(classes.hiddenClass)
                            return
                        case ("Contact"):
                            setContactHD(classes.hiddenClass)
                            return
                        case ("Down"):
                            setDownHD(classes.hiddenClass)
                            return
                        case ("Bottom"):
                            setBottomHD(classes.hiddenClass)
                            return
                        default:
                            return
                    }
                }
            }
        }
    }

    return (

        <div className={classes.breadCrumbContainer}>
            <Container>
                <Row className={classes.breadCrumbRow}>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><ToTop className={classes.sideIcons} /><h5 className={topHD}>Top</h5></Col>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><PageUp className={classes.sideIcons} /><h5 className={upHD}>Up</h5></Col>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><Home className={classes.sideIcons} /><h5 className={homeHD}>Home</h5></Col>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><Profile className={classes.sideIcons} /><h5 className={aboutMeHD}>About Me</h5></Col>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><Coding className={classes.sideIcons} /><h5 className={codingBreakdownHD}>Coding Breakdown</h5></Col>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><Portfolio className={classes.sideIcons} /><h5 className={portfolioHD}>Portfolio</h5></Col>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><Resources className={classes.sideIcons} /><h5 className={resourcesHD}>Resources</h5></Col>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><Contact className={classes.sideIcons} /><h5 className={contactHD}>Contact</h5></Col>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><PageDown className={classes.sideIcons} /><h5 className={downHD}>Down</h5></Col>
                    <Col xs={2} onMouseEnter={(e) => toggleClass(e)} onMouseLeave={(e) => toggleClass(e)} onClick={(e) => navScroll(e)}><ToBottom className={classes.sideIcons} /><h5 className={bottomHD}>Bottom</h5></Col>
                </Row>
            </Container>
        </div>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Breadcrumb))