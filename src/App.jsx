
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard'
import { useState } from 'react'

function App() {
  
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <>
      
      <h1 className='text-5xl text-purple-600 text-center'>Hot hot cold Coffee: {coffees.length}</h1>

      <div className='grid md:grid-cols-2 gap-4 mt-20 w-10/12 mx-auto'>
        {
          coffees.map(coffee =><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
      
     
    </>
  )
}

export default App
