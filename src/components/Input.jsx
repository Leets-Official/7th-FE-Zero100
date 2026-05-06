export const Input = ({ placeholder, height, onChange, outLine }) => {
    return (
        <input onChange={onChange} className={`${height} ${outLine} w-full bg-[#f8fafb] rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 px-3`} placeholder={placeholder} />
    )
}