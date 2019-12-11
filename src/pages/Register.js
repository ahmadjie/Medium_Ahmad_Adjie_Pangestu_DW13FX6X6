import React ,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { render } from '@testing-library/react';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../img/medium.svg';


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

export default class Register extends Component {
    render() {
        return(
            <div>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Card className={cardStyles.card} style={{ marginTop: "75px" }}>
                        <CardContent>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <form noValidate autoComplete="off" fullWidth style={{ textAlign: "center", itemAlign: "center" }}>
                                    <div style={{width:"70%", margin:"auto"}}>
                                        <Typography variant="h4" gutterBottom>
                                            Join Medium
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom >
                                            Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.
                                        </Typography>
                                    </div>
                                    <TextField id="standard-basic" label="Fullname" required /><br />
                                    <TextField id="standard-basic" label="Username" required /><br />
                                    <TextField id="standard-basic" label="Password" required type="password" style={{marginBottom:"20px"}}/><br />
                                    <Button variant="outlined">Signup</Button>
                                    <div className={typographyStyles.root} >
                                        <p>
                                            Already have an account? <Link to="/login" style={{ textDecoration: "none", color: "black" }} required>Login</Link>
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
