export default function Input({ value, onChange, placeholder, className }){
    return (
        <input type="text" value={value}
        onChange = {(e) => onChange(e.target.value)}
        placeholder = {placeholder}
        className = {className}/>
    );
}