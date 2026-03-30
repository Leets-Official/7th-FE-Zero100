export default function Text({ children, tagName: Tag = "p", className }){
    return (<Tag className = { className }>{children}</Tag>);
}