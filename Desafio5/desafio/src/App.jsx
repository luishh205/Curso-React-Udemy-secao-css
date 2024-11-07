import { useState } from 'react'
import './App.css'
import Carinfo from './Components/Carinfo'

function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, brand:"ferrari", color: "Amarela", newCar: true, km: 0 },
    {id: 2, brand:"Uno", color: "branco", newCar: false, km: 43582034 },
    {id: 3, brand:"Palio", color: "preto", newCar: true, km: 0 },
  ]

  return (
    <>
      <div>
        <h1 className="Detalhes" >Lista de carros</h1>
        {cars.map((car)=>(
        <Carinfo 
         key={car.id}
         id={car.id}
         brand={car.brand} 
         color={car.color}
         km={car.km}
         newCar={car.newCar}/>
      ))}
      </div>
    </>
  )
}

export default App
