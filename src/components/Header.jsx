import { Link, Outlet } from 'react-router'

export const Header = () => {
  return (
    <div className="flex px-5 h-12.5 items-center border-b border-gray-200 bg-white justify-between">
      <p className="text-xl font-bold">ZERO100 Admin</p>
      <Link to={'/signIn'} className="font-medium text-gray-500">로그아웃</Link>
    </div>
  )
}
