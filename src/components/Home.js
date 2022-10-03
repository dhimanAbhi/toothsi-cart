import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Header from './Header'
import Table from './Table'
import { productsData } from '../utils/productsData'

function Home() {
  const [categoryFilter, setCategoryFilter] = useState('Category')
  const [colorFilter, setColorFilter] = useState('Color')
  const [filteredData, setFilteredData] = useState(productsData)

  useEffect(() => {
    if(categoryFilter ==='Category' && colorFilter === 'Color'){
      setFilteredData(productsData);
    }
    else if(categoryFilter !=='Category' && colorFilter === 'Color'){
      setFilteredData(productsData.filter((data) => {
        return data.category === categoryFilter
      })) 
    }
    else if(categoryFilter ==='Category' && colorFilter !== 'Color'){
      setFilteredData(productsData.filter((data) => {
        return data.color === colorFilter
      })) 
    }
    else if(categoryFilter !=='Category' && colorFilter !== 'Color'){    
      setFilteredData(productsData.filter((data) => {
        return ((data.category === categoryFilter)&&(data.color === colorFilter))
      }))    
    }
  }, [categoryFilter, colorFilter])

  return (
    <Container>
        <Header setFilteredData={setFilteredData} setCategoryFilter={setCategoryFilter} setColorFilter={setColorFilter} />
        <Table filteredData={filteredData}/> 
    </Container>
  )
}

const Container = styled.div`
   
`

export default Home