import React, { useState, ReactNode, isValidElement } from "react";
import { Button, Icon, Input } from "antd";
import "./style.scss";
import { cloneElement } from "react";
import { useEffect } from "react";

interface IProp {
  placeholder?: string;
  onSearch: (value: string) => void;
  className?: string;
  suffix?: ReactNode;
  style?: React.CSSProperties;
  allowClear?: boolean;
  allowEmptySearch?: boolean;
  enterButton?: ReactNode | boolean;
  btnLoading?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void
}
export default function SearchInput(props: IProp) {
  const {
    placeholder = "请输入搜索内容",
    style = {},
    onSearch,
    className = '',
    allowClear = true,
    allowEmptySearch = true,
    enterButton = false,
    defaultValue,
    suffix = (
      <Icon type="search" />
    ),
    onChange
  } = props;

  const [value, setValue] = useState("");

  useEffect(() => {
    defaultValue && setValue(defaultValue)
  }, [defaultValue])

  const renderSearchBtn = () => {
    let children = null

    if(typeof enterButton === 'boolean' && enterButton) {
      children = <Button 
                    onClick={() => onSearch(value)} 
                    type="primary"
                  >搜索</Button> 

    }else if(isValidElement(enterButton)) { 
      children = enterButton
    }

    if(!children) {
      return null
    }

    return cloneElement(<div></div>, {
      onClick: () => onSearch(value),
      className: "len-btn",
      "data-testid": "search-btn",
    }, children)
  }

  const renderSuffix = () => {
    if(enterButton) return null

    return cloneElement(<div></div>, {
      onClick: () => onSearch(value),
      "data-testid": "search-icon",
      className: "len-search-icon"
    }, suffix)
  }
  
  return (
    <div className={"input-search-wrapper " + className} style={style}>
      <Input
        className="input-search"
        allowClear={allowClear}
        value={value}
        onChange={(e) => {
          const value = e.target.value
          setValue(value);
          if (!value && allowEmptySearch) {
            onSearch(value);
          }
          onChange && onChange(value)
        }}
        onPressEnter={(e) => {
          onSearch(value);
        }}
        data-testid="input"
        placeholder={placeholder}
        suffix={renderSuffix()}
        style={{width: 260}}
      />
      {renderSearchBtn()}
    </div>
  );
}
