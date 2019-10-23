import * as React from 'react'
import * as PropTypes from 'prop-types'
import cx from 'classnames'
import { IColProps } from 'types/grid'


const Col = (userProps: IColProps) => {
  const cn = 'cl-col'

  const defaultProps = {
    gutter: 0
  }

  const props = {
    ...userProps,
    ...defaultProps
  }

  const getColClassName = (): string[] => {
    const {
      gutter,
      span,
      offset = 0,
      children,
      className,
      style,
      ...options
    } = props
    const classNameArr = [`col-span-${span}`, `col-offset-${offset}`]
    Object.keys(options).forEach(key => {
      if (options[key]) {
        const { span: optionSpan, offset: optionOffset = 0 } = options[key]
        classNameArr.push(`${key}-col-span-${optionSpan}`)
        classNameArr.push(`${key}-col-offset-${optionOffset}`)
      }
    })
    if (className) {
      classNameArr.push(className)
    }
    return classNameArr
  }
  const {
    gutter,
    span,
    offset,
    sm,
    md,
    lg,
    xl,
    className,
    style,
    children,
    ...rest
  } = props
  return (
    <div
      className={cx(cn, '', getColClassName())}
      {...rest}
      style={{
        paddingLeft: `${gutter! / 2}px`,
        paddingRight: `${gutter! / 2}px`,
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default Col
