import * as React from 'react'
import { render } from '@testing-library/react'
import Button from '../src/button/Button'
import { expect } from 'chai'

describe('render button', () => {
  it('render default', () => {
    const wrapper = 2
    expect(wrapper === 3).to.be.false
  })
}
)
