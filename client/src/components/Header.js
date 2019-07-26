import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderLogin(){
        switch(this.props.auth){
            case null:
                return null;
            case false:
                return(
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return (
                    <Fragment>
                        <li><Payments /></li>
                        <li><a href="/api/logout">Logout</a></li>
                    </Fragment>
                );
        }
    }

    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderLogin()}
                    </ul>
                </div>
            </nav>
        )
    }
};

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)( Header );


