import React from 'react';
import './App.css';
import cx from 'classnames'
import { Tabs, TabPane } from './components/tabs'



const App: React.FC = (props: any) => {
  const [defaultActiveKey, setDefaultActiveKey] = React.useState("1")
  const callback = (key) => {
    setDefaultActiveKey(key)
    console.log(key);
  }
  return (
    <div className={cx("App", "bar")}>


      <Tabs defaultActiveKey={defaultActiveKey} onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
    </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
    </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
    </TabPane>
      </Tabs>,
    </div>
  )
}

export default App;
