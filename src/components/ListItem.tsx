interface Props{
  icon:string;
  text:string;
  href:string;
}
export const ListItem = (props:Props)=>{
    return(
        <li className="list-item d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center justify-content-start " style={{width:"250px"}}>
                <i className={`fs-2 ${props.icon} me-2`} aria-hidden="true"></i>
                    <a href={props.href} className="f1 ">
                        <span className="f2" style={{fontSize: "1.2rem"}}>{props.text}</span>
                    </a>
            </div>
        </li>
    )
}