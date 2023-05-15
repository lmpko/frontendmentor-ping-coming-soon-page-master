import React from 'react'
import {ImFacebook, ImTwitter,ImInstagram} from "react-icons/im"

const SocialMenuComponent = () => {
  return (
    <ul>
        <li><a href="#" aria-label='facebook'><ImFacebook/></a></li>
        <li><a href="#" aria-label='twitter'><ImTwitter/></a></li>
        <li><a href="#" aria-label='instagram'><ImInstagram/></a></li>
    </ul>
  )
}

export default SocialMenuComponent