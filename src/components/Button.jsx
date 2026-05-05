import clsx from 'clsx'

export const Button = ({ children, isFill, width }) => {
  return (
    <button
      className={clsx(
        'h-9 rounded-lg text-center',
        width,
        isFill ? 'bg-black text-white' : 'outline outline-gray-200',
      )}
    >
      {children}
    </button>
  )
}
