import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleList from './ArticleList';
import ArticleDetails from './ArticleDetails';

const Application = () =>
    <Switch>
        <Route exact path="/">
            <ArticleList />
        </Route>
        <Route path="/details/:idx">
            <ArticleDetails />
        </Route>
    </Switch>

export default Application;