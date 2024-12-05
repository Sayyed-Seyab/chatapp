import React from 'react'
import './chat.css';

export default function Chat() {
  return (
   
        <div class="Chat-container">
    <div class="chat-header">
        <div class="user-info">
            <img src="user.png" alt="User Avatar"/>
            <span class="user-name">Unassigned</span>
        </div>
        <div class="chat-actions">
            <i class="fas fa-check"></i>
            <i class="fas fa-ellipsis-v"></i>
        </div>
    </div>

    <div class="chat-messages">
        <div class="message-container">
            <p class="message-text">Hi there, How are you?</p>
            <p class="message-time">12:24 PM</p>
        </div>
        <div class="message-container">
            <p class="message-text">Waiting for your reply. As I have to go back soon, I have to travel long distance.</p>
            <p class="message-time">12:25 PM</p>
        </div>
        <div class="message-container message-right">
            <p class="response-text">Hi! I am coming there in few minutes. Please wait!!! I am in taxi right now.</p>
            <p class="message-time">12:28 PM</p>
        </div>
        <div class="message-container">
            <p class="message-text">Thank you very much, I am waiting here at StarBuck cafe.</p>
            <p class="message-time">12:35 PM</p>
        </div>
        <div class="message-container">
            <p class="message-text">Hi there, How are you?</p>
            <p class="message-time">12:24 PM</p>
        </div>
        <div class="message-container">
            <p class="message-text">Waiting for your reply. As I have to go back soon, I have to travel long distance.</p>
            <p class="message-time">12:25 PM</p>
        </div>
    </div>
    <div class="message-input">
        <textarea placeholder="Type a message"></textarea>
        <div class="input-actions">
            <i class="far fa-smile"></i>
            <button>Ask to edit</button>
            <i class="fas fa-code"></i>
            <button>Send</button>
        </div>
    </div>
</div>
  )
}
