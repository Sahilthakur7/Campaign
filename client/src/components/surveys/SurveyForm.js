import React from 'react';
import { reduxForm , Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject', name: 'subject'},
    {label: 'Email Body', name: 'body'},
    {label: 'Recepient List', name: 'emails'}

];

class SurveyForm extends React.Component {
    renderFields = () => {

        const formFields = FIELDS.map((field) => {
            return(
            <Field key={`${field.name}`} name={`${field.name}`} label={`${field.label}`} component={SurveyField} type="text" />
            );
        });
        return formFields;
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to={`/surveys`} className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
};

export default reduxForm({
    form: 'surveyForm'
})( SurveyForm );
