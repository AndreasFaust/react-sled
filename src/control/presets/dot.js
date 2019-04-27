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
  opacity: 0.4;

  :focus {
    box-shadow: none;
    outline: none;
  }

  :before {
    content: '';
    display: block;
    flex-shrink: 0;
    width: 10px;
    height: 10px;
    background: grey;
    border-radius: 50%;
  }

  :hover, 
  :focus {
    transform: scale(1.2);
  }

  :hover, 
  :focus, 
  :active {
    opacity: 0.6;
  }

  :disabled {
    opacity: 1;
  }
`
