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
    Switch,
    Route,
    Link
} from "react-router-dom";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const appBarStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const cardStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const typographyStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

const avaStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    green: {
        color: '#fff',
        backgroundColor: lightGreen[800],
    },

}));

const buttonStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
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
    const cardClasses = cardStyles();
    const avaClasses = avaStyles();
    const buttonClasses = buttonStyles();
    const classes = useStyles();
    // aktifin ini kalau mau make typography kaya h1 h2
    // const typographyClasses = typographyStyles();


    return (

        <div className={appBarClasses.root}>
            <AppBar position="static" style={{ backgroundColor: "white", boxShadow:'none' }}>
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
                        {/* <Button variant="outlined" size="small" className={buttonClasses.margin}>
                                Upgrade
                            </Button> */}
                        <div className={avaClasses.root}>
                            <Avatar className={avaClasses.green}>R</Avatar>
                        </div>
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    );
}