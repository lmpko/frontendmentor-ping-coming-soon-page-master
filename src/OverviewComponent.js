import React from 'react'
import logo from "/images/logo.svg"

const OverviewComponent = () => {
  return (
    <section>
      <img src={logo} alt=""/>
      <h1>We are launching <span>soon!</span></h1>
      <p>Subscribe and get notified</p>
    </section>
  )
}

export default OverviewComponent