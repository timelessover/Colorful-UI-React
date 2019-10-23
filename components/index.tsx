import * as React from "react";
import * as ReactDom from "react-dom";
import CLButton from './button/Button';
import CLInput from './input/Input';



function App(props) {
    return (
        <div>
            <CLInput value='' placeholder="请输入申请金额" onChange={(b)=>{console.log(b)}}/> 
            <CLButton icon="setting">确定</CLButton>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById("app"))  