import * as React from 'react'
import cx from 'classnames'
import './style'
import { InputProps } from 'types/input'
const { useState, useRef } = React



const Input = (userProps: InputProps) => {

  const cn = 'cl-input'

  const defaultProps: InputProps = {
    disabled: false,
    error: false,
    readonly: false,
  }
  const props = { ...userProps, ...defaultProps }

  const { className, addonAfter, prefix,
    suffix, addonBefore, type, placeholder, value, onFocus, onBlur, style, disabled, error, readonly, onChange } = props

  const inputRef = useRef(null)

  const [innerValue, setInnerValue] = useState(value)


  const handleChange = e => {
    if (onChange) {
      onChange(e)
    }
    setInnerValue(e.target.value)
  }

  // const handleFocus = () => {
  //   inputRef.current.focus()
  // }
  // const handleBlur = () => {
  //   inputRef.current.blur()
  // }

  const labelClassName = cx(`${cn}-wrapper`, [className], {
    disabled,
    error
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
        type={type}
        placeholder={placeholder || ''}
        onChange={handleChange}
        value={innerValue}
        onFocus={onFocus}
        onBlur={onBlur}
        style={style}
        disabled={disabled}
        readOnly={readonly}
        ref={inputRef}
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

export default Input
