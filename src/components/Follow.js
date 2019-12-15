import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Clap from '../img/clap.png';
import Divider from '@material-ui/core/Divider';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Follow extends Component {
	render() {
		const categories = [ 'Book', 'Self Improvement', 'Productivity', 'Life', 'Life Lesson' ];
		return (
			<Grid
				container
				direction="column"
				justify="flex-start"
				alignItems="flex-start"
				style={{ margin: 'auto', width: '50%' }}
			>
				<div>
					{categories.map((category) => {
						return <Chip label={category} variant="outlined" />;
					})}
				</div>
				<Grid
					container
					direction="row"
					display="flex"
					justify="flex-start"
					alignItems="flex-start"
					style={{ marginTop: '5%' }}
				>
					<Grid>
						<Avatar src={Clap} style={{ width: 48, height: 48 }} />
					</Grid>
					<Grid style={{ marginLeft: '5%', marginTop: '2%' }}>
						Ryan Holiday &nbsp;
						<p style={{ marginTop: '-1%' }}>Applause from you and 148 others</p>
					</Grid>
					<Grid style={{ marginLeft: '40%', marginTop: '4%' }}>
						<TwitterIcon />
						<FacebookIcon />
						<BookmarkBorderIcon />
					</Grid>
				</Grid>
				<Divider light="true" variant="fullWidth" style={{ margin: '3%' }} />

				<Grid xs={12} container direction="row" display="flex" justify="flex-start" alignItems="flex-start">
					<Grid xs={2}>
						<Avatar src={Clap} style={{ width: 70, height: 70 }} />
					</Grid>
					<Grid
						xs={10}
						container
						direction="column"
						display="flex"
						justify="flex-start"
						alignItems="flex-start"
					>
						<Grid xs={2} direction="column">
							<Typography variant="overline">WRITTEN BY</Typography>
						</Grid>
						<Grid xs={10} direction="row">
							<Typography variant="h5" display="inline" gutterBottom>
								Sastra Panca Nababan
							</Typography>
							<Button
								variant="outlined"
								color="primary"
								size="small"
								style={{ witdh: '100%', marginLeft: '200px' }}
							>
								Follow
							</Button>
						</Grid>
						<Grid xs={8}>
							<Typography variant="body2">
								Sharing is part of my DNA. I’ve always shared my knowledge, expertise, and passion with
								others.
							</Typography>
						</Grid>
					</Grid>
					<Grid xs={2} x>
						<Avatar src={Clap} style={{ width: 70, height: 70 }} />
					</Grid>
					<Grid
						xs={10}
						container
						direction="column"
						display="flex"
						justify="flex-start"
						alignItems="flex-start"
					>
						<Grid xs={2} direction="column">
							<Typography variant="overline">WRITTEN BY</Typography>
						</Grid>
						<Grid xs={10} direction="row">
							<Typography variant="h5" display="inline" gutterBottom>
								Sastra Panca Nababan
							</Typography>
							<Button
								variant="outlined"
								color="primary"
								size="small"
								style={{ witdh: '100%', marginLeft: '200px' }}
							>
								Follow
							</Button>
						</Grid>
						<Grid xs={8}>
							<Typography variant="body2">
								Sharing is part of my DNA. I’ve always shared my knowledge, expertise, and passion with
								others.
							</Typography>
						</Grid>
					</Grid>
					<Button variant="outlined" color="primary" fullWidth style={{ marginTop: '4%' }} sizes="large">
						<Link to="/comment">See responses (215) </Link>
					</Button>
				</Grid>
			</Grid>
		);
	}
}
