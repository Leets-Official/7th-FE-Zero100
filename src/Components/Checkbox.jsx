export default function Checkbox({ id, checked, onChange, className}){
    return(
        <input type = "checkbox" id = {id} checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className = {className}/>
    );
}