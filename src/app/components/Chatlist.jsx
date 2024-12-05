import React from 'react'
import './chatlist.css'

export default function Chatlist() {
    const chats = [
        { name: 'Marina Jolly', message: 'Marina is typing...', time: '09:35', status: 2, img: 'https://via.placeholder.com/40' },
        { name: 'Jackson Roy', message: 'Sent a picture', time: '09:35', img: 'https://via.placeholder.com/40' },
        { name: 'Hafsa Shaikh', message: 'Meet me before presentation...', time: '09:35', status: 3, img: 'https://via.placeholder.com/40' },
        { name: 'Alix Joseph', message: 'How did you prepare...', time: '09:35', img: 'https://via.placeholder.com/40' },
        { name: 'College', message: 'What about Wednesday...', time: '09:35', img: 'https://via.placeholder.com/40' },
        { name: 'Rockstar Benj', message: 'Sent an attachment', time: '09:35', img: 'https://via.placeholder.com/40' },
        { name: 'Max Hob', message: 'Next presentation will be...', time: '09:35', img: 'https://via.placeholder.com/40' },
        { name: 'Marina Jolly', message: 'Marina is typing...', time: '09:35', status: 2, img: 'https://via.placeholder.com/40' },
        { name: 'Jackson Roy', message: 'Sent a picture', time: '09:35', img: 'https://via.placeholder.com/40' },
        { name: 'Hafsa Shaikh', message: 'Meet me before presentation...', time: '09:35', status: 3, img: 'https://via.placeholder.com/40' }
    ];
  return (
    <div>
          <div>
                <div className="filter-container">
                    <div className="filter-item">
                        <input type="checkbox" id="all-checkbox" />
                        <label for="all-checkbox">All</label>
                    </div>
                    <div className="filter-item">
                        <label for="open-filter">Open</label>
                        <select id="open-filter">
                            <option value="1000">1000</option>
                        </select>
                    </div>
                    <div className="filter-icons">
                    <img src='/pin.png'/>
                       <img src='/togle.png'/>
                       
                    </div>
                </div>
            </div>
            
         <div className="chat-container">
            {chats.map((chat, index) => (
                <div className="chat-item" key={index}>
                    <img src="/chatimg.png" alt="Profile" />
                    <div className="chat-info">
                        <div className="name">{chat.name}</div>
                        <div className="message-preview">{chat.message}</div>
                    </div>
                   <div className="chatinfo">
                   <div className="chat-timestamp">{chat.time}</div>
                   {chat.status && <div className="chat-status">{chat.status}</div>}
                   </div>
                </div>
            ))}
        </div>
    </div>
  )
}
