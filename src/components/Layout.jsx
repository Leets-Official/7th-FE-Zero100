import { Outlet } from 'react-router'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { ToastProvider } from './Toast'

export const Layout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 bg-[#f8fafb]">
        <Sidebar />
        <div className="flex-1 p-8">
          <ToastProvider>
            <Outlet />
          </ToastProvider>
        </div>
      </div>
      
    </div>
  )
}
