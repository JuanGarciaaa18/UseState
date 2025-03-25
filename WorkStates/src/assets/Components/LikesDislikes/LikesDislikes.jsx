import React from 'react';
import './LikesDislikes.css';
import { useState } from "react"


export const LikesDislikes = () => {
  
  const [Like, setLike] = useState(0)
  const [DisLike, setDisLike] = useState(0)

  return (
    <div className="LikesDislikes">      
      <button className="btn" onClick={ ()=> setLike(Like + 1) }>Like</button>
      <h1 className="Number">{Like}</h1>
      <button className="btn" onClick={()=> setDisLike(DisLike + 1)}>Dislike</button>
      <h1 className="Number">{DisLike}</h1>
    </div>
  )
}