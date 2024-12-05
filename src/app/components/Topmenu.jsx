import React from 'react'
import './topmenu.css'

export default function Topmenu() {
  return (
    <div>
        <div className="top-bar">
    <div>  <h1 className="title">Live Chat</h1></div>

      <div className="search-container">
      {/* <img
            src="/Search.png"
            alt="Search"
            className="search-icon"
          /> */}
        <input
          type="text"
          className="search-input"
          placeholder="Search or start new chat"
        />
      </div>

    </div>
    </div>
  )
}
