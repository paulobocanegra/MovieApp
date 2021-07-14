import React from "react"
import {Link} from "react-router-dom"

class Movie extends React.Component{

    render(){
        return(
            <div>
                <br />
                Movies
                <br />
                {this.props.movie.title}    Rating:{this.props.movie.rating}
                <button >Read Review</button>
                <Link to={`/movies/${this.props.movie._id}/review`}>Write Review</Link>
            </div>
        )
    }
}

export default Movie