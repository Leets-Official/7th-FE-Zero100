
import clsx from "clsx"
import { NavLink } from 'react-router'
export const FliterButtons = ({onClick, children, className}) => {
    return <div>
        <NavLink to="/all" className={({ isActive }) => clsx(
          'w-30 inline-block h-8 text-center leading-8 rounded', isActive ? 'bg-black text-white' : 'outline outline-gray-300',
        )}> All </NavLink>

        <NavLink to="/active" className={({ isActive }) => clsx(
          'w-30 inline-block h-8 text-center leading-8 rounded mx-2', isActive ? 'bg-black text-white' : 'outline outline-gray-300',
        )}> Active </NavLink>

        <NavLink to="/completed" className={({ isActive }) => clsx(
          'w-30 inline-block h-8 text-center leading-8 rounded', isActive ? 'bg-black text-white' : 'outline outline-gray-300',
        )}> Completed </NavLink>
    </div>
}