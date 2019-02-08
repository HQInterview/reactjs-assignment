# Most popular articles from New York Times
An opinionated Next.js project with Express, Redux, Styled components, and Jest.

## Article Details
Next.js is an awesome and minimalistic framework to make a modern universal react app. Here we show the article details of specific articles selected by user

## Features
- Dynamic routing with [express](https://github.com/expressjs/express) and [next-routes](https://github.com/fridays/next-routes).
- State management with [redux](https://github.com/reactjs/redux), [react-redux](https://github.com/reactjs/react-redux), and [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- Unit testing with [jest](https://github.com/facebook/jest)
- Linting with [standard](https://github.com/standard/standard)
](https://github.com/facebook/immutable-js/), [dotenv](https://github.com/motdotla/dotenv), and more...

## Getting started
```
git clone https://github.com/VidhiSarkar/Nyt.git my-project
cd my-project
npm install
npm start
```

Then open `http://localhost:3000/` to see your app.

## Structure overview
```
├── README.md
├── next.config.js
├── package.json
├── pages
│   ├── _document.js
│   ├── articleDetails.js
│   └── index.js
├── routes.js
├── server
│   └── index.js
├── src
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   └── Article
│	│	└── Drawer
│	│	└── Layout
│	│	└── Loader
│   ├── config.js
│   ├── utils
│   │   └── nyt.js
│   ├── reducers
│   │   ├── index.js
│   ├── store
│   │   └── createStore.js
│   ├── styles
│   │   ├── SearchResults.scss
│   │   └── base.scss
│   └── test
│       ├── __mocks__
│       │   └── styleMock.js
│       ├── components
│       │   └── Article.test.js
│       └── jest.setup.js
└── yarn.lock
```
