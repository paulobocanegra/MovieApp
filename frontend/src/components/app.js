import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect } from 'react-router-dom';

import MainPage from './main/main_page';
import MovieIndexContainer from "./movies/movies_index_container";
import MovieFormContainer from "./movies/movie_form_container";
// import MovieShowContainer from "./movies/movie_show_container";
import CreateReviewContainer from "./reviews/create_review_container"
import MovieShowContainer from "./movies/movie_show_container"

const App = () => (
    <Switch>
        <ProtectedRoute exact path="/movies/:movie_id/review" component={CreateReviewContainer}/>
        <ProtectedRoute exact path="/movies/new" component={MovieFormContainer} />
        <ProtectedRoute exact path="/movies/:movie_id/" component={MovieShowContainer}/>
        <ProtectedRoute exact path="/movies" component={MovieIndexContainer} />
        <AuthRoute exact path="/" component={MainPage} />
        <Redirect to="/" />
    </Switch>
);

export default App;