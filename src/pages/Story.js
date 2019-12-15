import React, { Component } from 'react';
import Header from '../components/Header';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TabStory from '../components/TabStory';
import Button from '@material-ui/core/Button';

class Story extends Component {
	render() {
		return (
			<div style={{ margin: 'auto', width: '75%' }}>
				<Header />
				<Grid container style={{ marginTop: '5%', width: '100%' }}>
					<Grid item xs={6}>
						<Typography variant="h4">Your Stories</Typography>
					</Grid>
					<Grid item xs={6} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
						<Button variant="outlined" color="primary" style={{ marginRight: '3%' }}>
							Import Story
						</Button>
						<Button variant="outlined" color="secondary">
							Write a Story
						</Button>
					</Grid>
				</Grid>
				<TabStory />
			</div>
		);
	}
}

export default Story;
