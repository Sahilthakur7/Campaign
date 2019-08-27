const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

// We're catching the emails that fail the validation
export default (emails) => {
    const invalidEmails = emails
        .split(',')
        .map((email) => email.trim())
        .filter((email) => {
            return !re.test(email)
        });

    if(invalidEmails.length > 0){
        return `These emails are inavlid: ${ invalidEmails }`;
    }

    return ;
};
