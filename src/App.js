import { useState, useEffect } from 'react';
import './App.css';


function App() {


  const [disabled, setDisabled] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const [inputValue1, setInputValue1] = useState("")

  useEffect(() => {

    if((inputValue.length >= 3) && (inputValue1.length >= 6)){
      setDisabled(false)
    } else{ 
      setDisabled(true)
    }
  }, [inputValue, inputValue1])

  return (
    <>

      <input onChange={(e) =>
         setInputValue(e.target.value)} />
         
      <input onChange={(e) =>
         setInputValue1(e.target.value)} />

      <button disabled={disabled}> Go</button>
      
    </>
  )
}

export default App;
