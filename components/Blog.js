import { useParams } from "react-router-dom";

function Blog() {
    const {title} = useParams()

    console.log(title);

    return (
        <div>
            <h1>Blog {title}</h1>
        </div>
    )
}

export default Blog;
