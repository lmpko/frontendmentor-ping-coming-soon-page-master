import React from 'react'
import OverviewComponent from './OverviewComponent'
import FormComponent from './FormComponent'
import FooterComponent from './FooterComponent'
import preview from "/images/illustration-dashboard.png"

const Layout = () => {
  return (
    <>
      <OverviewComponent/>
      <FormComponent />
      <img src={preview} alt="preview" className='preview-img'/>
      <FooterComponent/>
    </>
  )
}

export default Layout