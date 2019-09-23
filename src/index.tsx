import * as React from "react";
import * as ReactDom from "react-dom";
import CLButton from './button/Button';
import CLInput from './input/Input';
import CLSearch from "./input/Search";
import CLTextarea from "./input/Textarea";
import CLAffix from "./affix/Affix";


class App extends React.Component{
    public render() {
        return (
            <div>
               <CLButton icon="setting" >确定</CLButton>
               <CLInput></CLInput>
               <CLSearch></CLSearch>
               <CLTextarea></CLTextarea>
               <CLAffix >
                    <CLButton icon="setting" >确定</CLButton>
               </CLAffix>
            </div>
        )
      }
}

ReactDom.render(<App/>,document.getElementById("app"))  