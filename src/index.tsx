import * as React from "react";
import * as ReactDom from "react-dom";
import CLButton from './button/Button';

class App extends React.Component{
    public render() {
        return (
            <div>
               <CLButton icon="setting" onClick={()=>{
                   alert('1')
               }}>确定</CLButton>
            </div>
        )
      }
}

ReactDom.render(<App/>,document.getElementById("app"))  