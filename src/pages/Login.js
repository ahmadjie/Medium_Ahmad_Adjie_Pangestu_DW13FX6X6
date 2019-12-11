import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { render } from '@testing-library/react'; import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../img/medium.svg';


const formStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,

        },
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

export default function Register() {
    const formClasses = formStyles();
    const cardClasses = cardStyles();
    const bull = <span className={cardClasses.bullet}>•</span>;
    const typographyClasses = typographyStyles();

    render(); {
        return (
            <div>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Card className={cardClasses.card} style={{ marginTop: "100px" }}>
                        <CardContent>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <form className={formClasses.root} noValidate autoComplete="off" fullWidth style={{ textAlign: "center", itemAlign: "center" }}>
                                    <div className={typographyClasses.root} >
                                        <Typography variant="h4" gutterBottom>
                                            Sign in with username
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quis cumque accusamus eius, quia velit inventore neque perspiciatis commodi beatae officiis quod temporibus suscipit et quo vel laboriosam vero ipsam?
                                        </Typography>
                                    </div>
                                    <TextField id="standard-basic" label="Username" required /><br />
                                    <TextField id="standard-basic" label="Password" required type="password" /><br />
                                    <Button variant="outlined">Login</Button>
                                    <div className={typographyClasses.root} >
                                        <p>
                                           Don't have an account? <Link to="/register" style={{ textDecoration: "none", color: "black" }} required>Register</Link>
                                        </p>
                                        <Link to="/">
                                            <img src={logo} width={85} height={85} />
                                        </Link>
                                    </div>
                                </form>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </div>

        );
    }
}

