import "./review.css"
import React from 'react';

class CreateReview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            name: "",
            rating: 1,
            body: "",
            user: this.props.currentUser_id
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = {
            title: this.state.title,
            name: this.state.name,
            rating: this.state.rating,
            body: this.state.body,
        }

        review.user = this.props.currentUser
        review.movie = this.props.movieId
        
        this.props.composeReview(review)
            .then(this.props.history.push(`/movies`))
            // console.log(this.props.movieId)
    }
    
    handleUpdate(field) {
        return (e) =>
            this.setState({[field]: e.currentTarget.value });
    }

    render() {
        return (
        <div className="create-review-wrapper">
            <h2>Wite New Review{this.state.name}</h2>
            <form className="create-review-form" onSubmit={this.handleSubmit}>
                <label>Title:
                    <input 
                        type="text"
                        value={this.state.title}
                        onChange={this.handleUpdate("title")}
                    />
                </label>
                <label>Name:
                    <input 
                        type="text"
                        value={this.state.name}
                        onChange={this.handleUpdate("name")}
                    />
                </label>
                <br />
                <label>Rating:
                    <select name="ratings" id="rating" onChange={this.handleUpdate("rating")}  >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <br />
                <label>Body:
                    <textarea
                        value={this.state.body}
                        onChange={this.handleUpdate("body")}
                    />
                </label>
                <br />
                <div>
                    <input type="submit" />
                    <button onClick={() => this.props.history.goBack()}>Cancel</button>
                </div>
            </form>
        </div>
        )   
    }
}

export default CreateReview;
