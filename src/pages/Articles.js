import React, { Component } from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import TabsArticles from '../components/TabsArticles';
import Divider from '@material-ui/core/Divider';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


export default class Articles extends Component {

    render() {
        return (
            <div>
                <div style={{ margin: "auto", width: "89%" }}>
                    <Header />
                    <Divider />
                    <TabsArticles />
                    <Divider />
                </div>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid xs={12} style={{ display: "flex", margin: "auto", width: "93%", itemAlign: "center", justifyContent: "center" }}>
                        <img src='https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg' style={{ width: "93%", marginTop: "3%" }} />
                    </Grid>
                    <div>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            <Typography variant="caption">
                                    Books
                            </Typography>
                        </Link>
                    </div>
                     <Grid container direction="column"  justify="flex-start" alignItems="center" style ={{margin: "auto", width: "50%"}}>
                        <h1>If You Only Read A Few Books In 2018, Read These</h1>
                        <Grid container direction = "row" display ="flex"  justify="flex-start" alignItems="center"  >
                            <Grid>     
                                <Avatar style={{ width: 48, height: 48 }} />
                            </Grid>
                            <Grid style={{marginLeft:"5%", marginTop:"2%"}}>    
                                Ryan Holiday &nbsp;
                                <Button variant="outlined" color="primary" size="small" style={{ witdh: "100%" }}>
                                        Follow
                                </Button>
                                <p style = {{marginTop : "-5%"}}>Jun 26,2018</p>                               
                            </Grid>
                            <Grid style={{marginLeft:"40%", marginTop:"4%"}}>    
                                         <TwitterIcon/>
                                         <FacebookIcon/>
                                         <BookmarkBorderIcon/>              
                            </Grid>
                        </Grid>
                        <Grid style={{textAlign:"left"}}>
                            <p>If you’d liked to be jerked around less, provoked less, and more productive and inwardly focused, where should you start?To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.Deep Work: Rules for Focused Success in a Distracted World by Cal Newport Media consumption went way up in 2017. For most of us, that meant happiness and productivity went way down. The world is becoming noisier and will become more so every day.
                            </p>
                            <p>If you’d liked to be jerked around less, provoked less, and more productive and inwardly focused, where should you start?To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.Deep Work: Rules for Focused Success in a Distracted World by Cal Newport Media consumption went way up in 2017. For most of us, that meant happiness and productivity went way down. The world is becoming noisier and will become more so every day.
                            </p>
                            <p>If you’d liked to be jerked around less, provoked less, and more productive and inwardly focused, where should you start?To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.Deep Work: Rules for Focused Success in a Distracted World by Cal Newport Media consumption went way up in 2017. For most of us, that meant happiness and productivity went way down. The world is becoming noisier and will become more so every day.
                            </p>
                        </Grid>
                    </Grid>
                </Grid >
            </div >
        )
    }
}