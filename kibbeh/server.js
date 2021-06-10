/*  
	Created by Sándor Király on 10/06/21.
	(c) Sándor Király. All rights reserved.
*/

const express = require('express');
const spotifyAPI = require('spotify-web-api-node');

const app = express();
app.post('/login', (req, res) => {
	const code = req.body.code; 
	const API = new spotifyAPI({
		redirectUri: 'http://localhost:3000',
		clientId: '',
		clientSecret: '',
	});

	spotifyAPI.authorizationCodeGrant(code).then(data => {
		res.json({
			accessToken: data.body.access_token,
			refreshToken: data.body.refresh_token,
			expiresIn: data.body.expires_in 
		});
	});
});