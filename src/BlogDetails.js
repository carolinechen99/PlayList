import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: song, isPending, error } = useFetch('http://localhost:8000/songs/?id=' + id);
    console.log({song});
    const history = useHistory();

    const handleClick= () => {
        fetch('http://localhost:8000/songs/' + song[0].id, {
            method: "DELETE"
        }).then(()=>{
            history.push('/');
        })
    }


    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { song && (
                <article>
                    <h2>{song[0].name}</h2>
                    <p>Written by { song[0].artist }</p>
                    <div>{ song[0].lyrics }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>


            )}
        </div>
     );

     
}
 
export default BlogDetails;