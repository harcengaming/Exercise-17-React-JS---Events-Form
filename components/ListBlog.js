import { Link } from "react-router-dom";

function ListBlog() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/blog/html" className="colorlink">HTML</Link>
                </li>
                <li>
                    <Link to="/blog/css" className="colorlink">CSS</Link>
                </li>
                <li>
                    <Link to="/blog/javascript" className="colorlink">JavaScript</Link>
                </li>
            </ul>
        </div>
    )
}

export default ListBlog;
