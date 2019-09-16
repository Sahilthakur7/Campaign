import React from 'react';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends React.Component {
    state = {
        showSurveyReview: false
    }

    showReviewHandler = () => {
        this.setState({
            showSurveyReview: !this.state.showSurveyReview
        });
    }

    render(){
        const {showSurveyReview} = this.state;
        return(
            <div>
                { showSurveyReview ?
                        <SurveyReview
                            showReviewHandler={this.showReviewHandler}
                        />
                        :
                        <SurveyForm
                            onSurveySubmit={this.showReviewHandler}
                        />
                }
            </div>
        )
    }
};

export default reduxForm({form: 'surveyForm'})( SurveyNew );
