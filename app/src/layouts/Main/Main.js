import React, { Component, useEffect } from 'react';
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.js"
import Background1 from "../../components/Backgrounds/Background1.js"
import Background2 from "../../components/Backgrounds/Background2.js"
import Background3 from "../../components/Backgrounds/Background3.js"
import Background4 from "../../components/Backgrounds/Background4.js"
import Landing from "../../components/Landing/Landing.js"
import LandingCover from "../../components/Landing/LandingCover.js"
import Page1 from "../../components/Page1/Page1.js"
import Page2 from "../../components/Page2/Page2.js"
import Page3 from "../../components/Page3/Page3.js"
import Page4 from "../../components/Page4/Page4.js"

function Main(props) {
        // document.documentElement.style.overflow = '';  // firefox, chrome
        // document.body.scroll = "no"; // ie only
        window.scrollbars = false
    console.log(window)

    function handleScroll() {
        // console.log(window.visualViewport.height)
        // console.log(window.scrollY)
        // console.log(window.visualViewport.width)
        let oneTall = window.visualViewport.height
        let oneWide = window.visualViewport.width
        if (window.scrollY < oneTall / 3) {
            console.log("click")
            document.getElementById("landingPage").style.display = "block"
            document.getElementsByClassName("background2")[0].style.display = "none"
            document.getElementsByClassName("background1")[0].style.display = "none"
        } else if (window.scrollY >= oneTall / 3 && window.scrollY < oneTall + oneTall / 3) {
            console.log("clack")
            document.getElementById("landingPage").style.display = "none"
            document.getElementsByClassName("background2")[0].style.display = "block"
            document.getElementsByClassName("background1")[0].style.display = "block"
            document.getElementsByClassName("background3")[0].style.display = "none"
        } else if (window.scrollY >= oneTall + oneTall / 3 && window.scrollY < oneTall * 2 + oneTall / 3) {
            console.log("boom")
            document.getElementsByClassName("background1")[0].style.display = "block"
            document.getElementsByClassName("background2")[0].style.display = "block"
            document.getElementsByClassName("background3")[0].style.display = "none"
        } else if (window.scrollY >= oneTall * 2 + oneTall / 3 && window.scrollY < oneTall * 3 + oneTall / 3) {
            console.log("boom")
            document.getElementsByClassName("background1")[0].style.display = "block"
            document.getElementsByClassName("background2")[0].style.display = "none"
            document.getElementsByClassName("background3")[0].style.display = "block"
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
        window.addEventListener("scroll", () => handleScroll())
    });

    return (
        <div className="Main">
            <Breadcrumb />
            <Background1 />
            <Background2 />
            <Background3 />
            {/* <Background4/> */}
            <Landing></Landing>
            <LandingCover />
            <Page1></Page1>
            <Page2></Page2>
            <Page3></Page3>
            <Page4></Page4>
        </div>
    );

}

export default Main;
