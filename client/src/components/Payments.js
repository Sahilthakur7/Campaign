import React,{Component} from 'react';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';

class Payments extends Component {
    render(){
        return(
            <StripeCheckout
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                name="Emaily"
                description="You can buy more credits"
            >
                <button className="btn">Buy Credits</button>
        </StripeCheckout>
        )
    }
}

export default connect(null, actions)( Payments );
