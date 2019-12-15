import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import CategoryPages from './pages/CategoryPages';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Follow from './components/Follow';
import Comment from './pages/Comment';
import RelatedArticles from './components/RelatedArticles';
import NewStory from './pages/NewStory';
import Story from './pages/Story';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/categorypages">
						<CategoryPages />
					</Route>
					<Route path="/articles">
						<Articles />
					</Route>
					<Route path="/follow">
						<Follow />
					</Route>
					<Route path="/comment">
						<Comment />
					</Route>
					<Route path="/relatedarticles">
						<RelatedArticles />
					</Route>
					<Route path="/newstory">
						<NewStory />
					</Route>
					<Route path="/story">
						<Story />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		);
	}
}
