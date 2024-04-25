import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'
import { Content } from '../components/Content'
import { Footer } from '../components/Footer'
import { Product } from '../components/Product'

export const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Content/>
        <Product/>
        <Footer/>
    </div>
  )
}
