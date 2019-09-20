
    
export interface ButtonProps {  
    icon?: string
    position?: 'left' | 'right'
    size?: 'small' | 'medium' | 'large'
    type?: 'default' | 'dashed' | 'primary' | 'danger'
    ghost?: boolean
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
  }