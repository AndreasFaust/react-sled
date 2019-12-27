export default `
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  box-shadow: none;
  border: none;
  transition: opacity 0.5s, transform 0.5s;
  opacity: 0.5;

  :focus {
    box-shadow: none;
    outline: none;
  }

  :before {
    content: '';
    display: block;
    flex-shrink: 0;
    width: 15px;
    height: 15px;
    border-top: 3px solid black;
  }

  :focus {
    opacity: 1;
  }

  :hover, 
  :active {
    opacity: 1;
    transform: scale(1.2);
  }


  :disabled {
    opacity: 0.4;
  }
`
