// import logo from './logo.svg';
import './App.css';
import {Button} from './components/button'
import {Output} from './components/output'
import {useState} from 'react'

function App() {
  const [print , setPrint] = useState("") 
  const [result , setResult] = useState("") 

   const printOutput = (event) => {
      setPrint( print  +event.target.value )
      console.log( print +event.target.value)
    }


    const ans = () =>{
     const x = eval(print);
     setResult( x );


    }
 
  return (
    <>
      <h2>Calculator</h2>
      <br></br>
      <Output result = {print}/>
    <Button  fn = {printOutput} label ='1' value = {1} ></Button>
    <Button fn = {printOutput}label = '2' value = {2} ></Button>
    <Button fn = {printOutput}label = '3' value = {3} ></Button>
    <Button fn = {printOutput}label = '4' value = {4} ></Button>
    <Button fn = {printOutput}label = '5' value = {5} ></Button>
    <Button fn = {printOutput}label = '6' value = {6} ></Button>
    <Button fn = {printOutput}label = '7' value = {7} ></Button>
    <Button fn = {printOutput}label = '8' value = {8} ></Button>
    <Button fn = {printOutput}label = '9' value = {9} ></Button>
    <Button fn = {printOutput}label = '+' value = '+'></Button>
    <Button fn = {printOutput}label = '-' value = '-'></Button>
    <Button fn = {printOutput}label = '*' value = '*'></Button>
    <Button fn = {printOutput}label = '/' value = '/'></Button>
    <Button fn = {ans}label = '=' value = '='></Button>
    <Output result = {result}/>
    </>
  );
}

export default App;
