import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { lightGreen } from '@material-ui/core/colors';
import logo from '../img/medium.svg';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const appBarStyles = makeStyles(theme => ({

    title: {
        flexGrow: 1,
    },
}));



const avaStyles = makeStyles(theme => ({

    green: {
        color: '#fff',
        backgroundColor: lightGreen[800],
    },

}));


const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        paddingLeft: '20px'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

export default function Header() {
    const appBarClasses = appBarStyles();
    const avaClasses = avaStyles();
    const classes = useStyles();

    return (

        <div>
            <AppBar position="static" style={{ backgroundColor: "white", boxShadow: 'none' }}>
                <div style={{ margin: "auto", width: "100%" }}>
                    <Toolbar>
                        <Typography variant="h6" className={appBarClasses.title} >
                            <Link to="/">
                                <img src={logo} width={85} height={45} />
                            </Link>
                        </Typography>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <div className={classes.search}>

                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                style={{ backgroundColor: "", color: "#616161" }}
                            />
                        </div>
                        <IconButton aria-label="delete" color="action">
                            <NotificationsNoneIcon fontSize="medium" />
                        </IconButton>
                        <div className={avaClasses.root}>
                            <Avatar className={avaClasses.green}>R</Avatar>
                        </div>
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    );
}