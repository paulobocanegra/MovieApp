import "./movies.css"
import React from "react"
import Movie from "./movie_item"
import {Link} from "react-router-dom"

class MoviesIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        if (!this.props.movies) {
            return null
        }
        return (
            <div className="movies-index-container">
                <div className="top-level">
                    <h2>Movies</h2>
                    <button className="logout-button" onClick={() => this.props.logout()}>Logout</button>
                </div>
                <Link className="add-movie-link" to="/movies/new">Add a New Movie</Link>
                {this.props.movies.map((movie) => (<Movie
                    movie={movie}
                    key={movie._id}
                />))}
            </div>
        )
    }
}

export default MoviesIndex;
