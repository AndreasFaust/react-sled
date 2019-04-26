**react-spring-viewpager** is a Gallery-module made with **react-spring**. 😽

[![NPM](https://img.shields.io/npm/v/react-raster.svg)](https://www.npmjs.com/package/react-spring-slides) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- Lightweight and performant architecture
- Touch- and Mousedrag
- Easy to style with thanks to **styled-components**
- Ready for server-side-rendering

🛷 [Have a look to the demo-example!](https://andreasfaust.github.io/react-spring-viewpager/)

**This Project is under development!**

## Install

Install all dependencies via Yarn or NPM.

```bash
yarn add react-spring-viewpager react-spring react-with-gesture styled-components react react-dom
```

## Usage

```jsx
import React from "react";
import { Viewpager, Views, Progress, Control } from "react-spring-viewpager";

const App = () => {
  return (
    <Viewpager wrapperHeight="50ow">
      <Views>
        <img src="my-image-1.jpg" alt="My Image" />
        <img src="my-image-2.jpg" alt="My Image" />
      </Views>
      <Progress />
      <div className="controls">
        <Control type="prev" />
        <Control type="next" />
      </div>
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
  // Set the viewpager’s height. A number is pixels.
  // Allowed units: ol ("own width": percent of viewpager’s width), vw, vh, rem, em, px
  auto
  // Type: Number. Default: undefined
  // Activates automatic Sliding.
  // Time in Milliseconds
  config
  // Type: Object. Default: { mass: 1, tension: 210, friction: 20, clamp: true }
  // Animation settings.
  keys
  // Type: Boolean. Default: true
  // Keyboard controls.
  dragDistance
  // Type: String. Default: 25ow
  // Distance, the user has to drag the slider to trigger action.
/>
```

```jsx
<Progress
  style
  // Type: String.
  // Default: `
  //   height: 4px;
  //   background: black;
  //   margin: 10px 0;

  //   .viewpager-progress-bar {
  //     background: red;
  //   }
  //   .viewpager-progress-separator {
  //     width: 4px;
  //     background: white;
  //   }
  // `
/>
```

```jsx
<Control
  type
  // Type: String.
  // Default: 'next'
  // Possible values: 'prev', 'next'

  style
  // Type: String.
  // Default: `
  //  cursor: pointer;
  //  padding: 10px;
  //  width: 40px;
  //  height: 40px;
  //`
  // If you provide a style, the default gets deleted.
```

## To-Do

- [ ] Control animation on drag
- [ ] Better accessibility
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

This library is an derived the great work and especially from this [code-sandbox-example](https://codesandbox.io/embed/n9vo1my91p) provided by [Paul Henschel](https://github.com/drcmda) and the react-spring-team.

Thanks also to the creators of [create-react-hook](https://github.com/hermanya/create-react-hook) and [create-react-library](https://github.com/transitive-bullshit/create-react-library).
