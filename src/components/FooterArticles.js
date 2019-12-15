import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

class FooterArticles extends Component {
	render() {
		return (
			<Grid container direction="column" style={{ backgroundColor: 'black' }}>
				<Grid item style={{ margin: '5%', width: '90%', display: 'flex', flexDirection: 'row' }}>
					<Grid item xs={4}>
						<h2 style={{ color: 'white' }}>Discover Medium</h2>
						<p style={{ color: '#9e9e9e' }}>
							Welcome to a place where words matter. On Medium, smart voices and original ideas take
							center stage - with no ads in sight. Watch
						</p>
					</Grid>
					<Grid item xs={4}>
						<h2 style={{ color: 'white' }}>Make Medium Yours</h2>
						<p style={{ color: '#9e9e9e' }}>
							Follow all the topics you care about, and we’ll deliver the best stories for you to your
							homepage and inbox. Explore
						</p>
					</Grid>
					<Grid item xs={4}>
						<h2 style={{ color: 'white' }}>Become a Member</h2>
						<p style={{ color: '#9e9e9e' }}>
							Get unlimited access to the best stories on Medium — and support writers while you’re at it.
							Just $5/month. Upgrade
						</p>
					</Grid>
				</Grid>
				<Grid item style={{ margin: '5%', width: '90%', display: 'flex', flexDirection: 'row' }}>
					<div style={{ width: '50%' }}>
						<h1 style={{ color: 'white', float: 'left' }}>Medium</h1>
					</div>
					<div />
					<div
						style={{
							width: '50%',
							float: 'right',
							flexDirection: 'row',
							display: 'flex',
							justifyContent: 'flex-end'
						}}
					>
						<p style={{ color: '#757575', marginRight: '20px' }}>About</p>
						<p style={{ color: '#757575', marginRight: '20px' }}>Help</p>
						<p style={{ color: '#757575', marginRight: '20px' }}>Legal</p>
					</div>
				</Grid>
			</Grid>
		);
	}
}

export default FooterArticles;
