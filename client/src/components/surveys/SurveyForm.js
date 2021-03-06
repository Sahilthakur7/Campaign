import React from 'react';
import { reduxForm , Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './surveyFields';

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
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

function validate(values){
    const errors = {};

    _.each(FIELDS, ({name}) => {
        if(!values[name]){
            errors[name] = `You need to provide a ${name}`;
        }
    })

    errors.recipients = validateEmails(values.recipients || '');

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})( SurveyForm );
