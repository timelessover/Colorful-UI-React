export interface Option {
    span: number
    offset?: number
}

export interface IColProps {
    gutter?: number
    span?: number
    offset?: number
    sm?: Option
    md?: Option
    lg?: Option
    xl?: Option
    className?: string
    style?: React.CSSProperties
}
export interface RowProps {
    gutter?: number
    className?: string
    style?: React.CSSProperties
}
