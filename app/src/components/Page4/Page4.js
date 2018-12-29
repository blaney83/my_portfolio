import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import bgImage from "../../assets/img/forest.jpg"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import bgImage1 from "../../assets/img/bg6.jpg"
import bgImage2 from "../../assets/img/bg4.jpg"
import bgImage3 from "../../assets/img/leaves.jpg"
import Coverflow from "react-coverflow"
import ScrollableAnchor from 'react-scrollable-anchor'
import "./style.css"

const styles = theme => ({
    fourthContainer: {
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        zIndex: "1",
    },
    fourthPage: {
        position: "absolute",
        height: "100vh",
        width: "25vw",
        top: "0px",
        left: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage + "')",
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: '100vh',
        backgroundSize: 'cover',
        // backgroundAttachment: "fixed",
    },
    fourthEmptyHalf: {
        position: "absolute",
        height: "50vh",
        width: "50vw",
        top: "0px",
        right: "0px",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage1 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
    },
    fourthEmpty1Half: {
        position: "absolute",
        height: "100vh",
        width: "26vw",
        bottom: "0px",
        left: "25vw",
        zIndex: "-1",
        backgroundImage: "url('" + bgImage2 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    fourthEmpty2Half: {
        position: "absolute",
        height: "50vh",
        width: "50vw",
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
        marginTop: "-10px",
        [theme.breakpoints.up('sm')]: {
            fontSize: "4rem",
            // marginBottom: "0px"
        },
        fontFamily: "monospace",
        fontVariant: "ordinal",
        fontWeight: "bold",
        // marginBottom: "2rem"
    },
    scrollContainer: {
    },
    slideTile: {
    },
    mainCard: {
        backgroundColor: "#131313bd",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderRadius: "3px",
        padding: "1.5rem",
    },
    cardHeader: {
        padding: "0px !important"
        // backgroundColor: ""
    },
    slideListItem: {
        fontSize: ".5rem",
        color: "white"
    },
    flowContainer:{
        width: "100%",
        height: "90%"
    },
    headerContainer: {
        height: "10%"
    }
})


function Page4(props) {
    const { classes } = props;

    return (
        <ScrollableAnchor id={'resources'}>
        <div className={classes.fourthContainer}>
            <div className={classes.fourthPage} />
            <div className={classes.fourthEmptyHalf} />
            <div className={classes.fourthEmpty1Half} />
            <div className={classes.fourthEmpty2Half} />
            <div className={classes.resourcesContainer}>
                <div className={classes.headerContainer}>
                <Typography variant="h2" className={classes.resourcesHeader}>Resources</Typography>
                </div>
                <div className={classes.flowContainer}>

                    <Coverflow
                        displayQuantityOfSide={1}
                        navigation={true}
                        enableScroll={false}
                        clickable={true}
                        infiniteScroll={true}
                        currentFigureScale={1.4}
                        otherFigureScale={.8}
                        active={0}
                        // height={"100%"}
                    >
                        <img src={bgImage2} alt={
                            <div>
                                <Grid container spacing={16}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="body" className={classes.slideTile}>Docs</Typography>
                                        <div >
                                            <List dense={true}>
                                                <ListItem button={true}>
                                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- Mozilla JS Docs</Typography></a>
                                                </ListItem>
                                                <ListItem button={true}>
                                                    <a href="https://reactjs.org/docs/getting-started.html" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- React</Typography></a>
                                                </ListItem>
                                                <ListItem button={true}>
                                                    <a href="https://redux.js.org/" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- Redux</Typography></a>
                                                </ListItem>
                                                <ListItem button={true}>
                                                    <a href="https://www.w3schools.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- W3</Typography></a>
                                                </ListItem>
                                                <ListItem button={true}>
                                                    <a href="https://www.w3schools.com/jsref/jsref_obj_array.asp" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- W3 Array Methods (deserves its own plug)</Typography></a>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        }
                        />
                        <img src={bgImage2} alt={
                            <div>
                                <Grid container spacing={16}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="body" className={classes.slideTile}>Media</Typography>
                                        <div >
                                            <List dense={true}>
                                                <ListItem button={true}>
                                                    <a href="https://syntax.fm/" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- Syntax (Podcast)</Typography></a>
                                                </ListItem>
                                                <ListItem button={true}>
                                                    <a href="https://darknetdiaries.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- darknetdiaries  (Podcast)</Typography></a>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        }
                        />
                        <img src={bgImage2} alt={
                            <div>
                                <Grid container spacing={16}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="body" className={classes.slideTile}>Frameworks</Typography>
                                        <div >
                                            <List dense={true}>
                                                <ListItem button={true}>
                                                    <a href="https://material-ui.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- Material UI (React)</Typography></a>
                                                </ListItem>
                                                <ListItem button={true}>
                                                    <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- Bootstrap (HTML/CSS)</Typography></a>
                                                </ListItem>
                                                <ListItem button={true}>
                                                    <a href="https://bulma.io/" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- Bulma (HTML/CSS)</Typography></a>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        } />
                        <img src={bgImage2} alt={
                            <div>
                                <Grid container spacing={16}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="body" className={classes.slideTile}>Visual</Typography>
                                        <div className={classes.demo}>
                                            <List dense={true}>
                                                <ListItem button={true}>
                                                    <a href="https://unsplash.com/" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- Unsplash (Images)</Typography></a>
                                                </ListItem>
                                                <ListItem button={true}>
                                                    <a href="https://gionkunz.github.io/chartist-js/api-documentation.html" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- Chartist (Graphs)</Typography></a>
                                                </ListItem>
                                                <ListItem button={true}>
                                                    <a href="https://trianglify.io/" rel="noopener noreferrer" target="_blank"><Typography variant="body" className={classes.slideListItem}>- Trianglify (Geometric Backgrounds)</Typography></a>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        }
                        />
                    </Coverflow>,
                    </div>
            </div>
        </div>
        </ScrollableAnchor>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Page4))