import React from "react"
import Movie from "./movie_item"

class MoviesIndex extends React.Component{

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        if (!this.props.movies) {
            return null
        }
        return (
            <div className="product-index-container">
                {this.props.movies.map((movie) => (<Movie
                    movie={movie}
                    key={movie.id}
                />))}
            </div>
        )
    }
}

export default MoviesIndex;
