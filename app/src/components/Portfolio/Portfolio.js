import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import image1 from '../../assets/img/bg1.jpg';
import image2 from '../../assets/img/bg2.jpg';
import image3 from '../../assets/img/bg1.jpg';
import image4 from '../../assets/img/bg2.jpg';
import image5 from '../../assets/img/bg1.jpg';
import image6 from '../../assets/img/bg1.jpg';
import jrVideo from "../../assets/img/jrclipped.mp4";
import Popover from '@material-ui/core/Popover';


const tileData = [
    {
        img: jrVideo,
        id: 1,
        title: 'Job Router',
        tech: 'MongoDB, React 16.7.2A',
        featured: true,
        isImg: false,
        popOverText: "This application is designed to help streamline the job search process. It compiles data from 6 of the largest job search engines on the internet and allows users to create dynamic profiles which allow integrated progress tracking though proprietary filtering and sorting methodology."
    },
    {
        img: image2,
        id: 2,
        title: 'SPA Vertical Website Template',
        tech: 'React',
        featured: false,
        isImg: true,
        popOverText: "This github repository houses a simple design template for creating dynamic background containers for a vertical React Application."
    },
    {
        img: image3,
        id: 3,
        title: 'MERN Template',
        tech: 'Mongo, Express, React, Node',
        featured: false,
        isImg: true,
        popOverText: "This template is configured with React-Router, Redux support and a complete file structure for rapid, full-stack application deployment."
    },
    {
        img: image4,
        id: 4,
        title: 'New Laptop',
        tech: 'Mongo, Node',
        featured: true,
        isImg: true,
        popOverText: "This application creates a real-time assortment of all products from a popular electronics retailer that rhymes with West Rye. It allows users to quickly sort not only by price BUT by percentage savings to rapidly locate the very best deals in a given category for their locality. It also allows sorted identification of 'open-box' products which saves valuable time searching for the best deal by delivering immediate results."
    },
    {
        img: image5,
        id: 5,
        title: 'Fanter',
        tech: 'mySQL, ORMs',
        featured: false,
        isImg: true,
        popOverText: "This application is designed as a platform for movie theories and conversation. Weird ending? Start a discussion on Fanter and find out what the community thinks."
    },
    {
        img: image6,
        id: 6,
        title: 'CLI Store Software',
        tech: 'SQL, Node',
        featured: false,
        isImg: true,
        popOverText: "This back-end application is a targeted approach to managing in a retail environment. Tracking inventory and sales, managing profit margin and offering 3 different authorization access levels, its a back-end solution to a store-front problem!"
    },
    {
        img: image1,
        id: 7,
        title: 'Pill Coach',
        tech: 'SQL, Express, ES7',
        featured: true,
        isImg: false,
        popOverText: "This multi-faceted medical application allows users to precisely track their Rx intake and quickly access all potentially life-saving reference information available for their specific Rxs from across the web in one place. With dose tracking and imminent-refill notifications, this application is a must have for anybody with multiple prescriptions. Dynamically created hyper-links and 7 different categories of medical-grade information for EACH Rx at your fingertips!"
    },
    {
        img: image2,
        id: 8,
        title: 'Useful Snippets',
        tech: 'Varies',
        featured: false,
        isImg: true,
        popOverText: "This repository houses random fiddles, workarounds and tricks deemed worthy of saving."
    },
    {
        img: image3,
        id: 9,
        title: 'Liri',
        tech: 'Node, REST',
        featured: false,
        isImg: true,
        popOverText: "This command line assistant can do everything that your phone can when it comes to accessing entertainment information. Utilizing the official APIs from Spotify, Bands in Town and IMDB, this application can find information about almost anything in the blink of an eye. Additionally tracks your history to provide record and recall of your searches."
    },
    {
        img: image4,
        id: 10,
        title: "Let's Travel",
        tech: 'Google API, ES6',
        featured: true,
        isImg: false,
        popOverText: "This application allows the user to save frequently traveled destinations on their profile. It uses 4 different program interfaces from Google's Cloud Platform to provide real time information about road conditions and travel times from the users currently location automatically and all at once, allowing the user to decide if they are going to leave the office early, stop at the store on the way home or wait until traffic dies down. It also provides an hourly weather forecast for the commute. In a pinch, its also a handy way to convert your current GPS signal into a physical street address to provide directions to your current location to others."
    },
    {
        img: image6,
        id: 11,
        title: 'Multi-Player RPS',
        tech: 'G-Firebase',
        featured: false,
        isImg: true,
        popOverText: "While lacking a polished UI and needing a bit of bug spray, this application utilizes the Google Firebase Real-Time Cloud database to connect one or more players for some cross-platform 1v1 Rock, Paper, Scissors."
    },
    {
        img: image5,
        id: 12,
        title: 'React Tiles',
        tech: 'React',
        featured: false,
        isImg: true,
        popOverText: "React-based, memory-match with GIFs of any category. Good luck!"
    },
    {
        img: image6,
        id: 13,
        title: 'Giphy Search',
        tech: 'AJAX',
        featured: true,
        isImg: true,
        popOverText: "Simple, but polished. An interactive Gif search that is both mobile-responsive and dynamic. Create categories, view random GIFs, save your favorites and download them straight to your mobile device for seamless sharing."
    },
    {
        img: image5,
        id: 14,
        title: 'Harry Potter Trivia',
        tech: 'Materialize, jQuery',
        featured: false,
        isImg: true,
        popOverText: "This application provides a quick bit of fun in the form of a mobile-responsive HP trivia game."
    },
    {
        img: image6,
        id: 15,
        title: 'Bees V. Wasp',
        tech: 'JS',
        featured: false,
        isImg: true,
        popOverText: "Mobile-responsive math game that tests your memory and quick arithmetic."
    },
    {
        img: image6,
        id: 16,
        title: 'Friend Finder',
        tech: 'Matching Algorithm',
        featured: false,
        isImg: true,
        popOverText: "A simple application for remote-deployment practice. Runs a weighted, match-making algorithm thats pretty accurate."
    },
    {
        img: image6,
        id: 17,
        title: 'SQL Playlist',
        tech: 'SQL',
        featured: false,
        isImg: true,
        popOverText: "CLI application using a simple SQL database to track, sort and search your favorite music."
    },
    {
        img: image6,
        id: 18,
        title: 'Unbeatable T-T-T',
        tech: 'Mini-Max Algorithm',
        featured: false,
        isImg: true,
        popOverText: "Quick fiddle lacking anything resembling a UI, but running a proof-of-concept, unbeatable, Mini-Max AI algorithm."
    },
    {
        img: image6,
        id: 19,
        title: "Silicon Valley 'Bach'man",
        tech: 'JS',
        featured: false,
        isImg: true,
        popOverText: "Early javaScript practice. Everybody's favorite Silicon Valley themed hangman."
    },
    {
        img: image6,
        id: 20,
        title: 'RPS Stats',
        tech: 'JS',
        featured: false,
        isImg: true,
        popOverText: "One of my first applications. Great for button-mashing."
    },
    {
        img: image6,
        id: 21,
        title: 'More Comming Soon!',
        tech: 'Suprise',
        featured: true,
        isImg: true,
        popOverText: "Always be Knolling"
    },
]


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        width: "100%",
        backgroundColor: "#d9ae6bc2",
        // padding: "3px"
    },
    gridList: {
        flexWrap: 'wrap',
        flexDirection: "column",
        maxHeight: "230px",
        [theme.breakpoints.up('sm')]: {
            maxHeight: "412px",
        },
        width: "100%",
        margin: "0 !important",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        position: "absolute",
        bottom: "0px"

    },
    featuredImage: {
        height: "200px",
        width: "200px",
        [theme.breakpoints.up('sm')]: {
            height: "400px",
            width: "400px",
        },
        position: 'center',
        repeat: 'no-repeat',
        size: 'cover',
        // backgroundAttachment: 'fixed',
    },
    nonFeaturedImage: {
        height: "100px",
        width: "100px",
        [theme.breakpoints.up('sm')]: {
            height: "200px",
            width: "200px",
        },
        position: 'center',
        repeat: 'no-repeat',
        size: 'cover',
    },
    featuredGridListTile: {
        maxHeight: "200px",
        maxWidth: "200px",
        [theme.breakpoints.up('sm')]: {
            maxHeight: "400px",
            maxWidth: "400px",
        },
        padding: "0px"
    },
    nonFeaturedGridListTile: {
        maxHeight: "100px",
        maxWidth: "100px",
        [theme.breakpoints.up('sm')]: {
            maxHeight: "200px",
            maxWidth: "200px",
        },
        padding: "0px"
    },
    icon: {
        color: "white"
    }
});


function Portfolio(props) {
    const { classes } = props;
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    function chooseMedia(tile) {
        if (tile.isImg) {
            return (<img src={tile.img} alt={tile.title} className={tile.featured ? classes.featuredImage : classes.nonFeaturedImage} />)
        } else if (!tile.isImg) {
            return (<video autoPlay={true} height="100%" loop={true} src={tile.img} alt={tile.title} className={tile.featured ? classes.featuredImage : classes.nonFeaturedImage} />)
        }
    }

    function openPopover(e){
        if(e.target === anchorEl){
            setAnchorEl(null)
        }else{
            setAnchorEl(e.target)
        }
    }

    return (
        <div className={classes.root}>
            <GridList spacing={1} className={classes.gridList}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1} className={tile.featured ? classes.featuredGridListTile : classes.nonFeaturedGridListTile}>
                        {chooseMedia(tile)}
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>{tile.tech}</span>}
                            actionIcon={
                                <IconButton 
                                className={classes.icon}
                                id={tile.id}
                                aria-owns={open ? tile.id : undefined}
                                aria-haspopup="true"
                                variant="contained"
                                onClick={(e)=>openPopover(e)}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }  
                        />
                        <Popover
                                    id={tile.id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={(e)=>openPopover(e)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Typography className={classes.typography}>{tile.popOverText}</Typography>
                                </Popover>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);