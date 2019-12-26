import React from 'react'
import PropTypes from 'prop-types'

interface tabPaneProps{
    tab?:string;
    key?:string;
    children?:React.ReactNode
}
const defaultProps = {
}

const tabsPane = (userProps:tabPaneProps) => {
    const props = {...defaultProps,...userProps}
    
    const {children} = props
    return (
        <div>
            {children}
        </div>
    )
}

tabsPane.propTypes = {
    tab:PropTypes.string,
    key:PropTypes.string,
}

export default tabsPane
