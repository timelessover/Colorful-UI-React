import React, { useEffect, useState, useCallback } from "react";
import cx from 'classnames'
import "./style/index";


const Wave = (userProps) => {
  const [node, setNode] = useState()
  const [originClassName,setOriginClassName] = useState('')

  const props = { ...userProps };
  const animatingClassName = "cl-wave-animation-animating";

  const animationEnd = useCallback(() => {
    node.className = cx(originClassName);
    node.removeEventListener("animationend", animationEnd);
  }, [node, originClassName]);

  const animationStart = useCallback(() => {
    node.className = cx(
      originClassName,
      animatingClassName
    );
    node.addEventListener("animationend", animationEnd);
  }, [animationEnd, node, originClassName])



  useEffect(() => {
    setNode(props.children.ref.current);
    setOriginClassName(props.children.ref.current.className);
    node && node.addEventListener("click", animationStart);

    return () => {
      node && node.removeEventListener("click", animationStart);
      node && node.removeEventListener("animationend", animationEnd);
    }
  }, [animationEnd, animationStart, node, props.children.ref])
  return (
    <>
      {props.children}
    </>
  )
}




export default Wave;
