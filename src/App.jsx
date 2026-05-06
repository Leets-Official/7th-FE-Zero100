import { useState } from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router'
import { Dashboard } from './pages/Dashboard'
import { InquiryList } from './pages/InquiryList'
import { InquiryDetail } from './pages/InquiryDetail'
import { InquiryWrite } from './pages/InquiryWrite'
import { MyPage } from './pages/MyPage'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Layout } from './components/Layout'
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
          <Route path="/inquiryWrite" element={<InquiryWrite />} />
          <Route path="/myPage" element={<MyPage />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
