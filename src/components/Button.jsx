import clsx from 'clsx'
import { useNavigate } from 'react-router';

export const Button = ({ children, isFill, width, onClick, to}) => {
  const navigate = useNavigate();

  return (
    <button onClick={ () => {
      onClick && onClick()
      to && navigate(to)
    }} className={clsx('h-10.5 rounded-lg text-center font-medium cursor-pointer', width, 
      isFill ? 'bg-black text-white' : 'border border-gray-200'
    )}>
      {children}
    </button>
  )
}
