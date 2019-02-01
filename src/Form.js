import React from 'react';

const Form = ({ onInputChange, onSearch }) => {
    return(
        <div style={formStyle}>
            <input placeholder='movie or series name...' type='text' onChange={onInputChange} />
            <button onClick={onSearch}>Search</button>
        </div>
    )
}

const formStyle = {
    padding: '15px',
    position: 'fixed',
    width: '100%',
    backgroundColor : 'orange',
    zIndex: '1000'
}

export default Form;