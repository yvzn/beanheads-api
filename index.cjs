const express = require('express');
const React = require('react');
const RDS = require('react-dom/server');
const beanheads = require('beanheads');

const app = express();
const port = 3000;

const parameters = [
	"accessory",
    "body",
    "circleColor",
    "clothing",
    "clothingColor",
    "eyebrows",
    "eyes",
    "facialHair",
    "graphic",
    "hair",
    "hairColor",
    "hat",
    "hatColor",
    "lashes",
    "lipColor",
    "mask",
    "faceMask",
    "mouth",
    "skinTone",
]

app.get('/', (req, res) => {
	res.set('Content-Type', 'image/svg+xml');

	const avatarProps = {};
	for (const parameter of parameters) {
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

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

function isValid(parameterName, parameterValue) {
	return Boolean(parameterValue);
}