# beanheads-api

[Beanheads](https://beanheads.robertbroersma.com/) is a cool React component by RobertBroersma that generates customizable SVG avatars.

This webapp is a wrapper around Beanheads, that makes it available outside React world.

## How to use ?

To create a random avatar in SVG, call:

https://beanheads-api-duqkg6rn6q-od.a.run.app/avatar

To include a random avatar in HTML, add the following code:

```html
<img src="https://beanheads-api-duqkg6rn6q-od.a.run.app/avatar" alt="avatar" />
```

## How to customize ?

The webapp accepts most of Beanheds properties as parameters, to allow customization:

Example:

https://beanheads-api-duqkg6rn6q-od.a.run.app/avatar?skinTone=yellow&hair=long

Refer to the [full reference of properties](https://github.com/RobertBroersma/beanheads?tab=readme-ov-file#props)

## How to run locally ?

This is an ExpressJS back-end, running on NodeJS and deployed on Google Cloud Run.

1. run the following commands

```bash
npm install
npm run dev
```

2. then open http://localhost:3000 in browser of choice

<kbd>Ctrl+C</kbd> to stop

## License

The original [Beanheads is MIT License](https://github.com/RobertBroersma/beanheads?tab=readme-ov-file#license), Copyright (c) RobertBroersma

This project is [MIT License](https://choosealicense.com/licenses/mit/), Copyright (c) 2024 Yvan Razafindramanana

### Third parties

This project uses open-source, third party software:

- [ExpressJS](https://github.com/expressjs/express): MIT License, Copyright (c) 2009-2014 TJ Holowaychuk,Copyright (c) 2013-2014 Roman Shtylman, Copyright (c) 2014-2015 Douglas Christopher Wilson 
