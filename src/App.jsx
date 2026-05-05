import { useState } from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router'
import { Dashboard } from './pages/Dashboard.jsx'
import { InquiryList } from './pages/InquiryList.jsx'
import { InquiryDetail } from './pages/InquiryDetail.jsx'
import { Layout } from './components/Layout.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inquiryList" element={<InquiryList />} />
          <Route path="/inquiryDetail" element={<InquiryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
