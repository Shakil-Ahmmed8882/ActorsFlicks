
function getFromLs(){
      const retrievedData = localStorage.getItem('cart');
      if(retrievedData){
            return JSON.parse(retrievedData)
      }
      return []
}

function saveInLocalStorage(cart){
  
      const stringifiedValue = JSON.stringify(cart);
      localStorage.setItem('cart',stringifiedValue)
}

function addToLs(id){
      const savedArray = getFromLs()
      savedArray.push(id)
      saveInLocalStorage(savedArray)
}

function removeFromLs(id){
      console.log(id)
      const lsArray = getFromLs()
      console.log(lsArray)
      const remainingActor = lsArray.filter(idx => idx !== id)
      saveInLocalStorage(remainingActor)
      console.log(remainingActor)
}

export {addToLs, getFromLs,removeFromLs}