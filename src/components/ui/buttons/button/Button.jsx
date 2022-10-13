import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
const Button = ({
    primary,
    label,
    color,
    backgroundColor,
    className,
    borderColor,
    size = 'small',
    fontWeight = 'normal',
    shadow = 'light',
    ...props
}) => {
    const mode = primary ? styles.primary : styles.secondary

    return (
        <button
            style={{ backgroundColor, borderColor, color }}
            className={[
                styles.btn,
                styles[size],
                styles[fontWeight + 'Weight'],
                styles[shadow + 'Shadow'],
                mode,
                className,
            ].join(' ')}
            {...props}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    fontWeight: PropTypes.oneOf(['normal', 'medium', 'bold']),
    shadow: PropTypes.oneOf(['light', 'medium', 'large']),
    label: PropTypes.string.isRequired,
}

export default Button

Button.defaultProps = {
    primary: false,
    size: 'small',
    fontWeight: 'normal',
    onClick: undefined,
    shadow: 'light',
}
