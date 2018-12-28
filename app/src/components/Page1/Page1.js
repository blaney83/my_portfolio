import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import Particles from "react-particles-js"
import injectSheet from 'react-jss'
import bgImage from "../../assets/img/page1BG.jpg"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { callbackify } from "util";
import { Avatar } from "@material-ui/core";
import Headshot from "../../assets/img/headshot.jpg"
const PartParams = require("./particles.json")

const styles = theme => ({
    root: {
        width: '100%',
    },
    firstPage: {
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('" + bgImage + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        zIndex: "-1",
        overflowX: "hidden"
    },
    particleDiv: {
        position: "absolute",
        height: "100vh",
        width: "100vw",
        top: "0px",
        left: "0px",
        zIndex: "-10",

    },
    cardHeader: {
        padding: "0px !important"
        // backgroundColor: ""
    },
    mainCard: {
        backgroundColor: "#131313bd",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderRadius: "3px",
        padding: "1.5rem",
    },
    firstPageCardContainer: {
        width: "100%",
        display: "initial",

    },
    firstPageMainContainer: {
        boxSizing: "border-box",
        padding: "8px",
        paddingTop: "30px",
        [theme.breakpoints.up('sm')]: {
            padding: "72px",
        },
        width: "100%",
        height: "100%",
    },
    avatarBubble: {
        width: "75%",
        [theme.breakpoints.up('sm')]: {
            width: "100%",
        },
        height: "auto",
        display: "inline-flex",
        position: "relative",
        // left: "10%",
        boxSizing: "border-box",
    },
    headerContainer: {
        paddingBottom: "5px",
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        borderBottomColor: "#665b47"
    },
    headerText: {
        color: "white !important",
        fontSize: "2.5rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "4rem",
        },
        fontFamily: "monospace",
        fontVariant: "ordinal",
        // textDecoration: "underline overline",
        fontWeight: "bold"
    },
    cardContent: {
        zIndex: "1"
    },
    toTheFront: {
        zIndex: "310"
    },
    heading : {
        color: "white"
    },
    secondaryHeading: {
        color: "white"
    },
    panelBody: {
        color: "white"
    },
    paperStyle: {
        backgroundColor: "#2e2a23"
    },
    expandIcon: {
        color: "white"
    }
})

// width: theme.spacing.unit * 7 + 1,
// [theme.breakpoints.up('sm')]: {
//     width: theme.spacing.unit * 9 + 1,
// },

function Page1(props) {
    const { classes } = props;
    const [expanded, setExpanded] = useState(null)

    function togglePanel(panel){
        if(panel === expanded){
            setExpanded(null)
        }else{
            setExpanded(panel)
        }
    }

    return (
        <div className={classes.firstPage}>
            <div className={classes.firstPageMainContainer}>
                <Grid container className={classes.firstPageCardContainer}>
                    <Grid item>
                        <Card className={classes.mainCard}>
                            <Grid container justify="flex-start" alignItems="flex-end" className={classes.headerContainer}>
                                <Grid item xs={12} sm={3}>
                                    <Avatar src={Headshot} className={classes.avatarBubble} />
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <CardHeader
                                        className={classes.cardHeader}
                                        titleTypographyProps={{
                                            variant: "h3",
                                            align: "left",
                                            classes: {
                                                h3: classes.headerText
                                            }
                                        }}
                                        title="About Me"
                                    />
                                </Grid>
                            </Grid>
                            <CardContent className={classes.cardContent}>
                                <div className={classes.root}>
                                    <ExpansionPanel expanded={expanded === "panel1"} className={classes.paperStyle} >
                                        <ExpansionPanelSummary onClick={() => togglePanel("panel1")} expandIcon={<ExpandMoreIcon className={classes.expandIcons} color="secondary"/>}>
                                            <Typography className={classes.heading}>Early Life</Typography>
                                            <Typography className={classes.secondaryHeading}>
                                            {/* I am an expansion panel */}
                                            </Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography className={classes.panelBody}>
                                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                                maximus est, id dignissim quam.
                                        </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    {/* </div> */}
                                    <ExpansionPanel expanded={expanded === 'panel2'} className={classes.paperStyle}>
                                        <ExpansionPanelSummary onClick={() => togglePanel("panel2")} expandIcon={<ExpandMoreIcon className={classes.expandIcons} color="secondary"/>}>
                                            <Typography className={classes.heading}>Educational Background</Typography>
                                            <Typography className={classes.secondaryHeading}>
                                                {/* You are currently not an owner */}
                                            </Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography className={classes.panelBody}>
                                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    <ExpansionPanel expanded={expanded === 'panel3'} className={classes.paperStyle}>
                                        <ExpansionPanelSummary onClick={() => togglePanel("panel3")} expandIcon={<ExpandMoreIcon className={classes.expandIcons} color="secondary"/>}>
                                            <Typography className={classes.heading}>Personal Favorite</Typography>
                                            <Typography className={classes.secondaryHeading}>
                                                {/* Filtering has been entirely disabled for whole web server */}
                                            </Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography className={classes.panelBody}>
                                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                                eros, vitae egestas augue. Duis vel est augue.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    <ExpansionPanel expanded={expanded === 'panel4'} className={classes.paperStyle}>
                                        <ExpansionPanelSummary onClick={() => togglePanel("panel4")} expandIcon={<ExpandMoreIcon className={classes.expandIcons} color="secondary"/>}>
                                            <Typography className={classes.heading}>Tech Favorites</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography className={classes.panelBody}>
                                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                                eros, vitae egestas augue. Duis vel est augue.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Particles
                className={classes.particleDiv}
                params={PartParams}
            />
        </div>
    )

}

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {

}

export default connect(null, mapDispatchToProps)(injectSheet(styles)(Page1))