import React from 'react'
import styles from './Status.module.scss'
const Status = ({ checked }) => {
    return (
        <label className={styles.switch}>
            <input type="checkbox" defaultChecked={checked} />
            <span className={styles.slider + ' ' + styles.round}></span>
        </label>
    )
}

export default Status
