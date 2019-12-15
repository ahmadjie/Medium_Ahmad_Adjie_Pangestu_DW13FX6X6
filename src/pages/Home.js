import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header';
import Menu from '../components/Menu';
import PopularArticles from '../components/PopularArticles';

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
        width: "25%",
    },


}));


const latestUpdateArticles = [
    {
        title: "Someone need someone",
        author: "Adjie Jumaidi",
        image: "http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg"
    },
    {
        title: "Someone need coffee for get someone",
        author: "Adjie asep",
        image: "http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg"
    },
    {
        title: "Someone need coffee for get someone",
        author: "Adjie asep",
        image: "http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg"
    }
]

const popularArticlesRight = [{
    title: "Contemplative Reptile",
    content: "Overthinking can lead to serious emotional distress and increase your risk of mental health problems",
    image: "http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg"
}]



const popularArticlesLeft = [{
    title: "Contemplative Reptile",
    content: "Overthinking can lead to serious emotional distress and increase your risk of mental health problems",
    image: "http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg"
}]


export default function Home() {
    const classes = useStyles();

    return (
        <div style={{ margin: "auto", width: "75%" }}>
            <Header />
            <Menu />
            <Grid container spacing={3}>
                {/* LEFT */}
                <Grid item xs={4} >
                    <Grid className={classes.card}>
                        <CardActionArea>
                            {
                                popularArticlesLeft.map(popularArticleLeft => (
                                    <>
                                        <CardMedia className={classes.media} image={popularArticleLeft.image} title={popularArticleLeft.title} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {popularArticleLeft.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {popularArticleLeft.content}
                                            </Typography>
                                        </CardContent>
                                    </>
                                ))
                            }
                        </CardActionArea>
                    </Grid>
                </Grid>

                {/* CENTER */}

                <Grid item xs={4}>
                    {
                        latestUpdateArticles.map(latestUpdateArticle => (
                            <div>
                                <Grid container style={{marginBottom:"20px"}}>
                                    <Grid item md={4} style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${latestUpdateArticle.image})` }}></Grid>
                                    <Grid item md={8} style={{ padding: "0px 10px 0px 10px" }}>
                                        <h4>
                                            {latestUpdateArticle.title}
                                        </h4>
                                        <p>
                                            {latestUpdateArticle.author}
                                        </p>
                                    </Grid>
                                </Grid>

                                {/* <CardMedia className={classes.cover} image={latestUpdateArticle.image} title={latestUpdateArticle.title} />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <h4>
                                            {latestUpdateArticle.title}
                                        </h4>
                                        <p>
                                            {latestUpdateArticle.author}
                                        </p>
                                    </CardContent>
                                </div> */}
                            </div>
                        ))
                    }
                </Grid>

                {/* RIGHT */}

                <Grid item xs={4}>
                    <Grid className={classes.card}>
                        <CardActionArea>
                            {
                                popularArticlesRight.map(popularArticleRight => (
                                    <>
                                        <CardMedia className={classes.media} image={popularArticleRight.image} title={popularArticleRight.title} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {popularArticleRight.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {popularArticleRight.content}
                                            </Typography>
                                            <Grid container direction="row-reverse" justify="flex-start" alignItems="flex-end">
                                                <p>
                                                    see all featured >
                                                </p>
                                            </Grid>
                                        </CardContent>
                                    </>
                                ))
                            }
                        </CardActionArea>
                    </Grid>
                </Grid>
            </Grid>
            <PopularArticles />
        </div>
    )
}