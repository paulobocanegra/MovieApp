import React from "react"
import Movie from "./movie_item"

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
            <div className="product-index-container">
                {this.props.movies.map((movie) => (<Movie
                    movie={movie}
                    key={movie.id}
                    logout={this.props.logout}
                />))}
            </div>
        )
    }
}

export default MoviesIndex;
