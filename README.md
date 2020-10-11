## This project was bootstrapped with:

[Fluent UI](https://developer.microsoft.com/en-us/fluentui#/get-started) |
[TypeScript](https://www.typescriptlang.org/) |
[React-Router](https://reacttraining.com/react-router/web/guides/quick-start) |
[Redux](https://redux.js.org/) |
[Redux-Saga](https://redux-saga.js.org/).

## Getting started

Install [Nodejs](https://nodejs.org/en/).
Clone this project.
In the project directory, you can run:

### `npm install`

Install all the package dependencies.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Typescript

`one rule: less any`

## Network request

use `@ofm/ajax` package to requset network, it exposes an [axios](https://github.com/axios/axios) instance as ajax.

```javascript
import { ajax } from "@ofm/ajax";

ajax.post("url", data).then(() => {});
ajax.get("url").then(() => {});
```

## Vscode extension for choice

- prettier
- tslint
- perfect-css-modules
- vscode-js-import
- gitlen
- Debugger for Chrome
