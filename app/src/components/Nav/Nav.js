import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
// import Link from '@material-ui/core/Link';
import GitHubIcon from '../../assets/icons/GitHub.svg';
import LinkedIcon from '../../assets/icons/linked.svg';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Divider from '@material-ui/core/Divider';
import { persistor } from "../../state"
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import SavedIcon from '@material-ui/icons/Save';
import AccountIcon from '@material-ui/icons/PersonPin';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import InfoIcon from '@material-ui/icons/AccountCircleOutlined';
import CodeIcon from '@material-ui/icons/AssessmentOutlined';
import ResourceIcon from '@material-ui/icons/HelpOutline';
import ContactIcon from '@material-ui/icons/ContactMailOutlined';
import HistoryIcon from '@material-ui/icons/Code';
import Avatar from '@material-ui/core/Avatar';
import ScrollableAnchor, { goToTop, goToAnchor, configureAnchors } from "react-scrollable-anchor"
// import { searchJobs, updateNumberResults } from "../../state/search/actions";

configureAnchors({ scrollDuration: 1000 })

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "transparent !important",
        boxShadow: "none !important"
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarShift2: {
        marginRight: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
        backgroundColor: "#1a1a1ac2"
    },
    menuButton2: {
        marginRight: 12,
        marginLeft: 36,
        backgroundColor: "#1a1a1ac2"
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    drawer2: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
    },
    drawer2Open: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawer2Close: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        //removed + 1 from both equations below
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        width: "100%",
        justifyContent: "flex-end",
        alignItems: 'center',
        padding: '0 8px',
        position: "absolute",
        top: "0px",
        ...theme.mixins.toolbar,
    },
    toolbar2: {
        display: 'flex',
        width: "100%",
        justifyContent: "flex-start",
        alignItems: 'center',
        padding: '0 8px',
        position: "absolute",
        top: "0px",
        ...theme.mixins.toolbar,
    },
    sideTbCloseIcon: {
        color: "white",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    sideIcons: {
        color: "white !important"
    },
    sideIconLabels: {
        color: "white !important"
    },
    mainIconJR: {
        "border-radius": "0 !important"
    },
    signOutStayDown: {
        position: "absolute",
        bottom: "0px",
        width: "100%"
    },
    toolSplit: {
        justifyContent: "space-between",
    },
    seeThruPaper: {
        backgroundColor: "#1a1a1a9c",
        // backgroundColor: "transparent !important",
        border: "none !important",
    },
    sBDrawerPaper: {
        justifyContent: "center"
    },
    sideListItems: {
        backgroundColor: "transparent"
    },
    selectedListItems: {
        backgroundColor: "#0c0b0ba8 !important"
    },
    customAvatars: {
        height: "1.3em",
        width: "1.3em",
    },
    customIcons:{
        textAlign: "left"
    }
});

class Sidebar extends React.Component {
    state = {
        open: false,
        mediaQ: true,
        open2: false,
        mediaQ2: true,
        currentPage: window.location.hash,
        path: this.props
    };

    componentDidMount() {
        let hello = this
        window.addEventListener('hashchange', function () {
            hello.setState({ currentPage: window.location.hash })
        });
    }
    guttersMod = (open1, open2) => {
        if (open1 || open2) {
            return (false)
        } else {
            return (true)
        }
    }

    handleDrawerOpen = () => {
        this.setState({ mediaQ: false });
        setTimeout(() => this.setState({ open: true }), 150);
        // this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
        setTimeout(() => this.setState({ mediaQ: true }), 300);
    };

    handleDrawer2Open = () => {
        this.setState({ mediaQ2: false });
        setTimeout(() => this.setState({ open2: true }), 150);
        // this.setState({ open2: true });
    };

    handleDrawer2Close = () => {
        this.setState({ open2: false });
        setTimeout(() => this.setState({ mediaQ2: true }), 300);
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                {/* <CssBaseline /> */}
                <AppBar position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                        [classes.appBarShift2]: this.state.open2,
                    })}
                >
                    <Toolbar disableGutters={this.guttersMod(this.state.open, this.state.open2)} className={classes.toolSplit}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open || this.state.open2,
                                // [classes.hide]: this.state.open2,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawer2Open}
                            className={classNames(classes.menuButton2, {
                                [classes.hide]: this.state.open || this.state.open2,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Hidden xsDown={this.state.mediaQ} implementation="css">
                    <Drawer
                        variant="permanent"
                        className={classNames(classes.drawer, {
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        })}
                        classes={{
                            paper: classNames("sidebarClass", classes.seeThruPaper, classes.sBDrawerPaper, {
                                [classes.drawerOpen]: this.state.open,
                                [classes.drawerClose]: !this.state.open,
                            }),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                                {this.state.open ? <ChevronLeftIcon className={classes.sideTbCloseIcon} /> : ""}
                            </IconButton>
                        </div>
                        {/* <Divider /> */}
                        <List>
                            <ListItem button="true"
                                key={"Home"}
                                onClick={() => goToAnchor("home", true)}
                                selected={this.state.currentPage === "#home"}
                                className={this.state.currentPage === "#home" ? classes.selectedListItems : classes.sideListItems}
                            >
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Home" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                            <ListItem button="true"
                                key={"About Me"}
                                onClick={() => goToAnchor("about_me", true)}
                                selected={this.state.currentPage === "#about_me"}
                                className={this.state.currentPage === "#about_me" ? classes.selectedListItems : classes.sideListItems}
                            >
                                <ListItemIcon>
                                    <InfoIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="About Me" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                            <ListItem button className={this.state.currentPage === "#practical_knowledge" ? classes.selectedListItems : classes.sideListItems} key={"Practical Knowledge"}
                                onClick={() => goToAnchor("practical_knowledge", true)}
                                selected={this.state.currentPage === "#practical_knowledge"}
                            >
                                <ListItemIcon>
                                    <CodeIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Practical Knowledge" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                            <ListItem button className={this.state.currentPage === "#projects" ? classes.selectedListItems : classes.sideListItems}
                                key={"Project Anthology"}
                                onClick={() => goToAnchor("projects", true)}
                                selected={this.state.currentPage === "#projects"}
                            >
                                <ListItemIcon>
                                    <HistoryIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Project Anthology" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                            <ListItem button className={this.state.currentPage === "#resources" ? classes.selectedListItems : classes.sideListItems} key={"Resources"}
                                onClick={() => goToAnchor("resources", true)}
                                selected={this.state.currentPage === "#resources"}
                            >
                                <ListItemIcon>
                                    <ResourceIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Resources" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                            <ListItem button key={"Contact"} className={this.state.currentPage === "#contact" ? classes.selectedListItems : classes.sideListItems} onClick={() => goToAnchor("contact", true)}
                                selected={this.state.currentPage === "#contact"}
                            >
                                <ListItemIcon>
                                    <ContactIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Contact" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                        </List>
                        <List className={classes.signOutStayDown}>
                            <a className={classes.listText} href="https://github.com/blaney83" rel="noopener noreferrer" target="_blank">
                                <ListItem
                                    button="true"
                                    className={classes.sideListItems}
                                >
                                    <ListItemIcon
                                            className={classes.customIcons}
                                    >
                                        <Avatar src={GitHubIcon}
                                            className={classes.customAvatars}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="My GitHub"
                                        primaryTypographyProps={{ className: classes.sideIconLabels }} />
                                </ListItem>
                            </a>
                            <a className={classes.listText} href="https://www.linkedin.com/in/ben-laney-090613117/" rel="noopener noreferrer" target="_blank">
                                <ListItem
                                    button="true"
                                    className={classes.sideListItems}
                                >
                                    <ListItemIcon
                                            className={classes.customIcons}                                    
                                    >
                                        <Avatar src={LinkedIcon}
                                            className={classes.customAvatars}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="LinkedIn Profile"
                                        primaryTypographyProps={{ className: classes.sideIconLabels }} />
                                </ListItem>
                            </a>
                        </List>
                    </Drawer>
                </Hidden>
                <Hidden xsDown={this.state.mediaQ2} implementation="css">
                    <Drawer
                        variant="permanent"
                        anchor="right"
                        className={classNames(classes.drawer2, {
                            [classes.drawer2Open]: this.state.open2,
                            [classes.drawer2Close]: !this.state.open2,
                        })}
                        classes={{
                            paper: classNames("sidebarClass", classes.seeThruPaper, classes.sBDrawerPaper, {
                                [classes.drawer2Open]: this.state.open2,
                                [classes.drawer2Close]: !this.state.open2,
                            }),
                        }}
                        open={this.state.open2}
                    >
                        <div className={classes.toolbar2}>
                            <IconButton onClick={this.handleDrawer2Close}>
                                {/* {theme.direction === 'ltr' ?  <ChevronRightIcon /> : <ChevronLeftIcon /> } */}
                                {this.state.open2 ? <ChevronRightIcon className={classes.sideTbCloseIcon} /> : ""}
                            </IconButton>
                        </div>
                        {/* <Divider /> */}
                        <List>
                            <ListItem button="true"
                                key={"Home"}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Home" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                            <ListItem button key={"Search Jobs"}
                            >
                                <ListItemIcon>
                                    <SearchIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Search Jobs" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                            <ListItem button key={"Saved Jobs"}
                            >
                                <ListItemIcon>
                                    <SavedIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Saved Jobs" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                            <ListItem button key={"Account"}
                            >
                                <ListItemIcon>
                                    <AccountIcon className={classes.sideIcons} />
                                </ListItemIcon>
                                <ListItemText primary="Account" primaryTypographyProps={{ className: classes.sideIconLabels }} />
                            </ListItem>
                        </List>
                        <List className={classes.signOutStayDown}>
                            <ListItem button="true"
                            >
                                <ListItemIcon>
                                    <AccountIcon className={classes.sideIcons} />
                                </ListItemIcon>
                            </ListItem>
                        </List>
                    </Drawer>
                </Hidden>
            </div >
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Sidebar));