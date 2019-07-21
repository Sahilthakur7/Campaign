import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

class App extends React.Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <Route exact path="/" component={Landing} />
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);
