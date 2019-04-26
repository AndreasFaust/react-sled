![react-sled Logo](https://raw.github.com/andreasfaust/react-sled/master/react-sled-logo.png)

**react-sled** is a carousel made with **react-spring**.

[![NPM](https://img.shields.io/npm/v/react-sled.svg)](https://www.npmjs.com/package/react-sled) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- Super-smooth spring animations (thanks to **react-spring**)
- Lightweight and performant architecture
- Touch- and Mousedrag (thanks to **react-with-gesture**)
- Easy to style (thanks to **styled-components**)
- Ready for server-side-rendering
- (Should be) Compatible with older Browsers from Internet Explorer 11 (Needs testing!)

🛷 [Have a look at the example!](https://andreasfaust.github.io/react-sled/)

**This Project is under development. Please join and contribute!**

## Install

Install all dependencies via Yarn or NPM.

```bash
yarn add react-sled react-spring react-with-gesture styled-components react react-dom
```

## Usage

```jsx
import React from "react";
import { Sled, Views, Progress, Control } from "react-sled";

const App = () => {
  return (
    // 'ow' is percent of the sled's own width. So the ratio is 2:1.
    <Sled wrapperHeight="50ow">
      <Views>
        <img src="my-image-1.jpg" alt="My Image" />
        <img src="my-image-2.jpg" alt="My Image" />
      </Views>
      <Progress />
      <div className="controls">
        <Control type="prev" />
        <Control type="next" />
      </div>
    </Sled>
  );
};

export default App;
```

## Props

List of all props:

```jsx
<Sled
  wrapperWidth
  // Type: Number. Default: undefined
  // Optional. Sets the viewpager’s width.
  wrapperHeight
  // Type: Number or String. Default: "50vh"
  // Set the viewpager’s height. A number is pixels.
  // Allowed units: ol ("own width": percent of viewpager’s width), vw, vh, rem, em, px
  auto
  // Type: Number. Default: undefined
  // Activates automatic Sliding.
  // Time in Milliseconds
  config
  // Type: Object. Default: { mass: 1, tension: 210, friction: 20, clamp: true }
  // react-spring animation-settings.
  keys
  // Type: Boolean. Default: true
  // Keyboard controls.
  dragDistance
  // Type: String. Default: 25ow
  // Distance, the user has to drag the slider to trigger action.
  pauseOnMouseOver
  // Type: Boolean. Default: true
  // The autoslide (if activated) gets paused, as long as the User hovers over the sled.
/>
```

```jsx
<Views
  style
  // Type: String. Default: ''
  // Optional. Add styles to the view-wrapper (via styled-components template-string).
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

**If you like react-sled, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-sled).**

## License

MIT © [AndreasFaust](https://github.com/AndreasFaust)

## Thanks

This library is derived from the great work and especially this [code-sandbox-example](https://codesandbox.io/embed/n9vo1my91p) provided by [Paul Henschel](https://github.com/drcmda) and the react-spring-team.

Thanks also to the creators of [create-react-hook](https://github.com/hermanya/create-react-hook) and [create-react-library](https://github.com/transitive-bullshit/create-react-library).
