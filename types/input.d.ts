export interface InputProps {
    type?: string
    value?: string
    defaultValue?: string
    placeholder?: string
    onChange?: React.ChangeEventHandler
    onKeyDown?: React.KeyboardEventHandler
    onPressEnter?: React.KeyboardEventHandler
    onFocus?: React.FocusEventHandler
    onBlur?: React.FocusEventHandler
    addonBefore?: string | React.ReactNode
    addonAfter?: string | React.ReactNode
    prefix?: string | React.ReactNode
    suffix?: string | React.ReactNode
    disabled?: boolean
    error?: boolean
    readonly?: boolean
    className?: string
    style?: React.CSSProperties
  }
  
  export interface InputState {
    derivedValue: string
  }

  export interface SearchProps {
    value?: string
    defaultValue?: string
    placeholder?: string
    enterButton?: boolean | string | React.ReactNode
    onSearch?: (value: string) => any
    onChange?: React.ChangeEventHandler
    className?: string
    style?: React.CSSProperties
  }
  
  export interface SearchState {
    derivedValue: string
  }

  export interface Size {
    rows: number | string
    cols: number | string
  }
  
  export interface TextareaProps {
    size?: Size
    autosize?: boolean
    value?: string
    defaultValue?: string
    onPressEnter?: React.KeyboardEventHandler
    onChange?: React.ChangeEventHandler
    className?: string
    style?: React.CSSProperties
    placeholder?: string
  }
  
  export interface TextareaState {
    derivedValue: string
  }