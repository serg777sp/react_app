'use strict'

// libs;
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { observable } from 'mobx';
import queryString from 'query-string';

// pages
import Login from "./pages/Login"
import Main from "./pages/Main"
import Charts from './pages/Charts';
import PageNotFound from "./pages/PageNotFound"

// store
import UserProvider from './stores/UserProvider';
import DataProvider from './stores/DataProvider';
window.DataProvider = DataProvider;
window.UserProvider = UserProvider;

// TODO: should be in login function
UserProvider.setUser({
	name: "Administrator",
	lang: "en",
	rtl: false,
	loggedIn: true
});
console.log('app file');
const user = UserProvider.getCurrent();


$.ajax("i18n/" + user.lang + ".json").done((locale) => {
  i18n.translator.add(locale);

	if (user.rtl){
		$('head').append('<link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap-rtl.min.css">');
	}

	render(
		<HashRouter>
			<Switch>
				<Route exact path="/" render={(matchProps) => (
					user.loggedIn ? (
						<Redirect to="/page/queues" />
					) : (
						<Redirect to="/login" />
					)
				)} />
				<Route path="/login" render={(matchProps) => (
					user.loggedIn ? (
						<Redirect to="/page/queues" />
					) : (
						<Login />
					)
				)}/>
				<Route path="/page/:page/:subPage?" render={(matchProps) => {
					const params = queryString.parse(matchProps.location.search);

					return user.loggedIn ? (
						<Main
							page={ matchProps.match.params.page }
							subPage={ matchProps.match.params.subPage }
							params={ params }
							user={ user }
						/>
					) : (
						<Redirect to="/login" />
					)
				}}/>
				<Route path="/charts" render={(matchProps) => {
					const params = queryString.parse(matchProps.location.search);

					return <Charts params={ params } />
				}} />
				<Route path="*" component={ PageNotFound } />
			</Switch>
		</HashRouter>,
		document.getElementById('app')
	);
});


