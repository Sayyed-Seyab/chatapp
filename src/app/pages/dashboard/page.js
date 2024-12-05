import React from 'react'
import './page.css';
import Sidebarmenu from '@/app/components/Sidebarmenu';
import Topmenu from '@/app/components/Topmenu';
import Chatlist from '@/app/components/Chatlist';
import ChatWelcomeMsg from '@/app/components/ChatWelcomeMsg';
import Chat from '@/app/components/Chat';

export default function page() {
  return (
    <div className='dashboard'>
        <div className="col-1">
          <div className='sidebar'>  
            <Sidebarmenu/>
             </div>
        </div>

        <div className="col-2">
     <div>
     <Topmenu/>
     </div>
           
       
        <div className="chat">
            <div className="chatlist">
               <Chatlist/>
            </div>
            <div className="wlcomMsg">
              {/* <ChatWelcomeMsg/> */}
              <Chat/>
            </div>

            <div className='profile'>
               profile
               </div>
        </div>
        </div>
    </div>
  )
}
