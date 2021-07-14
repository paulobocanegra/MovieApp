import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect } from 'react-router-dom';

import MainPage from './main/main_page';
import MovieIndexContainer from "./movies/movies_index_container"

const App = () => (
    <Switch>
        <AuthRoute exact path="/movies" component={MovieIndexContainer} />
        <AuthRoute exact path="/" component={MainPage} />
        <Redirect to="/" />
    </Switch>
);

export default App;