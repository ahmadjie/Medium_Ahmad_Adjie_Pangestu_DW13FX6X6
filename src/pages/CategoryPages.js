import React, { Component } from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default class CategoryPages extends Component {

    render() {
        return (
            <div style={{ width: "90%", margin: "auto" }}>
                <Header />
                <Divider />

                <Grid container direction="column" justify="center" alignItems="center" style={{ marginTop: "3%" }}>
                    <Grid xs={12} container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid xs={3}>
                            <img src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png" style={{ width: "100%" }} />
                        </Grid>
                        <Grid xs={5} style={{ margin: "auto "}}>
                            <p>The front lines of the future. A Medium publication about tech and science.</p>
                        </Grid>
                        <Grid xs={3} style={{ display: "flex", justifyContent: "flex-end", witdh: "100%" , marginTop:'2%', }}>
                            <Button variant="outlined" color="primary" size ="medium">
                                Follow
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid xs={12} container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ marginTop: "3%"  }}>
                        <Grid xs = {7}>
                            <div style={{ backgroundSize: "cover" ,height:"300px",backgroundImage :`url(${"https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"})`}}>
                            </div>
                        </Grid>
                        <Grid xs = {5} >
                            <div style = {{display : "flex", justifyContent : "center", alignItems : "center",  backgroundColor : "#304ffe" ,height:"300px" , textAlign : "center" , color : "white"}}>
                                <Typography variant="caption">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quis cumque accusamus eius, quia velit inventore neque perspiciatis commodi beatae officiis quod temporibus suscipit  et quo vel laboriosam vero ipsam?
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    
                    <Grid xs={12} container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ marginTop: "3%"  }}>
                        <Grid xs = {5} >
                            <div style = {{display : "flex", justifyContent : "center", alignItems : "center",  backgroundColor : "#304ffe" ,height:"300px" , textAlign : "center" , color : "white"}}>
                                <Typography variant="caption">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quis cumque accusamus eius, quia velit inventore neque perspiciatis commodi beatae officiis quod temporibus suscipit  et quo vel laboriosam vero ipsam?
                                </Typography>
                            </div>
                        </Grid>
                        <Grid xs = {7}>
                            <div style={{ backgroundSize: "cover" ,height:"300px",backgroundImage :`url(${"https://miro.medium.com/max/1200/1*MDxT8MJL3DmelDMv3-gd9A.gif"})`}}>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid xs={12} container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ marginTop: "3%"  }}>
                        <Grid xs = {7}>
                            <div style={{ backgroundSize: "cover" ,height:"300px",backgroundImage :`url(${"https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"})`}}>
                            </div>
                        </Grid>
                        <Grid xs = {5} >
                            <div style = {{display : "flex", justifyContent : "center", alignItems : "center",  backgroundColor : "#304ffe" ,height:"300px" , textAlign : "center" , color : "white"}}>
                                <Typography variant="caption">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quis cumque accusamus eius, quia velit inventore neque perspiciatis commodi beatae officiis quod temporibus suscipit  et quo vel laboriosam vero ipsam?
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>

                 <Grid xs={12} container direction="row" justifyContent="left" alignItems="left" style={{ backgroundColor : '#eeff41' ,marginTop:'3%' }}>
                        <div style = {{display:"flex", flexDirection : "column", justifyContent:"center", alignItems:"center" , margin:'2vw 27vw'}}>
                            <h3>"We have a few new thing to share."</h3>
                            <p>-Damon Beres</p>
                            <h5>Welcome to a Refreshed OneZero</h5>
                            <p>Dec 3 . 2 Min Read</p>
                        </div>
                    </Grid>
        
              
                </Grid>
                
                <div style = {{width : "100%", margin : "3%"}}>
                    <Divider />
                </div>

                <Grid container direction="row" justifyContent="left" alignItems="left" style={{marginTop:'3%', margin : "auto" , width:"75%" }}>
                    <Grid xs={9} container direction="row" justifyContent="left" alignItems="left" textAlign = "left">
                        <h4>An Eerie Historical Deepfake Imagines Nixon Telling the World the Moon Landing Failed</h4>
                        <p>A team of scientists used A.I. to create a convincing facsimile of a historical speech that never happened, and put the threat of fake information front and center</p>
                    </Grid>
                    <Grid xs = {3}>
                       
                    <div style={{ backgroundSize: "cover" ,height : "100%",backgroundImage :`url(${"https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"})`}}>
                    </div>
                    </Grid>
                </Grid>
                
                         
                <div style = {{width : "100%", margin : "3%"}}>
                    <Divider />
                </div>

                <Grid container direction="row" justifyContent="left" alignItems="left" style={{marginTop:'3%', margin : "auto" , width:"75%" }}>
                    <Grid xs={9} container direction="row" justifyContent="left" alignItems="left" textAlign = "left">
                        <h4>An Eerie Historical Deepfake Imagines Nixon Telling the World the Moon Landing Failed</h4>
                        <p>A team of scientists used A.I. to create a convincing facsimile of a historical speech that never happened, and put the threat of fake information front and center</p>
                    </Grid>
                    <Grid xs = {3}>
                       
                    <div style={{ backgroundSize: "cover" ,height : "100%",backgroundImage :`url(${"https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"})`}}>
                    </div>
                       
                    </Grid>
                </Grid>
                         
                <div style = {{width : "100%", margin : "3%"}}>
                    <Divider />
                </div>

                <Grid container direction="row" justifyContent="left" alignItems="left" style={{marginTop:'3%', margin : "auto" , width:"75%" }}>
                    <Grid xs={9} container direction="row" justifyContent="left" alignItems="left" textAlign = "left">
                        <h4>An Eerie Historical Deepfake Imagines Nixon Telling the World the Moon Landing Failed</h4>
                        <p>A team of scientists used A.I. to create a convincing facsimile of a historical speech that never happened, and put the threat of fake information front and center</p>
                    </Grid>
                    <Grid xs = {3}>
                        <div style={{ backgroundSize: "cover" ,height : "100%",backgroundImage :`url(${"https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"})`}}>
                        </div>
                    </Grid>
                </Grid>
            </div >
            
        );
    }

}