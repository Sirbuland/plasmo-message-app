import type React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./home"
import Login from "./login"
import './index.css'
import { useEffect } from "react"
import { setItemInStorage } from "~app/utils/storage"

export const Routing: React.FC = () => {

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.dataFromBackground) {
        const data = message.dataFromBackground;
        setItemInStorage('paragraphs', data);
      }
    });
  }, []);

  return (
    <div className='main'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}
