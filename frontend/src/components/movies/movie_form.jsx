import React from 'react'

class MovieForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            name: this.props.currentUser.email,
            rating: 1,
            review: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let movie = {
            title: this.state.title,
            rating: this.state.rating,
            reviews: [this.state.review],
            name: this.state.name,
            // user: this.props.currentUser
        }
        this.props.composeMovie(movie)
            .then(this.props.history.push("/movies"));
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={() => this.props.logout()}>Logout</button>
                    Submit a Movie and a Review 
                    <br />
                    <label>Movie Tite:
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={this.update("title")}
                            placeholder=""
                        />
                    </label>
                    <br />
                    <label>Your Name:
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update("name")}
                        />
                    </label>
                    <br />
                    <label>Rating
                        <select name="ratings" id="rating" onChange={this.update("rating")}  >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <br />
                    <label>Your Review:
                        <textarea
                            value={this.state.review}
                            onChange={this.update("review")}
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default MovieForm