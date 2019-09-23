import { ELE_FACTORS } from '../constants/constants'

// 计算元素高度
const calculateNodeHeight = (node: HTMLTextAreaElement): number => {
  const hiddenEle = getHiddenEle() as HTMLTextAreaElement;
  const value = node.value;
  const placeholder = node.placeholder;
  const style = window.getComputedStyle(node);

  ELE_FACTORS.forEach(key => {
    hiddenEle.style[key as any] = style.getPropertyValue(key);
  });

  hiddenEle.value = value || placeholder || "";
  const height = hiddenEle.scrollHeight;
  hiddenEle.value = "";
  return height;
}
// 文本节点隐藏
const getHiddenEle = (): HTMLElement => {
  const hiddenEle: HTMLElement | null = document.querySelector(
    ".cl-ui-hidden-textarea"
  );
  if (hiddenEle) {
    return hiddenEle;
  } else {
    const textarea = document.createElement("textarea");
    textarea.className = "cl-ui-hidden-textarea";
    document.body.append(textarea);
    return textarea;
  }
}



export default calculateNodeHeight;
