import * as React from 'react'
import { ButtonProps } from 'types/button'
import cx from 'classnames'
import { Wave } from '../utils'
import Icon from '../icon/Icon'
import './style'

const componentName = 'cl-button'

const defaultProps: ButtonProps = {
  cn:componentName,
  position: 'left',
  size: 'default',
  type: 'primary',
  htmlType: 'button',
  loading: false,
  disabled: false,
  onClick: () => { }
}

function Button(userProps: ButtonProps, ref: any) {
  const props = {
    ...defaultProps,
    ...userProps
  }
  const renderIcon = () => {
    const { icon, size, loading } = props
    const className = cx('icon', [size], { loading })
    return loading ? (
      <Icon name="loading" className={className} />
    ) : (
        icon && <Icon name={icon} className={className} />
      )
  }
  const {
    cn,
    position,
    icon,
    loading,
    size,
    type,
    htmlType,
    style,
    className,
    disabled,
    children,
    ...rest
  } = props

  const buttonClassName = cx(cn, [position, size, type, className], {
    disabled
  })

  return (
    <Wave>
      <button
        className={buttonClassName}
        style={style}
        type={htmlType}
        disabled={disabled}
        {...rest}
      >
        {renderIcon()}
        <span className={cx(`${cn}-inner`)}>{children}</span>
      </button>
    </Wave>
  )
}




export default Button
