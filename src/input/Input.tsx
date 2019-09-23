import * as React from 'react'
import * as PropTypes from 'prop-types'
import cx from 'classnames'
import './style'
import {InputProps,InputState} from 'types/input'



const componentName = 'cl-input'

class Input extends React.Component<InputProps, InputState> {

  public static defaultProps = {
    disabled: false,
    error: false,
    readonly: false
  }

  public static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onPressEnter: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    readonly: PropTypes.bool
  }

  public static getDerivedStateFromProps(
    nextProps: InputProps,
    prevState: InputState
  ) {
    const { value } = nextProps
    const { derivedValue } = prevState
    if ('value' in nextProps && value !== derivedValue) {
      return { derivedValue: value }
    }
    return null
  }

  private inputRef: HTMLInputElement

  constructor(props: InputProps) {
    super(props)
    this.state = {
      derivedValue: props.defaultValue || ''
    }
  }

  public handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { onChange } = this.props
    if (onChange) {
      onChange(e)
    }
    this.setState({
      derivedValue: e.target.value
    })
  }

  public handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    const { onPressEnter, onKeyDown } = this.props
    if (onPressEnter && e.keyCode === 13) {
      onPressEnter(e)
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  public saveInputRef = (node: HTMLInputElement) => {
    this.inputRef = node
  }

  public focus = () => {
    this.inputRef.focus()
  }

  public blur = () => {
    this.inputRef.blur()
  }

  public render() {
    const cn = componentName
    const {
      placeholder,
      style,
      className,
      addonBefore,
      addonAfter,
      prefix,
      suffix,
      disabled,
      error,
      onFocus,
      onBlur,
      readonly
    } = this.props
    const { derivedValue } = this.state
    const labelClassName = cx(`${cn}-wrapper`, [className], {
      disabled,
      error,
      prefix: !!prefix,
      suffix: !!suffix,
      'addon-before': !!addonBefore,
      'addon-after': !!addonAfter
    })
    return (
      <label className={labelClassName}>
        {addonBefore && (
          <div className="addon-before-wrapper">
            {typeof addonBefore === 'string' ? (
              <span className="before-string">{addonBefore}</span>
            ) : (
              addonBefore
            )}
          </div>
        )}
        {prefix && (
          <span className="prefix-wrapper">
            {typeof prefix === 'string' ? (
              <span className="prefix-string">{prefix}</span>
            ) : (
              prefix
            )}
          </span>
        )}
        <input
          className="cl-input"
          type="text"
          placeholder={placeholder || ''}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={derivedValue}
          onFocus={onFocus}
          onBlur={onBlur}
          style={style}
          disabled={disabled}
          readOnly={readonly}
          ref={this.saveInputRef}
        />
        {suffix && (
          <span className="suffix-wrapper">
            {typeof suffix === 'string' ? (
              <span className="suffix-string">{suffix}</span>
            ) : (
              suffix
            )}
          </span>
        )}
        {addonAfter && (
          <div className="addon-after-wrapper">
            {typeof addonAfter === 'string' ? (
              <span className="after-string">{addonAfter}</span>
            ) : (
              addonAfter
            )}
          </div>
        )}
      </label>
    )
  }
}

export default Input
