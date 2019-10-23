export interface ButtonProps {
  cn?: string
  icon?: string
  position?: 'left' | 'right'
  size?: 'small' | 'default' | 'large'
  type?: 'default' | 'dashed' | 'primary' | 'danger'
  htmlType?: 'button' | 'submit' | 'reset'
  loading?: boolean
  onClick?: React.MouseEventHandler
  disabled?: boolean
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  className?: string
  style?: React.CSSProperties
  children?: string
}