import * as React from 'react'
import * as PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../icon/Icon'
import Input from './Input'
import { SearchProps, SearchState } from "types/input";



const componentName = 'cl-search'

class Search extends React.Component<SearchProps, SearchState> {

  public static defaultProps = {
    placeholder: '',
    enterButton: false
  }

  public static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    enterButton: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.element
    ]),
    onSearch: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string
  }

  public static getDerivedStateFromProps(
    nextProps: SearchProps,
    prevState: SearchState
  ) {
    const { value } = nextProps
    const { derivedValue } = prevState
    if ('value' in nextProps && value !== derivedValue) {
      return { derivedValue: value }
    }
    return null
  }

  private inputInstance: any

  constructor(props: SearchProps) {
    super(props)
    this.state = {
      derivedValue: props.defaultValue || ''
    }
  }

  public handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({
      derivedValue: e.target.value
    })
    const { onChange } = this.props
    if (onChange) {
      onChange(e)
    }
  }

  public handleSearch = () => {
    const { onSearch } = this.props
    if (onSearch) {
      onSearch(this.state.derivedValue)
    }
  }

  public saveInputInstance = (instance: any) => {
    this.inputInstance = instance
  }

  public focus = () => {
    this.inputInstance.focus()
  }

  public blur = () => {
    this.inputInstance.blur()
  }

  public render() {
    const cn = componentName
    const { enterButton, placeholder, className, style } = this.props
    const { derivedValue } = this.state
    return (
      <Input
        ref={this.saveInputInstance}
        value={derivedValue}
        className={cx(cn, ['search', className], {
          'enter-button': !!enterButton
        })}
        style={style}
        onChange={this.handleChange}
        onPressEnter={this.handleSearch}
        suffix={
          (enterButton === false && (
            <Icon
              name="search"
              style={{ cursor: 'pointer' }}
              size={18}
              onClick={this.handleSearch}
            />
          )) ||
          null
        }
        addonAfter={
          enterButton ? (
            <div
              className={cx(cn, 'enter-button')}  
              onClick={this.handleSearch}  
            >
              {enterButton === true ? (
                <Icon name="search" size={20} />
              ) : (
                enterButton
              )}
            </div>
          ) : null
        }
        placeholder={placeholder}
      />
    )
  }
}

export default Search
