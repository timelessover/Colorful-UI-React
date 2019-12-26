import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import cx from "classnames";
import Wave from "../wave/index";
import './style/index'

interface ButtonProps {
    type?: string
    icon?: string
    loading?: boolean
    size?: string
    disabled?: boolean
    iconPosition?: string
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLElement>
}

const Button: React.FC<ButtonProps> = (userProps: ButtonProps) => {

    const button = useRef(null)

    const defaultProps = {
        type: "default",
        loading: false,
        size: 'normal',
        disabled: false,
        iconPosition: 'left'
    }
    const props = { ...defaultProps, ...userProps }

    const { type, size, disabled, loading, icon, iconPosition, onClick } = props;
    const ButtonClass = cx([
        'cl-button',
        type,
        { loading },
        { disabled },
        size,
        { [`icon-${iconPosition}`]: icon || loading }
    ])

    const handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
        if (onClick) {
            (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
    };

    return (
        <>
            <Wave>
                <button className={ButtonClass} onClick={handleClick} ref={button}>
                    <Icon className="icon" name={icon}></Icon>
                    <div className="content">
                        {props.children}
                    </div>
                </button>
            </Wave>
        </>
    )
}

const typeList = ['default', 'success', 'primary', 'danger']
const sizeList = ['small', 'normal', 'large']

Button.propTypes = {
    icon: PropTypes.string,
    type: PropTypes.oneOf(typeList),
    loading: PropTypes.bool,
    size: PropTypes.oneOf(sizeList),
    disabled: PropTypes.bool,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    onClick: PropTypes.func,
}

export default Button
