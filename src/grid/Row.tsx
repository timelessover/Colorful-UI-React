import * as React from 'react'
import * as PropTypes from 'prop-types'
import cx from 'classnames'
import {RowProps} from 'types/row'
import {ColProps} from 'types/col'

import './style'



const componentName = 'Row'  

class Row extends React.Component<RowProps> {

  public static defaultProps = {
    gutter: 0
  }

  public static propTypes = {
    gutter: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
  }

  public render() {
    const cn = componentName
    const { gutter, className, style, children, ...rest } = this.props
    return (
      <div
        className={cx(cn, [className])}
        {...rest}
        style={{
          marginLeft: `${-gutter! / 2}px`,
          marginRight: `${-gutter! / 2}px`,
          ...style
        }}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child as React.ReactElement<ColProps>, {
            gutter
          })
        })}
      </div>
    )
  }
}

export default Row
