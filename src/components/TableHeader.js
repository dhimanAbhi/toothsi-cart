import React from 'react'
import styled from 'styled-components'
function TableHeader() {
  return (
    <TbHeader className='row'>
        <div className='col-1 col-sm-2 px-3 p-2 fw-bold'>
            Image
        </div>
        <div className='col-3  col-sm-2 p-2 fw-bold'>
            Name
        </div>
        <div className='col-2 col-sm-2 p-2 fw-bold'>
            Color
        </div>
        <div className='col-2 col-sm-2 p-2 fw-bold'>
            Stock
        </div>
        <div className='col-1 col-sm-2 p-2 fw-bold'>
            Price
        </div>
        <div className='col-3 col-sm-2 px-3 p-2 fw-bold text-end '>
            Buy
        </div>
    </TbHeader>
  )
}

const TbHeader = styled.div`
    width:100%;
    background: rgb(245, 245, 245);
    border-bottom:0.15rem solid rgb(109, 109, 109);
    color:rgb(76, 76, 76););
    margin: 0;
`

export default TableHeader