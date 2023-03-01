import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"



export default function LandingPage() {
  return (
      <div className="lp">
        <h1>PI HENRRY</h1>
        <h2>POKEMON</h2>
      <div>
      </div>
        <Link to="/home">
          <button className="button"> HOME </button>
        </Link>
      </div>
 
  )
}