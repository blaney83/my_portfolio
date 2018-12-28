import React, { Component, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Nav from "../../components/Nav/Nav.js"
import Landing from "../../components/Landing/Landing.js"
import Page1 from "../../components/Page1/Page1.js"
import Page2 from "../../components/Page2/Page2.js"
import Page3 from "../../components/Page3/Page3.js"
import Page4 from "../../components/Page4/Page4.js"

const theme = createMuiTheme({

});

function Main(props) {

    return (
        <div className="Main">
            <MuiThemeProvider theme={theme}>
                <Nav />
                <Landing></Landing>
                <Page1></Page1>
                <Page2></Page2>
                <Page3></Page3>
                <Page4></Page4>
            </MuiThemeProvider>
        </div>
    );

}

export default Main;
