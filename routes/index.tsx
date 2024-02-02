import type React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./home"
import Login from "./login"
import './index.css'
import { useEffect } from "react"
import { setItemInStorage } from "~app/utils/storage"

export const Routing: React.FC = () => {

  useEffect(() => {
    chrome.storage.local.get(["contentScrapped"], async (result) => {
      await setItemInStorage('paragraphs', result.contentScrapped || result);
    })
  }, [])

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
