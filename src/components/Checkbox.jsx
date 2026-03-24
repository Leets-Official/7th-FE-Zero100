export const Checkbox = ({defaultChecked, onChange}) => {
    return (
        <input defaultChecked={defaultChecked} type="checkbox" onChange={onChange}/>
    )
}