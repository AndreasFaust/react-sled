import arrow from './arrow'

export default `
  ${arrow}
  transform-origin: right center;

  :before {
    border-left: 3px solid black;
    transform: rotate(-45deg);
  }
`
