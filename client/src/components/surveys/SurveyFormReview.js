import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './surveyFields';
import { withRouter } from 'react-router';
import * as actions from '../../actions';

const SurveyReview = (props) => {
    const { showReviewHandler, formValues , history } = props;

    const reviewFieldsList = FIELDS.map(({label, name}) => {
        return(
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })

    return(
        <div>
            <h5>
                Please confirm your entries
            </h5>
            {reviewFieldsList}
            <button className="yellow darken-3 btn-flat white-text" onClick={showReviewHandler}>
                Back
            </button>
            <button className="green btn-flat right white-text" onClick={() => props.submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        formValues: state.form.surveyForm.values
    };

}

export default connect(mapStateToProps ,actions)( withRouter(SurveyReview ));
