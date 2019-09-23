import * as React from "react";
import * as PropTypes from "prop-types";
import cx from 'classnames'
import {TabPaneProps} from 'types/tabs'



const componentName = "cl-tabpane";

class TabPane extends React.Component<TabPaneProps> {
  public static displayName = componentName;

  public static defaultProps = {
    disabled: false
  };

  public static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool
  };

  public render() {
    const { active, className, style, children } = this.props;
    return (
      <li
        className={cx(componentName, "", [className], { active })}
        style={style}
      >
        {children}
      </li>
    );
  }
}

export default TabPane;
