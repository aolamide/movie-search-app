import React from 'react';

const Form = ({ onInputChange, onSearch }) => {
    return(
        <form style={formStyle}>
            <input style={inputStyle} placeholder='Search for movies, series, tv shows...' type='text' onChange={onInputChange} />
            <button style = {searchStyle} onClick={onSearch}><i className="fa fa-search"></i></button>
        </form>
    )
}

const formStyle = {
    padding: '15px',
    // position: 'fixed',
    width: '100%',
    // zIndex: '1000',
    fontSize : '10px'
}
const searchStyle = {
    borderRadius : '0 16px 16px 0',
    backgroundColor : '#c7c7c7',
    minWidth : '40px',
    padding : '5px'
}
const inputStyle = {
    padding : '5px',
    borderRadius : '16px 0 0 16px',
    outline : 'none'
}

export default Form;