import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Hero from './(components)/LandingPage/Hero/Hero'
import Experience from './(components)/LandingPage/Exprience/Exprience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Hero />
<Experience />
    </>
  )
}

export default App
