import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
function Row({data, productQuantities, setproductQuantities}) {
    localStorage.clear()

    const updateQuantity = (value, id) => {
        setproductQuantities(productQuantities.map((product) =>{ 
            return (product.id === id)?{id, quantity:value}:product
        }))

    }

    

  return (
    <RowDiv className='row mt-3'>
        <div className='col-1 col-sm-2  m-0'>
            <img src={data.image} />
        </div>
        <div className='col-3 col-sm-2 '>
            <a href="#nowhere">{data.name}</a>
        </div>
        <div className='col-2 col-sm-2 '>
            {data.color}
        </div>
        <div className='col-2 col-sm-2'>
            {data.inStock?<div style={{color:"rgb(0, 186, 16)"}}><EmojiEmotionsIcon/> In stock</div>:<div style={{color:"rgb(209, 0, 0)"}}><SentimentVeryDissatisfiedIcon/> Out of stock </div>}
        </div>
        <div className='col-1 p-0 col-sm-2'>
            ${data.price}
        </div>
        <div className='col-3 col-sm-2 d-flex align-items-start justify-content-end'>
            <input 
                type="text" 
                id={`${data.id}-quantity`} 
                value={productQuantities.filter((product) => product.id === data.id)[0].quantity}
                onChange={(e) => updateQuantity(e.target.value, data.id)}         
            />
            <div className='d-flex justify-content-center align-items-center ms-2' style={{width:"60px", height:"30px", backgroundColor:"rgb(67, 67, 67)"}}>
                <Cart />
            </div>
            <input className='allChecks mt-2'  type="checkbox" id={data.id}/>
        </div>
    </RowDiv>
  )
}

const RowDiv = styled.div`
    input{
        width:50px;
    }
    img{
        width: 76px;
        height: 90px;
        box-shadow: 0px 1px 11px 0px rgb(73 73 73);
    }
`

const Cart = styled(ShoppingCartIcon)`
    color: white;
`

export default Row