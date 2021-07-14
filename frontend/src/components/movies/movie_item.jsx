import React from "react"
import {Link} from "react-router-dom"

class Movie extends React.Component{

    render(){
        return(
            <div className="movie-item-wrapper">
                <br />
                <div className="movie-box">
                    <p>{this.props.movie.title} </p>
                    <p>Rating:{this.props.movie.rating}</p>
                    <button >Read Review</button>
                    <Link className="write-review-link" to={`/movies/${this.props.movie._id}/review`}>Write Review</Link>
                </div>
            </div>
        )
    }
}

export default Movie