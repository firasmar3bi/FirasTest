import React from 'react'
import Catrgories from '../Categories/Catrgories.jsx'
import HomeHeader from './HomeHeader/HomeHeader.jsx'
import Products from './ProductsSection/Products.jsx'

export default function Home() {
  return (
    <>
      <Catrgories />
      <HomeHeader />
      <Products />
    </>
  )
}
