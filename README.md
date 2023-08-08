
# Preview

![preview](./src/assets/prev.png)

# Source Eyes template

Base for quick start developing web application using React + TypeScipt + Parcel (Frontend) and Express (Backend). You may replace Express on another backend technology.

# Dependencies

- Programming Language — [Typescript](https://www.typescriptlang.org/) + [Books/Docs](https://www.typescriptlang.org/docs/handbook/intro.html)
- WebLibrary — [React](https://ru.reactjs.org/) + [Books/Docs](https://flaviocopes.com/book/read/react/)
  - State managering — [Redux](https://redux.js.org/) + [Docs](https://redux.js.org/introduction/learning-resources)
  - Routing — [React router + Docs](https://reactrouter.com/en/main/start/tutorial)
  - Draggable elements — [React Draggable + Docs](https://www.npmjs.com/package/react-draggable)
  - CSS Extension — [Less + Docs](https://lesscss.org/features/)
- Transferring data — [WebSocket + Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- Development dependencies
  - Easy usage for some env — [CrossEnv + Docs](https://www.npmjs.com/package/cross-env)
  - Bundler — [Parcel + Docs](https://parceljs.org/recipes/react/)

# ToDo's

- Integrate testing module

# Installing

NodeJS >16v is required. See [here](https://nodejs.org/en/)

```bash
git clone https://github.com/Smail000/source-eyes-template.git
cd source-eyes-tamplate
npm i
```

# Usage

Development mode (parcel base server) (will start server with hot reload)

```bash
npm run parcel:dev
```

Or development mode without server, just compile every new save

```bash
npm run parcel:watch
```

Production mode

```bash
npm run parcel:build

```

In both cases all files will export into /build directory.
To run server script in development mode

```bash
npm run server:dev
```

And production mode

```bash
npm run server:prod
```
