import React, { useEffect, useState } from "react"
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import { connect } from "react-redux";
import injectSheet from 'react-jss'
import bgImage from "../../assets/img/page2BG.jpg"
setConfiguration({ gridColumns: 14 });

const styles = {
    breadCrumbContainer: {
        position: "fixed",
        marginTop: "25vh !important",
        marginBottom: "25vh !important",
        height: "50vh !important",
        width: "5vw ! important",
        padding: "0 !important",
        boxSizing: "none !important",
        right: "0",
        zIndex: "10"
    },
    breadCrumbRow : {
        flexDirection: "column",
        color: "white"
    }
}


function Breadcrumb(props) {
    const { classes } = props;

    return (
        <div className={classes.breadCrumbContainer}>
            <Container>
                <Row className={classes.breadCrumbRow}>
                    <Col xs={2}><h5>Top</h5></Col>
                    <Col xs={2}><h5>About Me</h5></Col>
                    <Col xs={2}><h5>Coding Breakdown</h5></Col>
                    <Col xs={2}><h5>Portfolio</h5></Col>
                    <Col xs={2}><h5>Resources</h5></Col>
                    <Col xs={2}><h5>Contact</h5></Col>
                    <Col xs={2}><h5>Bottom</h5></Col>
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