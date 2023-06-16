import './App.css'
// import Tree from 'react-animated-tree'
// import Header from './components/Header'
import { createContext, useState } from 'react'
import Sections from './components/Sections'

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("ligth");


  const toggleTheme = () => {
    setTheme((curr) =>(curr === "ligth" ? "dark": "ligth"));
  }

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='App' id={theme}>
        <Sections />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
