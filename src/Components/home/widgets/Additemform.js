import React from 'react'
import { useState } from 'react';
import Toaster from '../../../constants/toaster';

function Additemform({ onSubmit }) {

    const [url, setUrl] = useState('');
    // const [validationMessage, setValidationMessage] = useState('');

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    };

    const validateLink = () => {
        // Simple URL validation using a regular expression
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

        if (urlPattern.test(url)) {
        // window.location.href = url
        // Valid URL, you can proceed with further actions
            return true; // Redirect to the entered URL
        } else {
        // setValidationMessage('Please enter a valid URL.');
            return false;
        }
    };

    function handleSubmit(e) {
        
        e.preventDefault();

    
        const form = e.target;
        const chk = validateLink();
        if(chk)
        {
            const formData = new FormData(form);
            const formJson = Object.fromEntries(formData.entries());
            onSubmit(formJson);
            
        }
        else
        {
            Toaster("Enter a valid url");
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type='text' name="item_name" placeholder='Site name' required autoComplete="off"/>
                </label>
                <label htmlFor="item_link"></label>
                <input
                    type="text"
                    id="item_link"
                    name="item_link"
                    placeholder="https://example.com"
                    value={url}
                    onChange={handleInputChange}
                    required autoComplete='off'
                />
                <button type='Submit'>Submit</button>
                {/* {validationMessage && <p style={{ color: 'red' }}>{validationMessage}</p>} */}
            </div>
        </form>
    </div>
  )
}

export default Additemform