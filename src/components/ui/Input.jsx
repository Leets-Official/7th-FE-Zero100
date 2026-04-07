export const Input = ({ref, defaultValue, onChange, className, placeholder}) => {
    return (
        <input ref={ref} placeholder={placeholder} className={className} defaultValue={defaultValue} onChange={onChange} />
    )
}