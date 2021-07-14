import React from "react"

class Movie extends React.Component{

    render(){
        return(
            <div>
                <button onClick={() => this.props.logout()}>Logout</button>
                Movie
            </div>
        )
    }
}

export default Movie