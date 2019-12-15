import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const itemRelatedArticles = [
	{
		title: 'Reports of the Virtual DOM’s Death are Greatly Exaggerated',
		author: 'Ryan Carniato',
		dateUpload: 'Dec 12',
		timeRead: '9 min read',
		image: 'http://hdqwalls.com/wallpapers/fire-minimalist-1f.jpg'
	},
	{
		title: 'Banana and Apple',
		author: 'Ryan Carniato',
		dateUpload: 'Dec 14',
		timeRead: '9 min read',
		image: 'http://hdqwalls.com/wallpapers/iceberg-minimalism-7v.jpg'
	},
	{
		title: 'loeloeloe',
		author: 'Ryan Carniato',
		dateUpload: 'Dec 20',
		timeRead: '9 min read',
		image: 'https://wallpaperaccess.com/full/214615.jpg'
	}
];

class RelatedArticles extends Component {
	render() {
		return (
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
				style={{ margin: 'auto', width: '90%' }}
			>
				<Grid item style={{ marginTop: '3%', width: '100%' }}>
					<Typography variant="h5">More From Medium</Typography>
				</Grid>
				<Grid container style={{ marginTop: '3%' }} spacing={4}>
					{itemRelatedArticles.map((item) => (
						<Grid item xs={4}>
							<div style={{ width: 'auto', height: 'auto' }}>
								<Typography variant="body2">{item.title}</Typography>
								<div
									style={{
										backgroundImage: `url(${item.image})`,
										backgroundSize: 'cover',
										height: '200px'
									}}
								/>
								<Typography variant="h5">{item.title}</Typography>
								<Grid container>
									<Grid item xs={2}>
										<Avatar />
									</Grid>
									<Grid item xs={8}>
										{item.author} in JavaJava <br />
										{item.dateUpload} · {item.timeRead}
									</Grid>
									<Grid item xs={2} style={{ display: 'flex' }}>
										<ThumbUpAltIcon />216
										<BookmarkBorderIcon />
									</Grid>
								</Grid>
							</div>
						</Grid>
					))}
				</Grid>
			</Grid>
		);
	}
}

export default RelatedArticles;
