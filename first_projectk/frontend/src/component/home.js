import React from 'react'
import Header from './header'
import Slip from './slip'
import Container from './container'

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