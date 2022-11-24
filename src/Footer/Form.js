import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm('mzbwqdny');

    if (state.succeeded) {
    return(<div className='thankYouContainer'>
            <p className='thankYouForm'>Thank you for contacting us!</p>
            <p className='thankYouForm'>🌸We will get back to you🌸</p>
        </div>);
    }

    return (<div>   
        <div id='contacts' className='sendContainer'>
            <h2 className='sendMessage'>Send Us Your Message Here</h2>
        </div>

        <form onSubmit={handleSubmit} className='form'>
        <input
        type="email" 
        name="email" 
        placeholder='Your email here ...' 
        className='textInput textInputEmail' 
        required />
        <ValidationError
        prefix='Email'
        field='Email'
        errors={state.errors} />
        <textarea id='message' 
        name='message' 
        placeholder='Text here ...'
        className='textInput msgInput' 
        required />
        <ValidationError
        prefix='Message'
        field='Message'
        errors={state.errors} />
        <button type="submit" 
        disabled={state.submitting} 
        className='submitBtn'>
        Submit
        </button>
		</form>
        </div>)
};

export default Form;