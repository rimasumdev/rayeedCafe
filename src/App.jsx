
import Nav from './Header/Nav'
import Hero from './Hero/Hero'
import { useState } from 'react'
import Recipes from './Recipes/Recipes'

function App() {
  const [isVisited, setIsVisited] = useState(false)

  const handleVisited = () => {
    setIsVisited(!isVisited)
    console.log(isVisited)
  }
  return (
    <>
      <Nav handleVisited={handleVisited}/>
      <Hero isVisited={isVisited}  />
      <Recipes />
    </>
  )
}

export default App
