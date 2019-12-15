import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));



export default function Menu() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabLabels = ["OneZero", "Elemental", "Gen", "zora", "human parts", "forge", "marker", "level", "heated", "modus", "more"];

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" style={{ boxShadow: "none", marginBottom:"40px"}}>
                <div style={{ margin: "auto", width: "100%" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="textPrimary"
                        textColor="textPrimary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {
                            tabLabels.map((item, index) => {
                                return (
                                    <Link to="/categorypages" style={{ textDecoration: "none", color: "black" }}>
                                        <Tab label={item} {...a11yProps(index)} />
                                    </Link>
                                )
                            })
                        }
                    </Tabs>
                </div>
            </AppBar>
        </div>
    );
}