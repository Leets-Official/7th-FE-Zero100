import { Button } from '../components/Button'
import { createContext, useState, useContext } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [msg, setMsg] = useState(null)

  const showToast = (text) => {
    setMsg(text)
    setTimeout(() => setMsg(null), 3000)
  }

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {msg && <div className="px-4 fixed bottom-10 right-6 w-75 h-12 rounded-lg border border-gray-100 bg-white shadow-[0_0_12px_rgba(0,0,0,0.07)] flex items-center">
        {/* 아이콘  svg*/}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
        <p className='font-medium ml-2.5'>{msg}</p>
      </div>}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);