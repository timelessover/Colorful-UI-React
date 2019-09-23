export interface TabsProps {
    activeKey?: string;
    defaultActiveKey?: string;
    onChange?: (key: string) => any;
    vertical?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }
  
  export interface TabsState {
    derivedActiveKey: string;
  }
  
  export interface TabPaneProps {
    title: string | React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }