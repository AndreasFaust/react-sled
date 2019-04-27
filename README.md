![react-sled Logo](https://raw.github.com/andreasfaust/react-sled/master/react-sled-logo.jpg)

**react-sled** is a carousel made with **react-spring**.

[![NPM](https://img.shields.io/npm/v/react-sled.svg)](https://www.npmjs.com/package/react-sled) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- Super-smooth spring animations (thanks to **react-spring**)
- Lightweight and performant architecture
- Touch- and Mousedrag (thanks to **react-with-gesture**)
- Easy to style (thanks to **styled-components**)
- Ready for server-side-rendering
- All props are dynamically changeable
- (Should be) Compatible with older Browsers from Internet Explorer 11 (Needs testing!)

🛷 [Have a look at the example!](https://andreasfaust.github.io/react-sled/)

**This Project is under development. Please join and contribute!**

**Beware:** Until version 1.0.0 the API can and does change (constantly). Any (breaking-)changes are expressed in minor-updates and will be noted in the docs immediatedly.

## Install

Install all dependencies via Yarn or NPM.

```bash
yarn add react-sled react-spring react-with-gesture styled-components react react-dom
```

## Usage

```jsx
import React from "react";
import { Sled, Views, Progress, Control } from "react-sled";

const images = ["my-image-1.jpg", "my-image-2.jpg"];

const App = () => {
  return (
    <Sled>
      // 'ow' is percent of the sled's own width. So the ratio is 2:1.
      <Views height="50ow">
        {images.map(image => (
          <img src={image} alt="My Image" />
        ))}
      </Views>
      <Progress />
      <div className="controls arrows">
        <Control goto="prev" />
        <Control goto="next">Go to next view!</Control>
      </div>
      <div className="controls dots">
        {images.map((null, index) => (
          <Control goto={index} />
        ))}
      </div>
    </Sled>
  );
};

export default App;
```

## Sled

Sled is the wrapper-component. It does not take any props.

## Views

Render all your views into this component.
It takes these props:

```jsx
<Views
  width
  // Type: String. Default: '100%'
  // Optional. Sets the viewpager’s width.
  // Allowed units:
  // – all CSS-units
  // – 'ow' ("own width": percent of viewpager’s width)
  height
  // Type: String. Default: "50vh"
  // Set the viewpager’s height.
  // Allowed units:
  // – all CSS-units
  // – 'ow' ("own width": percent of viewpager’s width)
  goto
  // Type: Number. Default: undefined
  // Got to view.
  style
  // Type: String. Default: ''
  // Optional. Add styles to the view-wrapper (via styled-components template-string).
  keyboard
  // Type: Boolean. Default: true
  // Keyboard controls.
  dragging
  // Type: Boolean. Default: true
  // Mouse- and Touch-Dragging.
  dragDistance
  // Type: Number or String. Default: 40 (px)
  // Distance the user has to drag the slider to trigger action.
  // A number is calculated in Pixel. A string has to have the custom unit 'ow' (own width of the sled).
  autoPlay
  // Type: Number. Default: undefined
  // Activates automatic Sliding.
  // Time in Milliseconds
  config
  // Type: Object. Default: { mass: 1, tension: 210, friction: 20, clamp: true }
  // react-spring animation-settings.
  pauseOnMouseOver
  // Type: Boolean. Default: true
  // autoPlay (if activated) gets paused, as long as the User hovers over the sled.
  rewind
  // Type: Boolean. Default: false
  // Rewind sled, when you want to go beyond the first or last view.
/>
```

## Controls

There is only one control-component for **Arrows** and **Dots**.

- It is by default an empty `button`-tag, that has a default **styling-preset**.
- There's the prop `goto`, that decides what the Control-element is: A string called `next` or `prev` will activate Arrow-functionality, a number Dot-functionality.

**Available Presets:**

- [dot](https://github.com/AndreasFaust/react-sled/blob/master/src/control/presets/dot.js) (default preset of Dot )
- [arrowLeft](https://github.com/AndreasFaust/react-sled/blob/master/src/control/presets/arrowLeft.js) (default preset of Arrow-Left )
- [arrowRight](https://github.com/AndreasFaust/react-sled/blob/master/src/control/presets/arrowRight.js) (default preset of Arrow-Right )

If you provide your own styles via `style`, the default-preset gets deleted.
You can provide a preset of your choice via `preset` and extend and overwrite it with `style`.

**Conrol Props Overview:**

```jsx
<Control
  goto
  // Type: String or Number.
  // Default: 'next'
  // Number is index of the target-view.
  // Possible values string: 'prev', 'next'

  preset
  // Type: String.
  // Default: ''.
  // If you provide a preset, the default gets replaced.

  style
  // Type: String.
  // Default: ''
  // If you provide a style, the default preset gets replaced.
```

**Conrol Examples:**

```jsx
// Dot with extended default preset
<Control
  goto={1}
  preset='dot'
  style={`
    background: red;
  `}
/>

// Arrow with custom content
<Control
  goto="next"
  style={`
    background: red;
  `}
>
  Go to next view!
</Control>
```

## Progress

react-sled has an Instagram-like progress-bar.
You can easily style it via the `style`-prop.
Here's the default, you can extend and overwrite:

```jsx
<Progress
  style={`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 20px;

    .sled-progress-rail {
      background: black;
      height: 4px;
    }
    .sled-progress-track {
      background: red;
      height: 4px;
    }
    .sled-progress-separator {
      width: 4px;
      background: white;
    }
  `}
/>
```

## To-Do

- [ ] Control animation on drag
- [ ] Better accessibility
- [ ] Infinity-Mode
- [ ] Vertical-Mode
- [ ] Nice documentation with live examples (using Docz)
- [ ] automated testing

## Contributing

Every contribution is very much appreciated.

**If you like react-sled, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-sled).**

## License

MIT © [AndreasFaust](https://github.com/AndreasFaust)

## Thanks

This library is derived from the great work and especially this [code-sandbox-example](https://codesandbox.io/embed/n9vo1my91p) provided by [Paul Henschel](https://github.com/drcmda) and the react-spring-team.

Thanks also to the creators of [create-react-hook](https://github.com/hermanya/create-react-hook) and [create-react-library](https://github.com/transitive-bullshit/create-react-library).
