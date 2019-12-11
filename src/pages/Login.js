import React, {Component} from 'react';
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



const cardStyles = makeStyles({
    card: {
        minWidth: 275,
    },
});

const typographyStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

export default class Register extends Component {
    render() {
        return (
          
                <Grid container direction="column" justify="center" alignItems="center" style = {{width : "100%",margin :"auto"}}>
                    <Card className={cardStyles.card} style={{ marginTop: "100px" }}>
                        <CardContent>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <form  noValidate autoComplete="off" fullWidth style={{ textAlign: "center", itemAlign: "center" }}>
                                    <div style = {{width:"70%", margin:"auto"}}>
                                        <Typography variant="h4" gutterBottom>
                                            Sign in with username
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom >
                                            Enter the email address essociated with your account, and we'll send a magic link to your inbox
                                        </Typography>
                                    </div>
                                    <TextField id="standard-basic" label="Username" required /><br />
                                    <TextField id="standard-basic" label="Password" required type="password" /><br />
                                    <Button variant="outlined" style = {{marginTop:"5%"}}>Login</Button>
                                    <div className={typographyStyles.root} >
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
        );
    }
}

