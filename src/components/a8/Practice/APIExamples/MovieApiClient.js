import React, {useEffect, useState} from "react";

const MovieApiClient = () => {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({title: '', rating: 2.5});

    const onMovieTitleChange = (event) =>
        setMovie({...movie, title: event.target.value});
        console.log("This is the new movie: " + movie.title);

    const createMovieClickHandler = () => {
        // Create a new movie object specifically to be the payload to the server
        const newMovie = {
            ...movie,
            _id: (new Date()).getTime().toString()
        };

        fetch('https://web-dev-node-ayush-2.herokuapp.com/api/movies', {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: { 'content-type': 'application/json' }
        })
            .then(response => response.json())
            .then(movies => {
                setMovies(movies);
            })
    }


    useEffect(() =>
            fetch('https://web-dev-node-ayush-2.herokuapp.com/api/movies')
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);

    const deleteMovie = (movie) =>
        fetch(`https://web-dev-node-ayush-2.herokuapp.com/api/movies/${movie._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));



    const saveMovie = () =>
        fetch(`https://web-dev-node-ayush-2.herokuapp.com/api/movies/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));


    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                <button
                    onClick={saveMovie}
                    className="btn btn-primary ms-2 float-end col-1">
                    Save
                </button>
                <button
                    onClick={createMovieClickHandler}
                    className="btn btn-success float-end col-1" >
                    Create
                </button>
                <input className="form-control"
                       value={movie.title}
                       onChange={onMovieTitleChange}
                       style={{width: "70%"}}/>
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.stars}
                            <button onClick={() => setMovie(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>

                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>


                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;