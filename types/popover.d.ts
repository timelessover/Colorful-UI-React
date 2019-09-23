export interface PopoveProps {
    content: string | React.ReactNode
    trigger?: 'click' | 'hover' | 'focus'
    position?: 'top' | 'left' | 'right' | 'bottom'
    defaultVisible?: boolean
    visible?: boolean
    popClosable?: boolean
    onVisibleChange?: (visible: boolean) => any
    className?: string
    style?: React.CSSProperties
  }
  
export interface PopoveState {
    derivedVisible: boolean
  }