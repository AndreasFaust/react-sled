![react-sled Logo](https://raw.github.com/andreasfaust/react-sled/master/react-sled-logo.jpg)

**react-sled** is a carousel made with **react-spring**.

[![NPM](https://img.shields.io/npm/v/react-sled.svg)](https://www.npmjs.com/package/react-sled) 

- Super-smooth spring animations (thanks to **react-spring**)
- Lightweight and performant architecture
- Touch- and Mousedrag (thanks to **react-with-gesture**)
- Easy to style
- Ready for server-side-rendering
- All props are dynamically changeable
- (Should be) Compatible with older Browsers from Internet Explorer 11 (Needs testing!)

🛷 [Have a look at the example!](https://andreasfaust.github.io/react-sled/)

## New Major release 2.0

**Breaking Changes:**
- Removed styled-components
- Removed custom `ow`-unit
- Use `react-spring` 9 and `react-with-gesture` 7

**New Features:**
- Full Type-Script support
- Vertical Sliding
- Set fixed proportion
- Show multiple elements at once (`showElements`)
- Move by multiple elements (`slideBy`)


## Install

Install all dependencies via Yarn or NPM.

```bash
yarn add react-sled react-spring@next react-use-gesture@beta react react-dom
```

## Usage

```jsx
import React from "react";
import { Sled, Views, Progress, Control } from "react-sled";
import "react-sled/dist/main.css";

const images = ["my-image-1.jpg", "my-image-2.jpg"];

const App = () => {
  return (
    <Sled>
      <Views>
        {images.map((image, index) => (
          <img key={image} src={image} alt={`My Image #${index}`} />
        ))}
      </Views>
      <Progress />
      <div className="controls arrows">
        <Control select="prev" />
        <Control select="next" />
      </div>
      <div className="controls dots">
        {images.map((image, index) => (
          <Control key={image} select={index} />
        ))}
      </div>
    </Sled>
  );
};

export default App;
```

## Sled

Sled is the wrapper-component. It takes no props.


## Views

Render all your views into this component.
It takes these optional props:

| **Name**             | **Type**         | **Default**                                            | **Description**                                                                                                                                                  |
| :------------------- | :--------------- | :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **width**            | String           | `'100%'`                                               | Sets the viewpager’s width. Allowed units: all CSS-units                                     |
| **height**           | String           | `null`                                                 | Sets the viewpager’s height.                                        |
| **proportion**           | String           | `2:1`                                                 | Provide either a width or height and set the other dimension proportional to it. If you provide a height and a width `proportion` is disabled.                              |
| **showElements**             | Number           | `1`                                            | Determines how many Slides/Views fit in the Sled’s viewport.                                                                                                                                                     |
| **slideBy**             | Number           | `1`                                            | Determines how many Slides/Views the Sled’s slides with one movement .                                                                                                                                                     |
| **select**             | Number           | `undefined`                                            | Select certain view.                                                                                                                                                     |
| **style**            | Object           | `null`                                                   | Add inline styles to the view-wrapper.                                                                                          |
| **keyboard**         | Boolean          | `true`                                                 | Set Keyboard controls.                                                                                                                                           |
| **dragging**         | Boolean          | `true`                                                 | Set Mouse- and Touch-Dragging.                                                                                                                                   |
| **dragDistance**     | Number or String | `40`                                               | Distance the user has to drag the slider to trigger action. A number is calculated in Pixel. A string is converted to a number unless it has the unit `%`, which means "percent of Sled’s width".  |
| **autoPlay**         | Number           | `undefined`                                            | Activates automatic Sliding-Interval in Milliseconds.                                                                                                            |
| **config**           | Number           | `{ mass: 1, tension: 210, friction: 20, clamp: true }` | react-spring animation-settings.                                                                                                                                 |
| **pause** | Boolean          | `false`                                                 | `autoPlay` (if activated) gets paused.                                                                                 |
| **pauseOnMouseOver** | Boolean          | `true`                                                 | `autoPlay` (if activated) gets paused, as long as the user hovers over the sled.                                                                                 |
| **stopOnInteraction** | Boolean          | `false`                                                 | `autoPlay` (if activated) gets stopped, after the user interacted with the sled.                                                                                 |
| **rewind**           | Boolean          | `false`                                                | Rewind sled, when you want to go beyond the first or last view.                                                                                                  |
| **onSledEnd**            | function           | `null`                                               | Callback, that gets triggered after last view.                 |
| **onAnimationStart**            | function           | `null`                                               | Callback, that gets triggered when a sliding-animation starts.                 |
| **onAnimationEnd**            | function           | `null`                                               | Callback, that gets triggered when a sliding-animation ends.                 |


## Controls

There is only one control-component for **Arrows** and **Selecting-Dots**.
The prop `select` decides what the Control-element is: A string called `next` or `prev` will activate Arrow-functionality, a number Select-functionality.

You can easily style it via CSS. The default-styles are scoped to the class-name `sled-progress-default`. They are contained in the file `dist/index.css`. 
If you give it a custom `className`-prop, the default-class will be overridden and the Progress will be completely unstyled. Then you can copy The default-styles from [here](https://raw.github.com/andreasfaust/react-sled/master/sled/control/index.css) as a starting-point.


**Control Props Overview:**

| **Name**   | **Type**         | **Default**               | **Description**                                                                                                                                               |
| :--------- | :--------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **select**   | String or Number | `'next'`                  | Defines, if the `Control` has arrow- or dot-functionality. A number is the index of the target-view. A string can be `'prev'` or `'next'`                     |
| **className** | String           | Default depends on `select` |                                                                                                     |
| **style**  | String           | `''`                      | If you provide a `style` and no `preset`, the default `preset` gets completely replaced. If you provide a `style` and a `preset`, the `preset` gets extended. |

**Arrow:**
Default-Design:
```jsx
<Control
  select="next"
/>
```

Your Custom-Design:
```jsx
<Control
  select="next"
  className="custom"
  style={{
    background: 'red'
  }}
>
  My custom arrow!
</Control>
```

**Selection-Dot:**
```jsx
<Control
  select={1}
/>
```

## Progress

react-sled has an Instagram-like progress-bar.
You can easily style it via CSS.
The default-styles are scoped to the class-name `sled-progress-default`.
If you give it a custom `className`-prop, the Progress will be completely unstyled. You can copy The default-styles from [here](https://raw.github.com/andreasfaust/react-sled/master/sled/progress/index.css) as a starting-point.


**Progress Props Overview:**

| **Name**   | **Type**         | **Default**               | **Description**                                                                                                                                               |
| :--------- | :--------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **className** | String           | Default depends on `select` |                                                                                                     |
| **style**  | String           | `''`                      | If you provide a `style` and no `preset`, the default `preset` gets completely replaced. If you provide a `style` and a `preset`, the `preset` gets extended. |

```jsx
<Progress
  className="my-progress"
  style={{ background: 'red' }}
/>
```

## useSledStore

A hook, that exposes the plugin’s state-management.
Unfortunately it is currently not possible to use `useSledStore` outside of `SledProvider`.
It returns an `Array` with 2 elements:

1.  **state** of type `object`
2.  **dispatch** of type `function`



## To-Do

- [ ] Control animation by frame on drag
- [ ] Infinity-Mode
- [ ] Nice documentation with live examples (using Docz)
- [ ] automated testing

## Contributing

Every contribution is very much appreciated.

**If you like react-sled, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-sled).**

## License

MIT © [AndreasFaust](https://github.com/AndreasFaust)

## Thanks

This library is derived from the great work and especially this [code-sandbox-example](https://codesandbox.io/embed/n9vo1my91p) provided by [Paul Henschel](https://github.com/drcmda) and the react-spring-team.
