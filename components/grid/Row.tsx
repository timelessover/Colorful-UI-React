import * as React from 'react'
import * as PropTypes from 'prop-types'
import './style'
import cx from 'classnames'
import { IColProps, RowProps } from 'types/grid'



const Row = (userProps: RowProps) => {
  const cn = 'cl-row'
  const defaultProps = {
    gutter: 0
  }
  const cn = componentName
    const { gutter, className, style, children, ...rest } = this.props
    return (
      <div
        className={cx(cn, '', [className])}
        {...rest}
        style={{
          marginLeft: `${-gutter! / 2}px`,
          marginRight: `${-gutter! / 2}px`,
          ...style
        }}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child as React.ReactElement<IColProps>, {
            gutter
          })
        })}
      </div>
    )
}


export default Row
