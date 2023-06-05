import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [artist, setArtist] = useState('SZA');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const song = {name, lyrics, artist };

        setIsPending(true);

        fetch('http://localhost:8000/songs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(song)
        }).then(()=>{
            console.log('new song added');
            setIsPending(false);
            history.push('/');
        })


    }


    return ( 
        <div className="create">
            <h2>Add a New Song</h2>
            <form onSubmit={handleSubmit}>
                <label>Song name:</label>
                <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Lyrics: </label>
                <textarea 
                    required
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                ></textarea>

                <label>Artist: </label>
                <select 
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                >
                    <option value="SZA">SZA</option>
                    <option value="Selena Gomez">Selena Gomez</option>
                </select>
                {!isPending && <button>Add Song</button>}
                {isPending && <button disabled>Adding song...</button>}
            </form>
        </div>
     );
}
 
export default Create;