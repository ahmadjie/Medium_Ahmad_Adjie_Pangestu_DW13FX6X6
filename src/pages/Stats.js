import React, { Component } from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TabStats from '../components/TabStats';

class Stats extends Component {
	render() {
		return (
			<div style={{ margin: 'auto', width: '75%' }}>
				<Header />
				<div style={{ width: '90%', margin: 'auto' }}>
					<div>
						<h1>Stats</h1>
						<Grid container style={{ width: '100%' }}>
							<Grid style={{ width: '50%' }}>
								<Typography variant="h6" color="textSecondary">
									Click story below to view detailed stats
								</Typography>
							</Grid>
							<Grid style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
								<Typography variant="h6" color="textSecondary">
									Learn more about using stats
								</Typography>
							</Grid>
						</Grid>
						<hr />
						<TabStats />
					</div>
				</div>
			</div>
		);
	}
}

export default Stats;
