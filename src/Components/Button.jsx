export default function Button({ type = "button", onClick, children, className}){
    return (
        <button type={type} onClick={onClick} 
        className={className}> {children} </button>
    );
}