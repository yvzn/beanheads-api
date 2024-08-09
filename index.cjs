const express = require('express');
const path = require('node:path'); 

const React = require('react');
const RDS = require('react-dom/server');
const beanheads = require('beanheads');

const compression = require("compression");
const helmet = require("helmet");


// -- app


const app = express();
const port = parseInt(process.env.PORT) || 3000;


// -- middleware


app.use(compression());
app.use(helmet());
app.use(function(req, res, next) {
	res.charset = "utf-8";
	next();
});

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');


// -- routes


const parameters = {
	"skinTone": Object.keys(beanheads.theme.colors.skin),
	"eyes": Object.keys(beanheads.eyesMap),
	"eyebrows": Object.keys(beanheads.eyebrowsMap),
	"mouth": Object.keys(beanheads.mouthsMap),
	"hair": Object.keys(beanheads.hairMap),
	"facialHair": Object.keys(beanheads.facialHairMap),
	"clothing": Object.keys(beanheads.clothingMap),
	"accessory": Object.keys(beanheads.accessoryMap),
	"graphic": Object.keys(beanheads.graphicsMap),
	"hat": Object.keys(beanheads.hatMap),
	"body": Object.keys(beanheads.bodyMap),
	"hairColor": Object.keys(beanheads.theme.colors.hair),
	"clothingColor": Object.keys(beanheads.theme.colors.clothing),
	"circleColor": Object.keys(beanheads.theme.colors.bgColors),
	"lipColor": Object.keys(beanheads.theme.colors.lipColors),
	"hatColor": Object.keys(beanheads.theme.colors.clothing),
	"faceMaskColor": Object.keys(beanheads.theme.colors.clothing),
	"mask": ["true", "false"],
	"faceMask": ["true", "false"],
	"lashes": ["true", "false"],
}

app.get('/avatar', (req, res) => {
	res.set('Content-Type', 'image/svg+xml');

	const avatarProps = {};
	for (const parameter in parameters) {
		if (isValid(parameter, req.query[parameter])) {
			avatarProps[parameter] = req.query[parameter];
		}
	}

	const avatar = React.createElement(
		beanheads.BeanHead,
		avatarProps
	);

	const body = RDS.renderToString(avatar);

	res.send(body);
});


app.get('/', (req, res) => {
	res.render('homepage', {...parameters});
});


// -- utilities


function isValid(parameterName, parameterValue) {
	return parameterValue 
		&& parameterName in parameters
		&& parameters[parameterName].includes(parameterValue);
}


// -- run


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});


