import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../../assets/fonts/icon.css';

interface userProps{
    name?: string,
    className?: string
}

const Icon:React.FC<userProps> = (props:userProps) => {
    return (
        <i className={cx(`cl-icon--${props.name}`,props.className)}></i>
    )
}

Icon.propTypes = {
    name:PropTypes.string,
    className: PropTypes.string
}

export default Icon
