import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ButtonComponent buttonText="Click Here"/>
    <ButtonComponent buttonText="Send"/>
    <ButtonComponent buttonText="Reset"/>

    <ImageComponent src="https://cdn.pixabay.com/photo/2024/12/13/20/34/mountains-9266137_640.jpg" alt="mountains"/>
    <ImageComponent src="https://cdn.pixabay.com/photo/2022/05/23/20/33/hot-air-balloon-7217175_640.jpg" alt="Cappadocia"/>
    <ImageComponent src="https://cdn.pixabay.com/photo/2022/02/07/22/39/nature-7000445_640.jpg" alt="snow"/>
  

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
