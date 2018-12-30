import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import Button from '@material-ui/core/Button';
import bgImage from "../../assets/img/forest.jpg"
import Typography from '@material-ui/core/Typography';
import bgImage1 from "../../assets/img/rainy.jpg"
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkIcon from '@material-ui/icons/CallMade';
import CopyLink from '@material-ui/icons/AttachFile';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import bgImage2 from "../../assets/img/bg4.jpg"
import bgImage3 from "../../assets/img/bg5.jpg"
import classnames from 'classnames';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import EmailIcon from '../../assets/icons/email.svg';
import GitHubIcon from '../../assets/icons/GitHub.svg';
import LinkedIcon from '../../assets/icons/linked.svg';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import GraphTabs from "../GraphTabs/GraphTabs.js"
import Snackbar from '@material-ui/core/Snackbar';
import ScrollableAnchor from 'react-scrollable-anchor'
import Modal from '@material-ui/core/Modal';


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
    contactContainer: {
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
    contactHeader: {
        backgroundImage: "url('" + bgImage3 + "')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        "-webkit-background-clip": "text",
        backgroundClip: "text",
        color: "transparent",
        textAlign: "center",
        filter: "invert(0) grayscale(1) contrast(9)",
        fontSize: "3rem",
        marginBottom: "0px",
        [theme.breakpoints.up('sm')]: {
            fontSize: "4rem",
            marginBottom: "2rem",
        },
        fontFamily: "monospace",
        fontVariant: "ordinal",
        fontWeight: "bold",
        height: "10%"
    },
    card: {
        width: "100%",
        backgroundColor: "#191919e6",
        color: "white",
        height: "90%",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "red",
    },
    cardHeader: {
        color: "#a1a1a1db"
    },
    listText: {
        color: "white !important",
        textDecoration: "none !important",
        fontSize: ".8rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.2rem",
            // marginBottom: "2rem",
        },
    },
    secondaryListText: {
        color: "#a1a1a1db !important",
        textDecoration: "none !important",
        fontSize: ".7rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.1rem",
            // marginBottom: "2rem",
        },
    },
    contactCardContent: {
        padding: "0 !important"
    },
    contactIcons: {
        color: "white",
        fontSize: "1rem",
        padding: "6px",
        [theme.breakpoints.up('sm')]: {
            fontSize: "24px",
            // marginBottom: "2rem",
        },
    },
    contactIconsBB: {
        padding: "0px",
        [theme.breakpoints.up('sm')]: {
            // fontSize: "24px",
            padding: "12px",

            // marginBottom: "2rem",
        },
    },
})


function Page5(props) {
    const { classes } = props;
    const [emailOpen, setEmailOpen] = useState(false)
    const [gitHubOpen, setGitHubOpen] = useState(false)
    const [linkedInOpen, setLinkedInOpen] = useState(false)
    const [addressOpen, setAddressOpen] = useState(false)
    const [shareOpen, setShareOpen] = useState(false)

    function copyEmail() {
        const myEmail = document.createElement('textarea');
        myEmail.value = "professionallaney@gmail.com"
        myEmail.setAttribute('readonly', '');
        myEmail.style.position = 'absolute';
        myEmail.style.left = '-9999px';
        document.body.appendChild(myEmail);
        myEmail.select()
        document.execCommand('copy')
        setEmailOpen(true)
        document.body.removeChild(myEmail);
    }
    function copyGitHub() {
        const myGitHub = document.createElement('textarea');
        myGitHub.value = "https://github.com/blaney83"
        myGitHub.setAttribute('readonly', '');
        myGitHub.style.position = 'absolute';
        myGitHub.style.left = '-9999px';
        document.body.appendChild(myGitHub);
        myGitHub.select()
        document.execCommand('copy')
        setGitHubOpen(true)
        document.body.removeChild(myGitHub);
    }
    function copyLinkedIn() {
        const myLinkedIn = document.createElement('textarea');
        myLinkedIn.value = "https://www.linkedin.com/in/ben-laney-090613117/"
        myLinkedIn.setAttribute('readonly', '');
        myLinkedIn.style.position = 'absolute';
        myLinkedIn.style.left = '-9999px';
        document.body.appendChild(myLinkedIn);
        myLinkedIn.select()
        document.execCommand('copy')
        setLinkedInOpen(true)
        document.body.removeChild(myLinkedIn);
    }
    function copyAddress() {
        const myAddress = document.createElement('textarea');
        myAddress.value = "https://www.linkedin.com/in/ben-laney-090613117/"
        myAddress.setAttribute('readonly', '');
        myAddress.style.position = 'absolute';
        myAddress.style.left = '-9999px';
        document.body.appendChild(myAddress);
        myAddress.select()
        document.execCommand('copy')
        setAddressOpen(true)
        document.body.removeChild(myAddress);
    }
    return (
        <ScrollableAnchor id={'contact'}>
            <div className={classes.fifthContainer}>
                <div className={classes.fifthEmptyHalf} />
                <div className={classes.contactContainer}>
                    <Typography variant="h2" className={classes.contactHeader}>Contact</Typography>
                    <div className={classes.contactCardContainer}>
                        <Card className={classes.card}>
                            <CardHeader
                                title="Benjamin Laney"
                                subheader="Scottsdale, AZ"
                                titleTypographyProps={{
                                    color: "secondary"
                                }}
                                subheaderTypographyProps={{
                                    color: "secondary"
                                }}
                            />
                            <CardContent className={classes.contactCardContent}>
                                <Grid item xs={12} md={6}>
                                    <div className={classes.demo}>
                                        <List dense={false}>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src={EmailIcon} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<div className={classes.listText}>professionallaney@gmail.com</div>}
                                                    secondary={<div className={classes.secondaryListText}>E-Mail</div>}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton aria-label="CopyLink" className={classes.contactIconsBB} onClick={() => copyEmail()}>
                                                        <CopyLink className={classes.contactIcons} />
                                                    </IconButton>
                                                    <IconButton aria-label="LinkIcon" className={classes.contactIconsBB}>
                                                        <LinkIcon className={classes.contactIcons} />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                                <Snackbar
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    open={emailOpen}
                                                    autoHideDuration={3000}
                                                    onClose={() => setEmailOpen(false)}
                                                    ContentProps={{
                                                        'aria-describedby': 'message-id',
                                                    }}
                                                    message={<span id="message-id">Email Copied</span>}
                                                    action={[
                                                    ]}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src={GitHubIcon} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<a className={classes.listText} href="https://github.com/blaney83" rel="noopener noreferrer" target="_blank">https://github.com/blaney83</a>}
                                                    secondary={<div className={classes.secondaryListText}>GitHub</div>}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton aria-label="CopyLink" className={classes.contactIconsBB} onClick={() => copyGitHub()}>
                                                        <CopyLink className={classes.contactIcons} />
                                                    </IconButton>
                                                    <IconButton aria-label="LinkIcon" className={classes.contactIconsBB}>
                                                        <LinkIcon className={classes.contactIcons} />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                                <Snackbar
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    open={gitHubOpen}
                                                    autoHideDuration={3000}
                                                    onClose={() => setGitHubOpen(false)}
                                                    ContentProps={{
                                                        'aria-describedby': 'message-id',
                                                    }}
                                                    message={<span id="message-id">GitHub Link Copied</span>}
                                                    action={[
                                                    ]}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src={LinkedIcon} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<a className={classes.listText} href="https://www.linkedin.com/in/ben-laney-090613117/" rel="noopener noreferrer" target="_blank">www.linkedin.com/in/ben-laney</a>}
                                                    secondary={<div className={classes.secondaryListText}>LinkedIn</div>}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton aria-label="CopyLink" className={classes.contactIconsBB} onClick={() => copyLinkedIn()}>
                                                        <CopyLink className={classes.contactIcons} />
                                                    </IconButton>
                                                    <IconButton aria-label="LinkIcon" className={classes.contactIconsBB}>
                                                        <LinkIcon className={classes.contactIcons} />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                                <Snackbar
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    open={linkedInOpen}
                                                    autoHideDuration={3000}
                                                    onClose={() => setLinkedInOpen(false)}
                                                    ContentProps={{
                                                        'aria-describedby': 'message-id',
                                                    }}
                                                    message={<span id="message-id">LinkedIn Link Copied</span>}
                                                    action={[
                                                    ]}
                                                />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Grid>
                            </CardContent>
                            <CardActions className={classes.actions} >
                                <IconButton aria-label="Copy Website Address" className={classes.contactIconsBB} onClick={() => copyAddress()}>
                                    <CopyLink className={classes.contactIcons} />
                                </IconButton>
                                <Snackbar
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    open={addressOpen}
                                    autoHideDuration={3000}
                                    onClose={() => setAddressOpen(false)}
                                    ContentProps={{
                                        'aria-describedby': 'message-id',
                                    }}
                                    message={<span id="message-id">Ben's Page Link Copied</span>}
                                    action={[
                                    ]}
                                />
                                <IconButton aria-label="Share" className={classes.contactIconsBB} onClick={()=>setShareOpen(true)}>
                                    <ShareIcon className={classes.contactIcons} />
                                </IconButton>
                                <Modal
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                    open={shareOpen}
                                    onClose={setShareOpen(false)}
                                >
                                <div class="sharethis-inline-share-buttons"></div>
                                </Modal>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div >
        </ScrollableAnchor>
    )

}

function mapDispatchToProps(dispatch) {
}

function mapStateToProps(state) {

}

export default connect(null, mapDispatchToProps)(injectSheet(styles)(Page5))






