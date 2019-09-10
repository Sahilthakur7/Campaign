import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './surveyFields';

const SurveyReview = (props) => {
    const { showReviewHandler, formValues } = props;

    const reviewFieldsList = FIELDS.map(({label, name}) => {
        return(
            <div key={name}>
                <label>{label}</label>
                <div>{ name }</div>
            </div>
        )
    })

    return(
        <div>
            <h5>
                Please confirm your entries
            </h5>
            {reviewFieldsList}
            <button className="yellow darken-3 btn-flat" onClick={showReviewHandler}>
                Back
            </button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        formValues: state.form.surveyForm.values
    };

}

export default connect(mapStateToProps)( SurveyReview );
