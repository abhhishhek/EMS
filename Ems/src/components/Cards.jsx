import React from 'react'
import { IoPersonSharp } from "react-icons/io5";

const Cards = (props) => {
  return (
    <div>
        <img src={props.img}/>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Cards
