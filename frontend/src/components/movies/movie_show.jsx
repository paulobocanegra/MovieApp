import React from 'react'

class MovieShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchMovie(this.props.movieId)
    }

    render(){
        if(!this.props.movieId){
            return null
        }
        if(!this.props.reviews){
            return null
        }
        return (
            <div>
                {/* {this.props.reviews.forEach((review => {
                    console.log(review)
                    return []
                }))} */}
                Movie
            </div>
        )
    }
}

export default MovieShow