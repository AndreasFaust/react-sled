import arrow from './arrow'

export default `
  ${arrow}
  transform-origin: left center;

  :before {
    border-right: 3px solid black;
    transform: rotate(45deg);
  }
`
