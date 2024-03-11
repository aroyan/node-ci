const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
	try{
		res.json({message: 'hello from vps', details: 'using nginx and github actions', todo: 'use docker'});
	} catch(e){
		next(e);
	}
})

app.listen(3012, () => {
	console.log('Server is running on port :3012');
})
