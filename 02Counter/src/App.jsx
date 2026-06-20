import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(15)

  const addValue = () => {
    if(Counter < 20){
    
    Counter = Counter + 1;
    setCounter(Counter)

    }
  }
  const removeValue = () => {
    if(Counter > 0){

      setCounter(Counter - 1)

    }
  }


  return (
   <>
   <h1>chai aur react</h1>
   <h2>Counter value: {Counter} </h2>
   <button
   onClick={addValue}
   >Add value</button>
   <br/>
   <button
   onClick={removeValue}
   >remove value</button>
   </>
  )
}

export default App
