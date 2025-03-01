import { useState } from 'react'
import './App.css'
import { Button } from './Componentes/Button'
import { Filtrador } from './Componentes/Filtrador'

function App() {
  const [count, setCount] = useState("")
console.log(count)
  return (
    <>
     <Button guardar={setCount}/>
     <Filtrador count={count}/>
    </>
  )
}

export default App
