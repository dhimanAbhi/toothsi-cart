import React, {useState} from 'react'
import styled from 'styled-components'
import ClearIcon from '@mui/icons-material/Clear';
import { productsData } from '../utils/productsData';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
function Checkout() {

    let cartItemsId = JSON.parse(localStorage.getItem('cartItems'))
    
    
    const [cartItems, setcartItems] = useState(cartItemsId.map((item) => {
        const productData = productsData.filter((product) => {
            return product.id === Number(item.id)
        })
        return {...productData[0], quantity: item.quantity }
    }))

    let totalOfProducts=0;
    cartItems.map((item) => {
        totalOfProducts += Number(item.price)*Number(item.quantity)
    })
    const [total, setTotal] = useState(totalOfProducts)
    

    const deleteItem = (id) => {
        setcartItems(cartItems.filter((item) => item.id !== id))

        cartItems.map((item) => {
            totalOfProducts += Number(item.price)*Number(item.quantity)
        })
        setTotal(totalOfProducts)
        localStorage.setItem('cartItems',JSON.stringify(cartItems))
    }

    const updateQuant = (operation, id) => {
        setcartItems(cartItems.map((item) => {
           if(item.id === id){
                if(operation === 'minus' && item.quantity > 0){
                    return {...item, quantity:(Number(item.quantity)-1)}
                }
                else if(operation === 'plus'){
                    return {...item, quantity:(Number(item.quantity)+1)}
                }
           }
           return item
        }))
        cartItems.map((item) => {
            totalOfProducts += Number(item.price)*Number(item.quantity)
        })
        setTotal(totalOfProducts)
    }

    return (
        <div className='d-flex'>
            <CheckoutTable>
                <div style={{borderBottom:"0.15rem solid rgb(227, 227, 227)"}} className='row mx-3 py-5 fw-bold'>
                    <div className='col-5 text-center'>Product</div>
                    <div className='col-2'>Price</div>
                    <div className='col-3'>Quantity</div>
                    <div className='col-2'>Subtotal</div>
                </div> 
                {
                    cartItems.map((cartItem) => {
                        const subtotal = Number(cartItem.price)*Number(cartItem.quantity);
                        return (
                            <CheckoutProduct className='row mx-3'>
                                <ItemCell className='col-5 d-flex justify-content-start align-items-center pe-5'>
                                    
                                        <RemoveProduct className='me-5' onClick={() => deleteItem(cartItem.id)}/>
                                        <img src={cartItem.image} />                    
                                    
                                    <div className='ms-5 fw-bold'>{cartItem.name}</div>
                                </ItemCell>
                                <ItemCell className='col-2 d-flex justify-content-between align-items-center' >{cartItem.price}</ItemCell>
                                <ItemCell className='col-3 d-flex justify-content-between align-items-center'>
                                    <QuantMod className='d-flex justify-content-between'>
                                        <Minus onClick={() => updateQuant('minus', cartItem.id)}/>
                                        {cartItem.quantity}
                                        <Plus onClick={() => updateQuant('plus', cartItem.id)}/>
                                    </QuantMod>
                                </ItemCell>
                                <ItemCell className='col-2 d-flex justify-content-between align-items-center '>${subtotal}</ItemCell>
                            </CheckoutProduct>
                    )})
                }
            </CheckoutTable>
            <CartTotal>
                <div className='fs-3'>
                    Cart totals
                </div>
                <div className='d-flex  my-3  justify-content-between fw-semibold'>
                    <div>Subtotal</div>
                    <div className='fw-light' style={{color:"rgb(1, 144, 216)"}}>${total}</div>
                </div>
                <div className='d-flex my-3 justify-content-between'>
                    <div className='fs-5'>Total</div>
                    <div className='fw-bold' style={{color:"rgb(1, 144, 216)"}}>${total}</div>
                </div>
                <Proceed>PROCEED TO CHECKOUT</Proceed>
            </CartTotal>
        </div>
    )
}

const CheckoutTable = styled.div`
    width:70%;
`

const ItemCell = styled.div`
`

const Proceed = styled.div`
    text-align:center;
    width: 100%;
    border: 0;
    background-color: #005be0;
    color: white;
    padding: 12px 0;
    border-radius: 26px;
    font-weight:700;
`
const QuantMod = styled.div`
    border: 1px solid rgb(159 159 159);
    width: 98px;
    padding: 10px 9px;
    border-radius: 25px;
`
const CheckoutProduct = styled.div`
    border-bottom:0.15rem solid rgb(227, 227, 227);
    margin-top: 40px;
    padding-bottom: 40px;

    img{
        width: 76px;
        height: 90px;
        box-shadow: 0px 1px 11px 0px rgb(73 73 73);
    }
`

const CartTotal = styled.div`
    width: 30%;
    border: 1px solid #cecece;
    height: 230px;
    padding: 20px;
    border-radius 5px;
`

const RemoveProduct = styled(ClearIcon)`
    transform: scale(0.8);
    opacity: 0.8;
    cursor:pointer;
`

const Minus = styled(RemoveIcon)`
    transform: scale(0.8);
    cursor:pointer;
`
const Plus = styled(AddIcon)`
    transform: scale(0.8);
    cursor:pointer;
`

export default Checkout