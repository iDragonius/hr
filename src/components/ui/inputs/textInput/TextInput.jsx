import React from 'react'
import PropTypes from 'prop-types'
import styles from './TextInput.module.scss'

const TextInput = ({
    label,
    className,
    width = '400px',
    mode = 'normal',
    type,
    change,
    value,
    name,
    ...props
}) => {
    return (
        <input
            name={name}
            className={[styles.input, styles[mode], className].join(' ')}
            onChange={(e) => (change ? change(e) : e)}
            style={{ width }}
            placeholder={label}
            value={value}
            type={type}
            {...props}
        />
    )
}

TextInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'password']),
    mode: PropTypes.oneOf(['normal', 'error', 'success']),
    change: PropTypes.func,
    value: PropTypes.string,
    width: PropTypes.string,
}
export default TextInput

TextInput.defaultValues = {
    label: 'Text',
}
