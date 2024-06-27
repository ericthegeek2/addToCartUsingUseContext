import React, {useState, createContext} from 'react'
import blackShoe from '../assets/black-shoe.jpg';
import AddShoeCart from "./addShoeCart";

export const AddToCartContext = createContext()
export const totalCartContext = createContext()

export const increProductContext = createContext()
export const decreProductContext = createContext()

const DisplayShoe = () => {
   
 

    



   const [increDecreShoe, setIncreDecreShoe] = useState(0)

   const [product, setProduct] = useState('')

    const increProduct = ()=>{
        if (increDecreShoe >= -1) {
            const num = increDecreShoe + 1
            console.log(increDecreShoe) 
            return setIncreDecreShoe(num)
           
        }
        
    }

    
    const addCart = () =>{
        const name = 'air force 1'
        setProduct(name)
        console.log(product)
    }

    const decreProduct = ()=>{
        if (increDecreShoe > 0) {
            const num = increDecreShoe - 1
            console.log(increDecreShoe)
            return setIncreDecreShoe(num)
            
        }
        console.log('less than 0')
    }



  return (
    <div style={{backgroundColor: 'beige', padding: '20px', display: 'flex', flexDirection: 'row', gap: '20px', borderRadius:'20px' }}>
      <div style={{border:'solid 2px white', borderRadius:'20px'}}>
        <p><img   src={blackShoe} alt={'black shoe'} style={{ width: '200px', margin: '20px' }} /></p>
        <button style={{ backgroundColor: 'black', color: 'whitesmoke',width: '30px', margin: '10px'}} onClick={increProduct}>+</button>
        <button style={{ backgroundColor: 'brown', color: 'orangered' , margin: '10px'}} onClick={addCart}>ADD CART</button>
        <button style={{ backgroundColor: 'black', color: 'whitesmoke',width: '30px', margin: '10px'} } onClick={decreProduct}>-</button>
      </div>

      <div>
        <AddToCartContext.Provider value={product}>
            <totalCartContext.Provider value={increDecreShoe}>

              <increProductContext.Provider value={increProduct}>
                 <decreProductContext.Provider value={decreProduct}>
                     <AddShoeCart />

                 </decreProductContext.Provider>

              </increProductContext.Provider>
                  
            </totalCartContext.Provider>

        </AddToCartContext.Provider>
      </div>
      
    </div>
  )
}

export default DisplayShoe


