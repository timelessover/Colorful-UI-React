import * as React from 'react'
import { render } from '@testing-library/react'
import Button from '../components/button/Button'

describe('render button', () => {
  it('render default', () => {
    const wrapper = render(<Button/>)
    // console.log(wrapper.container)
    expect(wrapper.container).toMatchSnapshot()
  })
 }
)
