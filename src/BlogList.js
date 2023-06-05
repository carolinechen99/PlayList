import { Link } from "react-router-dom";

const BlogList = ({blogProp, name}) => {
    const blogs = blogProp

    return ( 
        <div className="blog-list">
            <h2>{ name }</h2>
        { blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/songs/${blog.id}`}>
                    <h2>{ blog.name }</h2>
                    <p>Song by { blog.artist }</p>
                </Link>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;