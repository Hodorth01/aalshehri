import { Link } from "react-router-dom";
interface Props{
    src:string;
    title:string;
    alt:string;
    path:string;

}

 const Category = (props:Props) => {

    return (
        <div className="col-sm-12 col-md-4 px-4 pt-5 mt-5" data-aos="zoom-in" data-aos-delay={200}>
            <div className="text-center  border-0 p-1">
                <Link to={props.path} style={{ textDecoration: "none" }}>
                    <img className="category-image w-100" src={props.src} alt={props.alt} loading="lazy"/>
                    <h1 className="display-5 text-black"> {props.title} </h1>
                </Link>
            </div>
        </div>

    );
}
export default Category;
