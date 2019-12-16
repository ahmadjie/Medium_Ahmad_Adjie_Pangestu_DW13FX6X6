import React, { Component } from 'react';
import Header from '../components/Header';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import Button from '@material-ui/core/Button';

class Bookmarks extends Component {
	render() {
		return (
			<div style={{ margin: 'auto', width: '90%' }}>
				<Header />
				<Grid container style={{ margin: 'auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
					<Grid style={{ marginTop: '3%' }}>
						<Typography variant="h4" style={{ fontWeight: 'bold' }}>
							Bookmarks
						</Typography>
					</Grid>
					<Grid style={{ marginTop: '3%' }}>
						<Grid style={{ border: '1px solid black', padding: '2%', display: 'flex', direction: 'row' }}>
							<Grid item xs={1}>
								<TurnedInIcon fontSize="large" />
							</Grid>
							<div style={{ border: '1px solid black', marginRight: '5%' }} />
							<Grid item xs={9}>
								<Typography variant="h4" style={{ fontWeight: 'bold' }}>
									Offline reading is here.
								</Typography>
							</Grid>
							<Grid item xs={2}>
								<Button
									variant="outlined"
									style={{ backgroundColor: 'black', color: 'white', marginLeft: '40%' }}
								>
									Upgrade
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Bookmarks;
