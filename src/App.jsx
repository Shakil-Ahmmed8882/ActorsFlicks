import { useEffect } from 'react'
import './App.css'
import Cart from './cart/Cart'
import Home from './home/Home'
import { useState } from 'react'
import { getFromLs, addToLs, removeFromLs } from '../public/utilis/LocalStorage'
function App() {

  const [allActors, setAllActors] = useState([])
  const [salaries, setSalaries] = useState(0)
  const [remaining, setRemaining] = useState(20000)

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/gias-uddin-swe/b8-test-avenger/main/public/data.json')
    .then(res => res.json())
    .then(data => setAllActors(data))
  },[])

  
  // Event handling
  const [actors, setActors] = useState([])
  const addToCart = (actor) => {
    // initial value of total cost
    let countSalary = actor.salary;
    
    const isExist = actors.find(hero => hero.id === actor.id)
    if(isExist){
      return alert('Sorry sir, you can\'t add an actor twice. Try another')
    }
    else{
      
      
      actors.forEach(hero =>{
        countSalary += hero.salary;
      })
      }
      
      if(countSalary > 20000){
        return alert('You hit the budget')
      }else{
        setSalaries(countSalary)
        setActors([...actors, actor])
        setRemaining(20000 - countSalary)
        // set into local storage
        addToLs(actor.id)

      
        }
    }
    
    
function removeHandler(actor){
  const remaininActors = actors.filter(singleActor => singleActor.id !== actor.id)

  const remainingSlaries = salaries - actor.salary;
  setSalaries(remainingSlaries)
  setActors([...remaininActors])
  setRemaining(remaining + actor.salary)
  
  removeFromLs(actor.id)
} 


  // local storage setting up
  useEffect(()=>{
    if(allActors.length){
      const LsArray = getFromLs()
      // initial array 
      const saveArray = []
      for(const id of LsArray){
        const foundActor = allActors.find(eachActor => eachActor.id === id)
        if(foundActor){
          saveArray.push(foundActor)
        }
      }
      setActors([...saveArray])
    }
  },[allActors])




    
    
      return (
        <div>
            <div className='overlay'></div>
          <h1 className='text-3xl font-bold'>Conceptual Recap</h1>
          
          <div className='container'>
            <Home
            allActors={allActors}
            addToCart={addToCart}
            ></Home>
            <Cart
            actors={actors}
            salaries={salaries}
            removeHandler={removeHandler}
            remaining={remaining}
            ></Cart>
          </div>
        </div>
      )
  }


export default App
