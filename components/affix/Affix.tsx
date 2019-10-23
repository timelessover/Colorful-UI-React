import * as React from 'react'
import cx from 'classnames'

import './style'
import { AffixProps } from 'types/affix'

const { useState, useEffect, useRef } = React



const Affix = (userProps: AffixProps, ref: any) => {
  const cn = 'cl-affix'

  const defaultProps = {
    distance: 0
  }

  const props = {
    ...userProps,
    ...defaultProps
  }

  let top: number = 0

  const saveAffixRef = useRef(null)
  const saveWrapperRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    setTop()
    return (() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }, [])

  const setTop = () => {
    if (window.scrollY === 0) {
      top = affixRef.getBoundingClientRect().top
      // 挂载时若窗口滚动不为 0，先滚动至 0
    } else {
      const { scrollX, scrollY } = window
      window.scrollTo(scrollX, 0)
      top = affixRef.getBoundingClientRect().top
      window.scrollTo(scrollX, scrollY)
    }
  }

  const handleScroll = () => {
    const { distance } = props
    if (window.scrollY > top - distance) {
      const {
        top,
        bottom,
        left,
        right
      } = wrapperRef.getBoundingClientRect()
      wrapperRef.style.width = right - left + 'px'
      wrapperRef.style.height = bottom - top + 'px'
      wrapperRef.style.left = left + 'px'
      wrapperRef.style.top = distance + 'px'
      wrapperRef.style.position = 'fixed'
    } else {
      wrapperRef.style.position = 'static'
    }
  }


  const { distance, className, style, children, ...rest } = props
  return (
    <div className={cx(cn, '')} ref={saveAffixRef}>
      <div
        className={cx(`${cn}-wrapper`, [className])}
        ref={saveWrapperRef}
        style={style}
        {...rest}
      >
        {children}
      </div>
    </div>
  )
}

export default Affix
