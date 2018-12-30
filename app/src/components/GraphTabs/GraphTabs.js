import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import injectSheet from 'react-jss'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import VisualIcon from '@material-ui/icons/PanoramaOutlined';
import ScriptIcon from '@material-ui/icons/WrapTextOutlined';
import Cloud from '@material-ui/icons/CloudOutlined';
import Lock from '@material-ui/icons/LockOutlined';
import SQLIcon from "@material-ui/icons/StorageOutlined";
import ServerIcon from "@material-ui/icons/RouterOutlined"
import CSIcon from "@material-ui/icons/CategoryOutlined"
import SevenIcon from "@material-ui/icons/Fingerprint"
import EightIcon from "@material-ui/icons/FormatAlignRightOutlined"
import Typography from '@material-ui/core/Typography';
import ChartistGraph from "react-chartist";
import {
    visualChart,
} from "../Charts/Visual.js";
import {
    serverChart,
} from "../Charts/Server.js";
import {
    scriptChart,
} from "../Charts/Scripting.js";
import {
    sqlChart,
} from "../Charts/Database.js";
import {
    noSQLChart,
} from "../Charts/Database.js";
import {
    unstructuredChart,
} from "../Charts/Database.js";
import {
    csChart,
} from "../Charts/CS.js";
import {
    compiledChart,
} from "../Charts/Compiled.js";
import {
    cloudChart,
} from "../Charts/Cloud.js";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 , backgroundColor: "#deb78ec2"}} >
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: "transparent",
    },
    graphBackground: {

    },
    tabBar:{
        backgroundColor: "#2e2a23e0",
        color: "white"
    },
    eachTab:{
        color: "white"        
    }
});

function GraphTabs(props) {
    const { classes } = props;
    let [value, setValue] = useState(0)

    function switchGraph(burro) {
        setValue(burro)
        // console.log(setValue)
    }

    useEffect(()=>{
        console.log("im hooks")
    })

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.tabBar}>
                <Tabs
                    value={value}
                    scrollable
                    scrollButtons="on"
                    // indicatorColor="#ffff"
                    // textColor="#ffff"
                    className={classes.eachTab}
                >
                    <Tab label="Visual" icon={<VisualIcon />} onClick={()=>switchGraph(0)}/>
                    <Tab label="Scripting" icon={<ScriptIcon />} onClick={()=>switchGraph(1)}/>
                    <Tab label="Compiled/Interpreted" icon={<Lock />} onClick={()=>switchGraph(2)}/>
                    <Tab label="Cloud-Based" icon={<Cloud />} onClick={()=>switchGraph(3)}/>
                    <Tab label="SQL" icon={<SQLIcon />} onClick={()=>switchGraph(4)}/>
                    <Tab label="noSQL" icon={<EightIcon />} onClick={()=>switchGraph(5)}/>
                    <Tab label="Unstructured Data" icon={<SevenIcon />} onClick={()=>switchGraph(6)}/>
                    <Tab label="Server" icon={<ServerIcon />} onClick={()=>switchGraph(7)}/>
                    <Tab label="CS Basics" icon={<CSIcon />} onClick={()=>switchGraph(8)}/>
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer className={classes.graphBackground}>
                Visual
                <ChartistGraph
                            className="ct-chart"
                            data={visualChart.data}
                            type="Line"
                            options={visualChart.options}
                            responsiveOptions={visualChart.responsiveOptions}
                            listener={visualChart.animation}
                            plugins={visualChart.plugins.chartistPluginAxisTitle}
                        />
            </TabContainer>}
            {value === 1 && <TabContainer className={classes.graphBackground}>
                Scripting
                                <ChartistGraph
                            className="ct-chart"
                            data={scriptChart.data}
                            type="Line"
                            options={scriptChart.options}
                            responsiveOptions={scriptChart.responsiveOptions}
                            listener={scriptChart.animation}
                            plugins={scriptChart.plugins.chartistPluginAxisTitle}
                        />
            </TabContainer>}
            {value === 2 && <TabContainer className={classes.graphBackground}>
                Compiled/Interpreted
                                <ChartistGraph
                            className="ct-chart"
                            data={compiledChart.data}
                            type="Line"
                            options={compiledChart.options}
                            responsiveOptions={compiledChart.responsiveOptions}
                            listener={compiledChart.animation}
                            plugins={compiledChart.plugins.chartistPluginAxisTitle}
                        />
            </TabContainer>}    
            {value === 3 && <TabContainer className={classes.graphBackground}>
                Cloud-Based
                                <ChartistGraph
                            className="ct-chart"
                            data={cloudChart.data}
                            type="Line"
                            options={cloudChart.options}
                            responsiveOptions={cloudChart.responsiveOptions}
                            listener={cloudChart.animation}
                            plugins={cloudChart.plugins.chartistPluginAxisTitle}
                        />
            </TabContainer>}    
            {value === 4 && <TabContainer className={classes.graphBackground}>
                SQL Databases
                                <ChartistGraph
                            className="ct-chart"
                            data={sqlChart.data}
                            type="Line"
                            options={sqlChart.options}
                            responsiveOptions={sqlChart.responsiveOptions}
                            listener={sqlChart.animation}
                            plugins={sqlChart.plugins.chartistPluginAxisTitle}
                        />
            </TabContainer>}
            {value === 5 && <TabContainer className={classes.graphBackground}>
                noSQL Databases
                                <ChartistGraph
                            className="ct-chart"
                            data={noSQLChart.data}
                            type="Line"
                            options={noSQLChart.options}
                            responsiveOptions={noSQLChart.responsiveOptions}
                            listener={noSQLChart.animation}
                            plugins={noSQLChart.plugins.chartistPluginAxisTitle}
                        />
            </TabContainer>}
            {value === 6 && <TabContainer className={classes.graphBackground}>
                Unstructured Data
                                <ChartistGraph
                            className="ct-chart"
                            data={unstructuredChart.data}
                            type="Line"
                            options={unstructuredChart.options}
                            responsiveOptions={unstructuredChart.responsiveOptions}
                            listener={unstructuredChart.animation}
                            plugins={unstructuredChart.plugins.chartistPluginAxisTitle}
                        />
            </TabContainer>}        
            {value === 7 && <TabContainer className={classes.graphBackground}>
                Server
                                <ChartistGraph
                            className="ct-chart"
                            data={serverChart.data}
                            type="Line"
                            options={serverChart.options}
                            responsiveOptions={serverChart.responsiveOptions}
                            listener={serverChart.animation}
                            plugins={serverChart.plugins.chartistPluginAxisTitle}
                        />
            </TabContainer>}    
            {value === 8 && <TabContainer className={classes.graphBackground}>
                CS Basics
                                <ChartistGraph
                            className="ct-chart"
                            data={csChart.data}
                            type="Bar"
                            options={csChart.options}
                            responsiveOptions={csChart.responsiveOptions}
                            listener={csChart.animation}
                            plugins={csChart.plugins.chartistPluginAxisTitle}
                        />
            </TabContainer>}    
        </div>
    );
}

GraphTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {

}

export default connect(null, mapDispatchToProps)(injectSheet(styles)(GraphTabs))

// export default withStyles(styles)(GraphTabs);