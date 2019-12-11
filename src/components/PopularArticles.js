import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: '100%',
        display: 'flex',
        margin: 7,
        itemAlign: 'left',
        justifyContent: 'left',

    },
    media: {
        height: 140,

    },
    cover: {
        width: 151,
    },
    cover2: {
        width: "450px",
    }

}));


export default function PopularArticles() {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid container item xs={9}>
                <Grid container item xs={10}>
                    <Grid className={classes.card}>
                        <CardContent>
                            <Typography variant="overline" color="inherit" gutterBottom>
                                creatifity
                            </Typography>
                            <Typography variant="h5" color="textPrimary">
                                How Do I Stop Forgetting What I Learned So Quickly?
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid container item xs={2} >
                    <Card className={classes.card}>
                    
                        <CardMedia className={classes.cover} image="http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg" title="Live from space album cover" style={{ itemAlign: 'right', justifyContent: 'right' }}/>
                    </Card>
                </Grid>
                <Grid container item xs={10}>
                    <Grid className={classes.card}>
                        <CardContent className={classes.content}>
                            <Typography variant="overline" color="inherit" gutterBottom>
                                    psychology
                            </Typography>
                            <Typography variant="h5" color="textPrimary">
                                    The End of Snap and Tesla
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cover} image="https://i.pinimg.com/originals/07/8d/a1/078da18c6580c35679044cb8949843d8.jpg" title="Live from space album cover" style={{ itemAlign: 'right', justifyContent: 'right' }}/>
                    </Card>
                </Grid>
                <Grid container item xs={10}>
                    <Grid className={classes.card}>
                        <CardContent className={classes.content}>
                        <Typography variant="overline" color="inherit" gutterBottom>
                             business
                        </Typography>
                        <Typography variant="h5" color="textPrimary">
                            Laziness Does Not Exist
                        </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cover} image="https://www.itl.cat/pngfile/big/7-75338_abstract-minimalist-minimalist-wallpaper-red.png"
                        title="Live from space album cover" style={{ itemAlign: 'right', justifyContent: 'right' }}/>
                    </Card>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" item xs={3}>
                <Grid container direction="row" justifyContent="left" alignItems="left" item xs={12}>
                    <Grid className={classes.card}>
                        <CardContent className={classes.content}>
                             <Typography variant="h6" color="textPrimary">
                                 Popular On Medium
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row" justifyContent="left" alignItems="left" item xs={12}>
                    <Grid container direction="row" justifyContent="left" alignItems="left" item xs={3} style={{ justifyContent: 'center' }}>
                        <h1 style={{ justifyContent: 'center', color: '#bdbdbd' }}>
                            01
                            </h1>
                        <h1 style={{ justifyContent: 'center', color: '#bdbdbd' }}>
                            02
                            </h1>
                        <h1 style={{ justifyContent: 'center', color: '#bdbdbd' }}>
                            03
                            </h1>
                        <h1 style={{ justifyContent: 'center', color: '#bdbdbd' }}>
                            04
                            </h1>
                    </Grid>
                    <Grid container direction="row" justifyContent="left" alignItems="left"item xs={9}>
                        <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                            A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades
                        </p>
                        <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                            A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades
                        </p>
                        <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                            A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades
                        </p>
                        <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                            A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}