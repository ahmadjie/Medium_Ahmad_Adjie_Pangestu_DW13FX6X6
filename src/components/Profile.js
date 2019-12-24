import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

class Profile extends Component {
	render() {
		return (
			<div style={{ margin: 'auto', width: '100%', marginLeft: '3%' }}>
				<Grid
					container
					justify="flex-start"
					alignContent="flex-start"
					style={{ margin: 'auto', width: '100%', marginTop: '3%' }}
				>
					<Grid item xs={6} style={{ display: 'flex', flexDirection: 'row' }}>
						<div>
							<h1>Ahmad Adjie</h1>
							<Typography variant="body1" color="textSecondary">
								1 Following
							</Typography>
						</div>
						<div style={{ marginLeft: '7%', marginTop: '4%' }}>
							<Button variant="outlined" size="small" style={{ marginTop: '5%' }}>
								Edit Profile
							</Button>
						</div>
					</Grid>
					<Grid item xs={4} style={{ width: 128, height: 128 }}>
						<Avatar
							style={{ width: 128, height: 128, marginTop: '6%', marginLeft: '16%' }}
							src="https://www.itl.cat/pngfile/big/7-75338_abstract-minimalist-minimalist-wallpaper-red.png"
						/>
					</Grid>
				</Grid>
				<Grid
					container
					justify="flex-start"
					alignContent="flex-start"
					style={{ margin: 'auto', width: '100%', marginTop: '3%' }}
				>
					<Grid item style={{ marginTop: '5%', width: 'auto' }}>
						<Typography variant="body1" color="textSecondary">
							Ahmad Adjie hasn't been active on Medium yet. Check back later to see their
							stories,claps,and highlights.
						</Typography>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Profile;
