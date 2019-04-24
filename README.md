**react-spring-viewpager** is a Gallery-module made with **react-spring**. 😽

[![NPM](https://img.shields.io/npm/v/react-raster.svg)](https://www.npmjs.com/package/react-spring-slides) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- Lightweight and performant architecture
- Ready for server-side-rendering

## Install

Install all dependencies via Yarn or NPM.

```bash
yarn add react-spring-viewpager react-spring react-with-gesture react react-dom
```

## Usage

```jsx
import React from "react";
import Viewpager from "react-spring-viewpager";

const App = () => {
  return (
    <Viewpager>
      <img src="my-image-1.jpg" alt="Hallo!" />
      <img src="my-image-2.jpg" alt="Hallo!" />
      <img src="my-image-3.jpg" alt="Hallo!" />
    </Viewpager>
  );
};

export default App;
```

## Props

List of all props:

```jsx
<Viewpager
  wrapperWidth
  // Type: Number. Default: undefined
  // Optional. Sets the viewpager’s width.
  wrapperHeight
  // Type: Number or String. Default: "50%"
  // Set the viewpager’s height. A number is Pixels.
  // Allowed units: % (of viewpager’s width), vw, vh
  auto
  // Type: Number. Default: undefined
  // Activates automatic Sliding.
  // Time in Milliseconds
/>
```

## To-Do

- [ ] Controls
- [ ] Infinity-Mode
- [ ] Nice documentation with live examples (using Docz)
- [ ] Stricter type-checking / props validation
- [ ] automated testing

## Contributing

Every contribution is very much appreciated.

**If you like react-spring-viewpager, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-spring-viewpager).**

## License

MIT © [AndreasFaust](https://github.com/AndreasFaust)

## Thanks

This Library is created using [create-react-hook](https://github.com/hermanya/create-react-hook), which is based on [create-react-library](https://github.com/transitive-bullshit/create-react-library).
