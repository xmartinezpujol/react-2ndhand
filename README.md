# react-2ndhand
A simple React app to sell &amp; buy secondhand things

![React 2ndHand](react-2ndhand.png?raw=true "React 2nd Hand")

### Client localhost (http://localhost:5000)
Node/NPM required to install dependencies.

Clone rep
``` shell
git clone https://github.com/xmartinezpujol/react-2ndhand.git
```

Install dependencies
``` shell
npm install
```

Start development
``` shell
npm start
```

Run Storybook (UI Explorer) at http://localhost:6006
``` shell
npm run storybook
```

Build Storybook Static
``` shell
npm run build-storybook
```

Make Production Bundle
``` shell
npm run build
```

### Testing

* Unit & Snapshot tests done in Jest. 

``` shell
npm run test
```

* Integration/E2E tests done in Cypress. 

``` shell
npm run teste2e
```

### Workflow

1) Dev/Prod environment setup.
2) Storybook up & running + first stateless components. Mocked info.
3) Client-side routing with React Router with simple Master-Detail.
4) Cypress, Jest & Enzyme setup.
5) Flow + ESLint plugins.
6) Final styles + Responsive/Compatibility check.
7) Tests.
8) Service Worker strategy.
9) Add E2E tests in Cypress + Refactoring.


### Considerations

* ESLint is used for code linting.

* Storybook is used for component development, following the Component Driven Design (CDD) mindset. Snapshots and UI testing could be added there also. This is a common ground with designers also to improve the companies visual Styleguide and use it as a UI Explorer.


###Refactor / Scaling / Improvements

* Texts should be FormattedMessages from react-intl (or similar intl libs) to support multilingual functionality.

* Dev environment could be done in Docker containers.

* For a better implementation of the list I would go for a pagination tactic. The list component should have a fetchPage method that updates onScroll and calls more pages from the API. That way we can lazyload ProductCard components or even better, virtualize them with a library like react-virtualized (https://github.com/bvaughn/react-virtualized)

* I would have heavily used Storybook base components if I had more time. I used Semantic UI but I suggest the implementation of an in-house library of components. That way we can follow Atomic Design & Component Driven Development for more reusable and flexible implementations. You can find some examples of this technique in previous projects in my Github account, I have tests also inside Storybook with plugins.

* Move all presentational components and some containers (if used regularly) to an external lib (npm is an option). That way we can import and reuse component in different projects.

* Bundle size is currently not a problem. For a bigger project, use chunks in Webpack or libs like React Loadable.


### Tech Stack
ReactJS, Flow, Router, Styled-components, Storybook, Webpack4, Cypress, Jest, Enzyme.
