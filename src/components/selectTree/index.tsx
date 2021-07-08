import React, { Fragment, Component } from 'react';
import "./style.scss";
import Tag from "../tag"
import classnames from "classnames"
import { Empty, Tree, Icon } from "antd"

interface DataSorce {
  children?: Array<DataSorce>,
  title: String,
  id: string | number,
}

interface IProps {
  dataSorce?: Array<DataSorce>,
  disable?: Boolean,
  onChange?: Function
}

interface StateProps {
  isShowMenu?: Boolean,
  selectOption?: Array<any>,
  selTree?: any,
  value?: any,
  lastDataMap?: any,
  dataSource: Array<any>,
  defaultKeyList: Array<any>,
}

const { TreeNode } = Tree

class SelectTree extends Component<any, StateProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isShowMenu: false,
      selectOption: [],
      selTree: null,
      value: "",
      lastDataMap: {},
      dataSource: [],
      defaultKeyList: [],
    }
  }

  componentDidMount() {
    const { dataSource = [], defaultKeyList = [] } = this.props
    this.initDataSource(dataSource)
    this.setState({
      dataSource: dataSource,
      defaultKeyList: defaultKeyList,
      selectOption: defaultKeyList
    })
  }

  componentWillReceiveProps(nextProps) {
    const { dataSource } = this.state
    const newdata = nextProps.dataSource.toString()
    if (dataSource.toString() !== newdata) {
      this.initDataSource(nextProps.dataSource)
      this.setState({
        dataSource: nextProps.dataSource,
        defaultKeyList: nextProps.defaultKeyList,
        selectOption: nextProps.defaultKeyList ? nextProps.defaultKeyList : []
      })
    }
  }

  initDataSource = (dataSource = [] as Array<DataSorce>) => {
    let lastDataMap = {} as any
    const dataMap = (data: any, parentId?: any) => {
      const { children, id } = data
      if (children && children.length) {
        for (let item of children) {
          dataMap(item, parentId ? `${parentId}-${item.id}` : item.id)
        }
      } else {
        data.parentId = parentId
        lastDataMap[id.toString()] = data
      }
    }
    for (let item of dataSource) {
      dataMap(item, item.id)
    }
    console.log(lastDataMap)
    this.setState({
      lastDataMap
    })
  }

  divOnfocus = (e: any) => {
    const { target } = e
    const { disable = false } = this.props
    if (!target.classList.contains("dtc-tree-open") && !disable) {
      target.classList.add("dtc-tree-open")
    }
    if (!target.classList.contains("dtc-tree-focus") && !disable) {
      target.classList.add("dtc-tree-focus")
    }
  }
  divOnBlur = (e: any) => {
    const { target } = e
    const { disable = false } = this.props
    if (target.classList.contains("dtc-tree-open") && !disable) {
      target.classList.remove("dtc-tree-open")
    }
    if (target.classList.contains("dtc-tree-focus") && !disable) {
      target.classList.remove("dtc-tree-focus")
    }
  }

  /* 渲染树节点 */
  renderTree = (data = [] as any) => {
    return data.map((item: any) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.id} dataRef={item}>
            {this.renderTree(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode title={item.title} key={item.id} dataRef={item} />;
    });
  }

  onChecked = (checked = [] as any) => {
    this.setState({
      selectOption: checked
    })
  }

  closeTag = (item: any) => {
    let { selectOption = [], lastDataMap } = this.state
    let selFamilOption = []
    if (lastDataMap[item]) {
      selFamilOption = lastDataMap[item].parentId.split('-')
    }
    selFamilOption.map((fam: any) => {
      let index = selectOption.indexOf(fam)
      if (index != -1) {
        selectOption.splice(index, 1)
      }
    })
    this.setState({
      selectOption
    })
  }

  render() {
    const {
      selectOption = [],
      value = "",
      lastDataMap = {}
    } = this.state
    const {
      dataSource = [],
      disable = false
    } = this.props
    return (
      <div style={{ width: 500 }} className={classnames("dtc-tree", disable ? "dtc-tree-disable" : "")} onFocus={this.divOnfocus} tabIndex={-1} onBlur={this.divOnBlur}>
        <div className="dtc-tree-content">
          <div className="dtc-tree-header">
            {selectOption.map(item => {
              return lastDataMap[item * 1] && <Tag key={item} onClose={() => { this.closeTag(item) }} size="small" closable>{lastDataMap[item * 1].title}</Tag>
            })}
            {(!selectOption.length && !value) && <span className="dtc-tree-placeholder">请选择</span>}
          </div>
          <div className={classnames("dtc-tree-menu")}>
            {dataSource.length ?
              <div>
                <Tree
                  checkable
                  defaultExpandAll
                  onCheck={this.onChecked}
                  checkedKeys={selectOption}
                >
                  {this.renderTree(dataSource)}
                </Tree>
              </div> :
              <div className="dtc-tree-empty">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            }
          </div>
        </div>
        <div className="dtc-tree-disable-content"></div>
      </div>
    )
  }
}

export default SelectTree;
