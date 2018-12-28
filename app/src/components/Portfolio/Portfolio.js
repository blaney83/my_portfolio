import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import image1 from '../../assets/img/bg1.jpg';
import image2 from '../../assets/img/bg2.jpg';
import image3 from '../../assets/img/bg1.jpg';
import image4 from '../../assets/img/bg2.jpg';
import image5 from '../../assets/img/bg1.jpg';
import image6 from '../../assets/img/bg2.jpg';


const tileData = [
    {
        img: image1,
        title: 'Image',
        author: 'author',
        featured: false,
    },
    {
        img: image2,
        title: 'Image',
        author: 'author',
        featured: false,
    },
    {
        img: image3,
        title: 'Image',
        author: 'author',
        featured: true,
    },
    {
        img: image4,
        title: 'Image',
        author: 'author',
        featured: false,
    },
    {
        img: image5,
        title: 'Image',
        author: 'author',
        featured: false,
    },
    {
        img: image6,
        title: 'Image',
        author: 'author',
        featured: true,
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
        featured: false,
    },
    {
        img: image2,
        title: 'Image',
        author: 'author',
        featured: false,
    },
    {
        img: image3,
        title: 'Image',
        author: 'author',
        featured: true,
    },
    {
        img: image4,
        title: 'Image',
        author: 'author',
        featured: false,
    },
    {
        img: image5,
        title: 'Image',
        author: 'author',
        featured: false,
    },
    {
        img: image6,
        title: 'Image',
        author: 'author',
        featured: true,
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
        background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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

    return (
        <div className={classes.root}>
            <GridList  spacing={1} className={classes.gridList}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1} className={tile.featured ? classes.featuredGridListTile : classes.nonFeaturedGridListTile}>
                        <img src={tile.img} alt={tile.title} className={tile.featured ? classes.featuredImage : classes.nonFeaturedImage}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
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