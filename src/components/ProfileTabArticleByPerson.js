import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Card, Avatar, Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

class ProfileTabArticleByPerson extends Component {
	render() {
		return (
			<div>
				<Typography variant="h6">Featured</Typography>
				<Card style={{ marginTop: '5%' }}>
					<Grid
						container
						direction="row"
						display="flex"
						justify="flex-start"
						alignItems="center"
						style={{ padding: '2%' }}
					>
						<Grid item xs={1}>
							<Avatar style={{ width: 48, height: 48 }} />
						</Grid>
						<Grid item xs={10}>
							<Typography variant="body1">Ryan cuyy</Typography>
							<Typography variant="body2">
								Jun 26,2018 · 13 min read <StarIcon fontSize="small" />
							</Typography>
						</Grid>
						<Grid item xs={1} display="flex" justify="flex-end" alignItems="flex-end">
							<StarIcon />
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						display="flex"
						justify="flex-start"
						alignItems="center"
						style={{ padding: '2%' }}
					>
						<Grid
							item
							xs={12}
							style={{
								backgroundImage: `url(${'http://hdqwalls.com/wallpapers/iceberg-minimalism-7v.jpg'})`,
								backgroundSize: 'cover',
								height: '150px'
							}}
						/>
					</Grid>
					<Grid
						container
						direction="column"
						display="flex"
						justify="flex-start"
						alignItems="flex-start"
						style={{ padding: '2%' }}
					>
						<Typography variant="h4">How To recover When The World Breaks You</Typography>
						<Typography variant="h6" color="textSecondary">
							We all break. The key is to become strong in the broken...
						</Typography>
					</Grid>
					<Grid
						container
						direction="row"
						display="flex"
						justify="flex-start"
						alignItems="flex-start"
						style={{ padding: '2%' }}
					>
						<Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
							<ThumbUpAltIcon />
							<Typography variant="body2" color="textSecondary" style={{ marginLeft: '2%' }}>
								27K
							</Typography>
						</Grid>
						<Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
							<Typography variant="body2" style={{ marginLeft: '2%' }} color="textSecondary">
								67 Responses
							</Typography>
							<BookmarkBorderIcon />
						</Grid>
					</Grid>
				</Card>
				<div style={{ marginTop: '10%' }}>
					<Typography variant="h6">Latest</Typography>
					<Card style={{ marginTop: '5%' }}>
						<Grid
							container
							direction="row"
							display="flex"
							justify="flex-start"
							alignItems="center"
							style={{ padding: '2%' }}
						>
							<Grid item xs={1}>
								<Avatar style={{ width: 48, height: 48 }} />
							</Grid>
							<Grid item xs={10}>
								<Typography variant="body1">Ryan cuyy</Typography>
								<Typography variant="body2">
									Jun 26,2018 · 13 min read <StarIcon fontSize="small" />
								</Typography>
							</Grid>
							<Grid item xs={1} display="flex" justify="flex-end" alignItems="flex-end">
								<StarIcon />
							</Grid>
						</Grid>
						<Grid
							container
							direction="row"
							display="flex"
							justify="flex-start"
							alignItems="center"
							style={{ padding: '2%' }}
						>
							<Grid
								item
								xs={12}
								style={{
									backgroundImage: `url(${'http://hdqwalls.com/wallpapers/iceberg-minimalism-7v.jpg'})`,
									backgroundSize: 'cover',
									height: '150px'
								}}
							/>
						</Grid>
						<Grid
							container
							direction="column"
							display="flex"
							justify="flex-start"
							alignItems="flex-start"
							style={{ padding: '2%' }}
						>
							<Typography variant="h4">How To recover When The World Breaks You</Typography>
							<Typography variant="h6" color="textSecondary">
								We all break. The key is to become strong in the broken...
							</Typography>
						</Grid>
						<Grid
							container
							direction="row"
							display="flex"
							justify="flex-start"
							alignItems="flex-start"
							style={{ padding: '2%' }}
						>
							<Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
								<ThumbUpAltIcon />
								<Typography variant="body2" color="textSecondary" style={{ marginLeft: '2%' }}>
									27K
								</Typography>
							</Grid>
							<Grid
								item
								xs={6}
								style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
							>
								<Typography variant="body2" style={{ marginLeft: '2%' }} color="textSecondary">
									67 Responses
								</Typography>
								<BookmarkBorderIcon />
							</Grid>
						</Grid>
					</Card>
				</div>
			</div>
		);
	}
}

export default ProfileTabArticleByPerson;
