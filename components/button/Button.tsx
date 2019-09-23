import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ButtonProps } from 'types/button'
import cx from 'classnames'
import { Wave } from '../utils'  
import Icon from '../icon/Icon' 
import './style' 

const componentName = 'cl-button'

class Button extends React.Component<ButtonProps> {
  // public 共有变量，可以继承访问，类似于 vue 中 props 默认值
  public static defaultProps = {
    position: 'left',
    size: 'default',
    type: 'primary',
    ghost: false,
    htmlType: 'button',
    loading: false,
    disabled: false,
    onClick: () => {}
  }
  // 类似于 vue 的props
  public static propTypes = {
    icon: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['small', 'default', 'large']),
    type: PropTypes.oneOf(['default', 'dashed', 'primary', 'danger']),
    ghost: PropTypes.bool,
    htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string, 
    style: PropTypes.object
  }
  public renderIcon = () => {
    const { icon, size, loading } = this.props
    const className = cx('icon', [size], { loading })
    return loading ? (
      <Icon name="loading" className={className} />
    ) : (
      icon && <Icon name={icon} className={className} />
    )
  }

  public render() {
    const cn = componentName
    const {
      position,
      icon,
      loading,
      size,
      type,
      htmlType,
      ghost,
      style,
      className,
      disabled,
      children,
      ...rest
    } = this.props
    const buttonClassName = cx(cn, [position, size, type, className], {
      ghost,
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
          {this.renderIcon()}
          <span className={cx(`${cn}-inner`)}>{children}</span>
        </button>
      </Wave>
    )
  }
}

export default Button
