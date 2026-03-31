export const Checkbox = ({defaultChecked, onChange, className}) => {
    return (
        <input defaultChecked={defaultChecked} className={className} type="checkbox" onChange={onChange}/>
    )
}