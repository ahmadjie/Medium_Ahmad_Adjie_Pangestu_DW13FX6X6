import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header';
import Menu from '../components/Menu';
import PopularArticles from '../components/PopularArticles';


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
    },
    content: {
        flex: '1 0 auto',
    },

}));

export default function Home() {
    const classes = useStyles();

    return (
        <div style={{ margin: "auto", width: "75%" }}>
            
            <Header />
            <Menu />
            <Grid container spacing={0}>
                <Grid item xs={4} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Psychologists Explain How To Stop Overthinking Everything
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Overthinking can lead to serious emotional distress and increase your risk of mental health problems
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={4}>

                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cover}
                            image="http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg"
                            title="Live from space album cover"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h8" variant="h8">
                                The End of Snap and Tesla
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Mac Miller
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cover}
                            image="https://i.pinimg.com/originals/07/8d/a1/078da18c6580c35679044cb8949843d8.jpg"
                            title="Live from space album cover"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h8" variant="h8">
                                Laziness Does Not Exist
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Mac Miller
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cover}
                            image="https://www.itl.cat/pngfile/big/7-75338_abstract-minimalist-minimalist-wallpaper-red.png"
                            title="Live from space album cover"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h8" variant="h8">
                                    Live From Space
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Mac Miller
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>

                </Grid>

                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                <Grid
                                    container
                                    direction="row-reverse"
                                    justify="flex-start"
                                    alignItems="flex-end"
                                >
                                        <Typography variant="overline" display="block" color='primary' gutterBottom>
                                            see all featured >
                                        </Typography>
                                </Grid>       
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <PopularArticles />
        </div>
    )
}