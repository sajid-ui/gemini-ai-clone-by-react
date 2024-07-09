import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
const Sidebar = () => {

  const[extended,setextended] = useState(false);

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setextended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=""></img>
            <div className="new-chat">
              <img src={assets.plus_icon} alt=""></img>
              {extended?<p>New chat</p>:null}
            </div>
            {extended
            ?<div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt=""></img>
              <p>what is react...</p>
            </div>
          </div>
          : null
            }
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
              <img src={assets.question_icon} alt=""></img>
              {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.history_icon} alt=""></img>
              {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.setting_icon} alt=""></img>
              {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar