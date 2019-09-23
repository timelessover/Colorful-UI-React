import * as React from 'react'
import * as PropTypes from 'prop-types'
import cx from 'classnames'
import {ColProps} from 'types/col'

const componentName = 'cl-col'

class Col extends React.Component<ColProps> {
  public static displayName = componentName

  public static defaultProps = {
    gutter: 0
  }

  public static propTypes = {
    gutter: PropTypes.number,
    span: PropTypes.number,
    offset: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
  }

  public getColClassName = (): string[] => {
    const {
      gutter,
      span,
      offset = 0,
      children,
      className,
      style,
      ...options
    } = this.props
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

  public render() {
    const cn = componentName
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
    } = this.props
    return (
      <div
        className={cx(cn, this.getColClassName())}
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
}

export default Col
