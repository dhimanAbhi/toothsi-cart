import React from 'react'
import styled from 'styled-components'
import ReplayIcon from '@mui/icons-material/Replay';
import { productsData } from '../utils/productsData';
import { Link } from 'react-router-dom';

function Header({setFilteredData, setCategoryFilter, setColorFilter}) {

  const categoryChange = () => {
    const catVal = document.getElementById("category").value;
    setCategoryFilter(catVal);
  }

  const colorChange = () => {
    const colorVal = document.getElementById("color").value;
    setColorFilter(colorVal);
  }

  const reset = () => {
    document.getElementById("category").value = "none";
    document.getElementById("color").value = "none";
    document.getElementById("search").value = '';
    setFilteredData(productsData);
    setCategoryFilter('Category');
    setColorFilter('Color');
  }

  const searchProduct = (productName) => {
    setFilteredData(productsData.filter((data) => {
      if(productName ==='')
        return productsData;
      return (data.name.toLowerCase()) === (productName.toLowerCase())
    }))
  }

  const addToCart = () => {
    const selectedItems = Array.prototype.slice.call(document.getElementsByClassName('allChecks')).filter((checkbox) => checkbox.checked == true);    
    const cartItemVals = selectedItems.map((item) => {
      return {id:item.id, quantity:  document.getElementById(`${item.id}-quantity`).value}
    })

    localStorage.setItem('cartItems',JSON.stringify(cartItemVals))
  }

  return (
    <HeadDiv>
      <Filters>
          <select onChange={categoryChange} id="category" class="form-select me-2 mb-3" aria-label="Default select example">
            <option value="none" selected disabled>-Category</option>
            <option value="hoodie">Hoodie</option>
            <option value="shirt">Shirt</option>
            <option value="trackpants">Trackpants</option>
          </select>

          <select onChange={colorChange} id="color" class="form-select me-2 mb-3" aria-label="Default select example">
            <option value="none" selected disabled>-Color</option>
            <option value="Pink">Pink</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
            <option value="Green">Green</option>
          </select>
        <div className='ms-2 mb-3 d-flex align-center'>
          <Reload onClick={reset}/>
          Reset
        </div>
      </Filters>

      <SearchAndCart>
        <label className='ms-2 mb-3'  for="search">Search:</label>
        <input className='form-control ms-2 mb-3' placeholder='Search name' id="search" type="text" onChange={(e) => searchProduct(e.target.value)}/>
        <Link className='ms-4 mb-3' onClick={addToCart} to='/cart/checkout' id="addToCart">Add To Cart</Link>
      </SearchAndCart>
    </HeadDiv>
  )
}

const HeadDiv = styled.div`
  height:40px;
  display:flex;
  justify-content:space-between;
`
const Filters = styled.div`
  display:flex;
  align-items:center;
  div{
    width:150px;
    cursor:pointer;
  }
`
const Reload = styled(ReplayIcon)`
  transform:rotate(-45deg);
`;

const SearchAndCart = styled.div`
  display:flex;
  align-items:center;

  div{
    display:flex;
  }

  #addToCart{
    width: 232px;
    text-decoration: none;
    padding: 6px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:600;
    background: rgb(0, 140, 209);
    color:white;
    border:0;
  }

  
  
`

export default Header