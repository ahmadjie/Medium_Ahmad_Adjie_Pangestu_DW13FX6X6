import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../img/medium.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@material-ui/core/Button';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';

class NewStory extends Component {
	render() {
		return (
			<div>
				<Grid item style={{ margin: 'auto', width: '75%', display: 'flex', flexDirection: 'row' }}>
					<div
						style={{
							width: '50%',
							backgroundColor: 'white',
							marginTop: '2%'
						}}
					>
						<img src={logo} width={85} height={45} style={{ float: 'left' }} />
						<p style={{ marginLeft: '100px' }}>Draft</p>
					</div>
					<div />
					<div
						style={{
							width: '50%',
							float: 'right',
							flexDirection: 'row',
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
							marginTop: '2%'
						}}
					>
						<Button variant="outlined" small style={{ width: '18%', height: '65%', marginRight: '20px' }}>
							Pulish
						</Button>
						<MoreHorizIcon style={{ marginRight: '20px' }} />
						<NotificationsNoneIcon style={{ marginRight: '20px' }} />
						<Avatar>H</Avatar>
					</div>
				</Grid>
				<Grid item style={{ margin: 'auto', width: '75%', marginTop: '5%' }}>
					<CKEditor
						editor={ClassicEditor}
						data="<p>Hello from CKEditor 5!</p>"
						onInit={(editor) => {
							// You can store the "editor" and use when it is needed.
							console.log('Editor is ready to use!', editor);
						}}
						onChange={(event, editor) => {
							const data = editor.getData();
							console.log({ event, editor, data });
						}}
						onBlur={(event, editor) => {
							console.log('Blur.', editor);
						}}
						onFocus={(event, editor) => {
							console.log('Focus.', editor);
						}}
					/>
				</Grid>
			</div>
		);
	}
}

export default NewStory;
