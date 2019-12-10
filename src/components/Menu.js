import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

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

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" style={{ boxShadow: "none" }}>
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

                        <Tab label="OneZero" {...a11yProps(0)} />
                        <Tab label="Elemental" {...a11yProps(1)} />
                        <Tab label="Gen" {...a11yProps(2)} />
                        <Tab label="zora" {...a11yProps(3)} />
                        <Tab label="human parts" {...a11yProps(4)} />
                        <Tab label="forge" {...a11yProps(5)} />
                        <Tab label="marker" {...a11yProps(6)} />
                        <Tab label="level" {...a11yProps(7)} />
                        <Tab label="heated" {...a11yProps(8)} />
                        <Tab label="modus" {...a11yProps(9)} />
                        <Tab label="more " {...a11yProps(10)} />
                    </Tabs>
                </div>
            </AppBar>
        </div>
    );
}