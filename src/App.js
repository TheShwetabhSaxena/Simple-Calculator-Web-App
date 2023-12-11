import './App.css';
import {useState, useRef} from 'react'
import Button from './components/Button';

function App() {
  const [result, changeResult] = useState(0)
  const inputSpace = useRef(null)
  const style = {
    display: "flex",
  }
  const commmonButtonStyle = {
    borderStyle: "Solid",
    color: "white",
    backgroundColor: "black"
  }
  const uniqueButtonStyle = {
    borderStyle: "Solid",
    color: "white",
    backgroundColor: "orange"
  }
  return (
    <div>
      <h1>Simplest working calculator</h1>
      <div>
        <label>{result}</label>
        <br/>
        <input ref = {inputSpace} type='text'></input>
        <br/>
        <div style={style}>
          <Button title = "Add" style = {commmonButtonStyle} function = {e => {
            e.preventDefault()
            changeResult((result) => result+Number(inputSpace.current.value))
          }}></Button>
          <Button title = "Subtract" style = {commmonButtonStyle} function = {e => {
            e.preventDefault()
            changeResult((result) => result-Number(inputSpace.current.value))
          }}></Button>
          <Button title = "Multiply" style = {commmonButtonStyle} function = {e => {
            e.preventDefault()
            changeResult((result) => result*Number(inputSpace.current.value))
          }}></Button>
          <Button title = "Divide" style = {commmonButtonStyle} function = {e => {
            try {
              e.preventDefault()
              changeResult((result) => result/Number(inputSpace.current.value))
            }
            catch (error) {
              e.preventDefault()
              changeResult(0)
              changeResult('Error: Division by zero')
            }
          }}></Button>
          <Button title = "ResetInput" style = {uniqueButtonStyle} function = {e => {
            e.preventDefault()
            inputSpace.current.value = ''
          }}></Button>
          <Button title = "ResetResult" style = {uniqueButtonStyle} function = {e => {
            e.preventDefault()
            changeResult(0)
          }}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
