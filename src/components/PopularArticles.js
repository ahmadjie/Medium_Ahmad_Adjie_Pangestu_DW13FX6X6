import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
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

}));

const popularArticleByCategories = [
    {
        category: "Healty",
        data: {
            title: "How Do I Stop Forgetting What I Learned So Quickly?",
            imageLink: "https://i.pinimg.com/originals/07/8d/a1/078da18c6580c35679044cb8949843d8.jpg",
        }
    },
    {
        category: "psychology",
        data: {
            title: "The End of Snap and Tesla",
            imageLink: "http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg",
        }
    },
    {
        category: "business",
        data: {
            title: "The End of Snap and Tesla",
            imageLink: "https://www.itl.cat/pngfile/big/7-75338_abstract-minimalist-minimalist-wallpaper-red.png",
        }
    }
]

const popularArticleByMedium = [
    {
        title :  "A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades",
        author : "ewako",
        category : "Business"

    },
    {
        title :  "A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades",
        author : "ewako",
        category : "Healthy"

    },
    {
        title :  "A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades",
        author : "ewako",
        category : "Games"

    },
    {
        title :  "A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades",
        author : "ewako",
        category : "Engineering"

    }
]




export default function PopularArticles() {
    const classes = useStyles();
    return (
        <Grid container justify="flex-start" alignItems="flex-start" style={{ marginTop: "3%" }}>
            <Grid container item xs={9}>
                {
                    popularArticleByCategories.map(popularArticleByCategory => (
                        <>
                            <Grid container item xs={10}>
                                <Grid className={classes.card}>
                                    <CardContent>
                                        <Typography variant="overline" color="inherit">
                                           {popularArticleByCategory.category}
                                        </Typography>
                                        <Typography variant="h5" color="textPrimary">
                                            {popularArticleByCategory.data.title}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                            <Grid container item xs={2} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cover} image={popularArticleByCategory.data.imageLink} title={popularArticleByCategory.data.imageLink} style={{ itemAlign: 'right', justifyContent: 'right' }} />
                                </Card>
                            </Grid>
                        </>
                    ))
                }

                {/* bates */}
         
            </Grid>
            <Grid  justify="flex-start" alignItems="flex-start" item xs={3} style ={{margin: "auto", width: "75%"}}>
                <Grid  justifyContent="left" alignItems="left" item xs={12}>
                    <Grid className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" color="textPrimary">
                                Popular On Medium
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Divider />
                <div>
                    {
                        popularArticleByCategories.map((articleData,index) => (
                            <Grid container style={{display:"flex", marginBottom:"20px"}}>
                                <Grid item md={4} style={{  textAlign : "center", alignItems:"center"}}>
                                <h1 style={{ justifyContent: 'center', color: '#bdbdbd' }}>0{index+1}</h1>
                                </Grid>
                                <Grid item md={8} >
                                    <h4>{articleData.category}</h4>
                                    <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                    dsffdd
                                    </p>
                                </Grid>
                            </Grid>
                        ))
                    }
                </div>
            </Grid>
        </Grid>
    )
}