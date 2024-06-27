import React, {useContext} from 'react'
import {AddToCartContext,totalCartContext,increProductContext,decreProductContext} from "./displayShoe";



const AddShoeCart = () => {

    const product = useContext(AddToCartContext)

    const increDecreShoe = useContext(totalCartContext)

    const increProduct = useContext(increProductContext)

    const decreProduct = useContext(decreProductContext)



  return (
    <div style={{border:'solid 2px white', display: 'flex', flexDirection: 'column', rowGap: '20px', alignItems: 'center', width:'250px', height: '400px', borderRadius:'20px'}}>
        <h2 style={{color: 'black'}}>product</h2>
        <p style={{color: 'orangered'}}>{product}</p>
        <h3>Total items</h3>
        <p style={{color: 'orangered'}}>{increDecreShoe}</p>

        <div style={{display: 'flex', flexDirection: 'row', columnGap: '20px'}}>

        <button style={{ backgroundColor: 'black', color: 'whitesmoke',width: '30px', margin: '10px'}} onClick={increProduct}>+</button>
       
        <button style={{ backgroundColor: 'black', color: 'whitesmoke',width: '30px', margin: '10px'} } onClick={decreProduct}>-</button>
        </div>
    </div>
  )
}

export default AddShoeCart
