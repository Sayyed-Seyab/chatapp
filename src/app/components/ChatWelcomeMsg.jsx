import React from 'react'
import './welcome.css';

export default function ChatWelcomeMsg() {
  return (
    <div className="live-chat-container">
    <div className="placeholder-wrapper">
     <div className="wlcmImg">
     <img
        src="/wlcm.png"
        alt="Placeholder"
        className="placeholder-image"
      />
     </div>
      <h2 className="placeholder-heading">
        This is a place to chat to your contacts in all of the contacted channels
      </h2>
      <p className="placeholder-text">
        Every time somebody sends you a message, it will appear here. You can
        change this and more in alive chat settings.
      </p>
      <button className="chat-settings-button">Go to Live Chat Setting</button>
    </div>
  </div>
  )
}
