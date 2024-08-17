import React from 'react'
import Slip from './slip'
import Container from './container'
import Header from './Header'

const Home = () => {
  return (
    <div className=" m-4">
      <Header/>
      
      <div className='flex  justify-between mx-16 '>
     
      <Slip/>
      <Container/>
      </div>
    </div>
  )
}

export default Home