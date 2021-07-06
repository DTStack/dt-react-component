import React, { Component } from "react";
import { Tag, Select, Icon } from "antd";
import { isEqual } from "lodash";

const { Option } = Select;
interface Opts {
  value: string | number;
  label: string;
}

interface IProps {
  options: Array<Opts>;
  initTags: Array<Opts>;
  onChange: (tags) => void;
}
interface IState {
  tags: Array<Opts>;
  inputVisible: boolean;
  editInputIndex: number;
  options: Array<Opts>;
}
class SelectTags extends Component<IProps, IState> {
  state = {
    tags: [],
    inputVisible: false,
    editInputIndex: -1,
    options: [],
  };
  componentDidMount() {
    const { options, initTags } = this.props;
    this.setState(
      {
        tags: initTags,
        options,
      },
      () => {
        this.handelDisable();
      }
    );
  }
  componentDidUpdate(preProps) {
    const { initTags } = this.props;
    if (!isEqual(initTags, preProps.initTags)) {
      this.setState({
        tags: initTags,
      });
    }
  }

  onChangeTypeAdd = (value) => {
    let { tags } = this.state;
    let arr = tags;
    arr.push({
      label: value.label,
      value: value.key,
    });
    this.setState(
      {
        tags: arr,
        inputVisible: false,
      },
      () => {
        this.handelDisable();
      }
    );
  };
  onChangeTypeEdit = (value, index) => {
    let arr = this.state.tags;
    arr[index].value = value.key;
    arr[index].label = value.label;

    this.setState(
      {
        tags: arr,
        editInputIndex: -1,
      },
      () => {
        this.handelDisable();
      }
    );
  };

  handleClose = (index) => {
    let arr = this.state.tags;
    arr.splice(index, 1);
    this.setState({ tags: arr }, () => {
      this.handelDisable();
    });
  };
  handelDisable = () => {
    let data = this.state.options;
    data.forEach((item) => {
      let filterItem = this.state.tags.filter(
        (ele) => ele.value === item.value
      );
      item.disabled = filterItem.length > 0 ? true : false;
    });
    this.setState({
      options: data,
    });
    this.props.onChange(this.state.tags);
  };
  render() {
    const { tags, inputVisible, editInputIndex, options } = this.state;
    return (
      <div className="dt-mul-select-tag">
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Select
                data-testid="edit-option"
                labelInValue
                size="small"
                showSearch
                style={{ width: 120, marginRight: 40 }}
                optionFilterProp="children"
                onChange={(value) => this.onChangeTypeEdit(value, index)}
                onBlur={() => {
                  this.setState({
                    editInputIndex: -1,
                  });
                }}
                key="select"
              >
                {options?.map((item) => (
                  <Option
                    value={item.value}
                    key={item.value}
                    disabled={item.disabled}
                  >
                    {item.label}
                  </Option>
                ))}
              </Select>
            );
          }

          const tagElem = (
            <Tag   
              key={tag.value}
              closable
              onClose={() => this.handleClose(index)}
            >
              <span
                onClick={(e) => {
                  this.setState({
                    editInputIndex: index,
                  });
                }}
              >
                {tag.label}
              </span>
            </Tag>
          );
          return tagElem;
        })}

        {inputVisible && (
          <Select
            data-testid="add-option"
            labelInValue
            size="small"
            showSearch
            style={{ width: 120, marginRight: 20 }}
            optionFilterProp="children"
            onChange={(value) => this.onChangeTypeAdd(value)}
            onBlur={() => {
              this.setState({
                inputVisible: false,
              });
            }}
          >
            {options?.map((item) => (
              <Option
                value={item.value}
                key={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </Option>
            ))}
          </Select>
        )}

        <Icon
            onClick={() => {
              this.setState({ inputVisible: true });
            }}
            data-testid="plus-circle"
            type="plus-circle"
            style={{ fontSize: 15, color: "#3F87FF" }}
          />
      </div>
    );
  }
}
export default SelectTags;
