import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage, NotFoundPage, UserPage } from "./pages"
import { Store } from "./store"

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="user/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Store>
  )
}

export default App
