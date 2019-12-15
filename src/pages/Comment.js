import React, { Component } from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

class Comment extends Component {
	render() {
		return (
			<div>
				<Header />
				<Grid Container style={{}}>
					<Grid item={8} justify="center" alignItems="center" style={{ margin: 'auto', width: '50%' }}>
						<h4>Showing responses for:</h4>
						<Card>
							<Grid container direction="row" justify="center" alignItems="center">
								<Grid xs={7}>
									<h4>
										Scientists Are Contemplating a 1,000-Year Space Mission to Save Humanitghfjhfjfy
									</h4>
								</Grid>
								<Grid xs={4}>
									<ThumbUpAltIcon style={{ marginRight: '2%' }} />33
									<ChatBubbleOutlineIcon style={{ marginRight: '2%' }} />33
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
				<Grid
					item={8}
					justify="center"
					alignItems="center"
					style={{ margin: 'auto', width: '50%', marginTop: '6%' }}
				>
					<h4>Responses</h4>
					<Card style={{ margin: 'auto', width: '100%' }}>
						<div style={{ padding: '3%', display: 'flex' }}>
							<Avatar
								alt="Remy Sharp"
								src="/static/images/avatar/1.jpg"
								style={{ width: 60, height: 60 }}
							/>
							<TextField
								id="outlined-basic"
								label="Outlined"
								variant="outlined"
								fullWidth
								style={{ marginLeft: '5%' }}
							/>
						</div>
					</Card>
					<Card style={{ margin: 'auto', width: '100%', marginTop: '5%' }}>
						<div style={{ margin: 'auto', width: '90%' }}>
							<div style={{ paddingTop: '3%', display: 'flex' }}>
								<div style={{ display: 'flex' }}>
									<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
								</div>
								<div style={{ marginLeft: '3%' }}>
									<Typography variant="body2">Joni</Typography>
									<Typography variant="caption">tgl</Typography>
								</div>
							</div>
							<Grid style={{ paddingTop: '3%', display: 'flex' }}>
								lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</Grid>
							<Grid item={12} style={{ backgroundColor: 'red' }}>
								<div style={{ float: 'left', display: 'flex' }}>
									<ThumbUpAltIcon />
									<Typography variant="body2">47</Typography>
								</div>
								<div style={{ float: 'right', display: 'flex' }}>
									<Typography variant="body2">1 Responses</Typography>
									<BookmarkBorderIcon />
								</div>
							</Grid>
						</div>
					</Card>
				</Grid>
			</div>
		);
	}
}

export default Comment;
