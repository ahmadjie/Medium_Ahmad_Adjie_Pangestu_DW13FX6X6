import React, { Component } from 'react';
import Profile from '../components/Profile';
import TabArticleByPerson from '../components/TabArticleByPerson';
import Header from '../components/Header';
import { Grid } from '@material-ui/core';

class ArticleByPerson extends Component {
	render() {
		return (
			<div>
				<Header />
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Grid item xs={6}>
						<Profile />
						<TabArticleByPerson />
					</Grid>
				</div>
			</div>
		);
	}
}

export default ArticleByPerson;
