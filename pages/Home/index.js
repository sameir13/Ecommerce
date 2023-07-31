import React from 'react'
import Header from "../../components/Header";
import Products from "../../components/Products";
import Footer from "../../components/Footer";
import BannerImage from "../../components/BannerImage";
import MidProducts from "../../components/MidProducts";
import Filter from '../../components/Filter';

const index = () => {
  return (
    <div>
      <Header />
      <Products/>
      <MidProducts/>
      <Products/>
      <Filter/>
      <BannerImage/>
      <Footer/>
    </div>
  )
}

export default index