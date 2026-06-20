import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false); 
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghizklmnopqrstuvwxyz"
    if (number) str += "0123456789" 
    if (character) str += "!@#$%^&*-_~`?" 

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, number, character, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, number, character, passwordGenerator])
  return (
    <>
      
      <div className='w-full max-w-md mx mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700  '>
        <h1 className='text-xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900 transition-colors duration-300 cursor-pointer'>Copy</button>

        </div>
        <div className='flex justify-center text-sm gap-x-2'>
            <div className='flex item-center gap-x-1'>
              <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input
                type='checkbox'
                defaultChecked={number}
                id='numberInput'
                onChange={() => {setNumber((prev) => !prev)}}
                />
                <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex item-center gap-x-1'>
                <input
                type='checkbox'
                defaultChecked={character}
                id='characterInput'
                onChange={() => {setCharacter((prev) => !prev)}}
                />
                <label htmlFor='characterInput'>Characters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
