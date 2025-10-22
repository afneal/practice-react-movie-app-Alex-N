
import { useState } from 'react';
import { Circles } from 'react-loader-spinner';

export default function FetchButton() {
    const [isLoading, setIsloading] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([])
    const [selectedGenre, setSelectedGenre] = useState("")

    const movies = [
        { genre: "action", titles: ["Terminator", "The Matrix"] },
        { genre: "comedy", titles: ["The Mask", "Coming to America"] },
        { genre: "drama", titles: ["The Godfather", "Goodfellas"] },
    ];


    const dropDownList = () => {
        return (
            <div id="dropDownList">
                <select onChange={(event) => setSelectedGenre(event.target.value)} value={selectedGenre}>
                    <option value="">Select a genre</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                </select>
            </div>

        )
    }

    const handleClick = () => {
        setIsloading(true);
        setTimeout(() => {
            if (selectedGenre === "Select a genre") {
                setFilteredMovies("");
            } else {
                const filtered = movies.filter(movie => movie.genre === selectedGenre);
                setFilteredMovies(filtered);
            }
            setIsloading(false);
        }, 1000);
    };

    return (
        <div>
            {dropDownList()}
            <button onClick={handleClick}>Show Movies</button>
            {isLoading ? ( <><h3>Movie List is Loading...</h3><Circles/> </>) : null}
            
            {!isLoading && filteredMovies.length > 0 && (
                <div>
                    <ul>
                        
                        {filteredMovies.map((movie) => (
                            <li >
                                <h3>{movie.titles.map((title) => (
                                    <li>{title}</li>
                                ))} </h3>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
    {!isLoading && filteredMovies.length === 0 && <h3>No Movies to Display. Please select a genre</h3>}
        </div>
    )
}

