import { NavLink } from 'react-router'
import clsx from 'clsx'

export const Sidebar = () => {
  return (
    <div className="min-w-60 border-r border-gray-200 bg-white">
      <ul className="mt-4">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => clsx(
            'flex h-11 c items-center pl-5', isActive ? 'bg-gray-100 font-semibold' : 'font-medium'
          )}> 대시보드 홈 </NavLink>
        </li>
        <li>
          <NavLink to="/inquiryList" className={({ isActive }) => clsx(
            'flex h-11 items-center pl-5', isActive ? 'bg-gray-100 font-semibold' : 'font-medium'
          )}> 문의 </NavLink>
        </li>
        <li>
          <NavLink to="" className={({ isActive }) => clsx(
            'flex h-11 items-center pl-5', isActive ? 'bg-gray-100 font-semibold' : 'font-medium'
          )}> 마이페이지 </NavLink>
        </li>
      </ul>
    </div>
  )
}
