import React from 'react';
import PropTypes from "prop-types";

const TextInput = ({label, type,  ...props}) => {
    return (
        <input placeholder={label}  type={type}  {...props} />
    );
};

Input.propTypes ={
    labeL:PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'password'])
}
export default Input;
