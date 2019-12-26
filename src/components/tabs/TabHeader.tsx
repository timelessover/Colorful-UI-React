import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import TabBar from './TabBar'
import './style/index'

interface TabTitleProps {
    children?: any;
    tab?: string;
    key?: any;
}

interface TabHeaderProps {
    tabTitle?: TabTitleProps[];
    userProps?: any;
}



const defaultProps = {}

const TabHeader = (userProps: TabHeaderProps, ref) => {
    const props = { ...defaultProps, ...userProps }

    const isActive = (key) =>{
        return props.userProps.defaultActiveKey === key 
    }

    const header = React.useRef(null);
    useEffect(()=>{
        getActiveItemWidth()
    },[props.userProps.defaultActiveKey])
    
    const getActiveItemWidth = () =>{
        let activeItem;
        const children = header.current.children
        for(let value of children){
            if([...value.classList].indexOf('active')>-1){
                activeItem = value
            }
        }
        const width = activeItem.getBoundingClientRect().width
        console.log(width)
    }

    console.log(userProps)
    const renderList = () => {
        return props.tabTitle.map(child =>
            <li key={child.key} onClick={() => props.userProps.onChange(child.key)} className={cx({ 'active': isActive(child.key) })} >
                {child.tab}
                {isActive(child.key) ? <TabBar></TabBar> : null}
            </li>
        )
    }
    return (
        <  >
            <ul ref={header} className={cx('cl-tabs--header')}>
                {
                    renderList()
                }
            </ul>
        </>
    )
}

TabHeader.propTypes = {
    tabTitle: PropTypes.array,
    userProps: PropTypes.object
}

export default TabHeader
