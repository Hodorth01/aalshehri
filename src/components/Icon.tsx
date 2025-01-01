interface Props{
    href:string
    icon:string
}
export const Icon = (props:Props)=>{
    return(
        <>
            <li>
                <a href={props.href} target="_blank" className="contact-icon">
                    <i className={props.icon}></i>
                </a>
            </li>
        </>
    )
}