import React, {useState} from 'react'
import TableHeader from './TableHeader'
import Row from './Row'
function Table({filteredData}) {
  const [productQuantities, setproductQuantities] = useState(
    filteredData.map((data) => {
      return {id:data.id, quantity:1}
    })
  ) 
  
  return (
    <div>
        <TableHeader/>
        {
          filteredData.map((data, index) => {
            return(
              <Row 
                data={data}
                productQuantities={productQuantities}
                setproductQuantities={setproductQuantities}
              />
            )})
        }
    </div>
  )
}

export default Table