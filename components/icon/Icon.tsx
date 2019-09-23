import * as React from 'react'
import * as PropTypes from 'prop-types'
import cx from 'classnames'
import { IconProps } from 'types/icon'
import '../utils/svg'
import './style'

const componentName = 'cl-icon'

const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, size, style, name, children, ...rest } = props
  return (
    <svg
      className={cx(componentName, [className])}
      aria-hidden="true"
      style={Object.assign({}, style, {
        width: size + 'px',
        height: size + 'px'
      })}
      {...rest}
    >
      <use xlinkHref={`#icon-${name}`} />  
    </svg>
  )
}


Icon.defaultProps = {
  size: 16
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Icon
