import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Caroline's Playlist</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style= {{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "80px"
                }}>New Song</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;