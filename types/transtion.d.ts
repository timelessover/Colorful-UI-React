export interface TransitionProps {
    visible: boolean
    beforeEnter?: React.CSSProperties
    afterEnter?: React.CSSProperties
    beforeLeave?: React.CSSProperties
    afterLeave?: React.CSSProperties
    transitionActive?: React.CSSProperties
  }
  export interface UnfoldProps {
    visible: boolean
    vertical?: boolean
    transitionTime?: number
  }
  
  export interface TransitionEffect {
    vertical: string
    horizontal: string
  }
  
  export interface LeaveTo {
    vertical: React.CSSProperties
    horizontal: React.CSSProperties
  }
  
  export interface PrevCssProp {
    paddingLeft: string | null
    paddingRight: string | null
    paddingTop: string | null
    paddingBottom: string | null
    borderTopWidth: string | null
    borderBottomWidth: string | null
    borderLeftWidth: string | null
    borderRightWidth: string | null
    width: string | null
    height: string | null
    overflowX: string | null
    overflowY: string | null
    overflow: string | null
  }
  
  export interface PrevSize {
    width: string | null
    height: string | null
  }