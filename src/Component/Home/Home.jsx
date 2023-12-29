import React from 'react'
import Catrgories from '../Categories/Catrgories'
import HomeHeader from './HomeHeader/HomeHeader'
import Products from './ProductsSection/Products'

export default function Home() {
  return (
    <>
      <Catrgories />
      <HomeHeader />
      <Products />
    </>
  )
}
