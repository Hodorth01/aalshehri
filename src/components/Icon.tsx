interface Props{
    href:string
    icon:string
}
const Icon = (props:Props)=>{
    return(
        <>
            <li >
                <a href={props.href} target="_blank" className="contact-icon">
                    <i className={props.icon}></i>
                </a>
            </li>
        </>
    )
}
export default Icon;