import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import TabHeader from './TabHeader'
import cx from 'classnames'
import TabPane from './TabPane'

export interface TabsProps {
    defaultActiveKey: string;
    onChange: (activeKey: string) => void;
    children?: React.ReactNode[];
}



const defaultProps = {

}

const Tabs = (userProps: TabsProps) => {
    const props = { ...defaultProps, ...userProps }
    const children = React.Children.map(props.children, (c: any) => {
        if (c && c.key) {
            return { key: c.key, ...c.props }
        }
    })




    return (
        <div className={cx('cl-tabs-container')}>
            <TabHeader tabTitle={children} userProps={props} ></TabHeader>
            {
                props.children.filter((child: any) => child.key === props.defaultActiveKey)
            }
        </div>
    )
}

Tabs.propTypes = {
    defaultActiveKey: PropTypes.string,
    onChange: PropTypes.func,
}

export { Tabs, TabPane }
