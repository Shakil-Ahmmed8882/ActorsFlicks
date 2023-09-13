import { useEffect } from 'react'
import './App.css'
import Cart from './cart/Cart'
import Home from './home/Home'
import { useState } from 'react'
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
      
      console.log(countSalary)
      if(countSalary > 20000){
        return alert('You hit the budget')
      }else{
        setSalaries(countSalary)
        setActors([...actors, actor])
        }
              // Total salary
    }
    

    
function removeHandler(actor){
  const remaininActors = actors.filter(singleActor => singleActor.id !== actor.id)

  const remainingSlaries = salaries - actor.salary;
  setSalaries(remainingSlaries)
  setActors([...remaininActors])
}

    
    
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
            ></Cart>
          </div>
        </div>
      )
  }


export default App
