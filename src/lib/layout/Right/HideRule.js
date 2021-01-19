/**
 * Date: 2021年1月18日17:18:32
 * Author: 刘伶俐
 * Desc: 表单设计器-属性配置区-组件配置-隐藏规则
 */
import React from 'react';
import {Button, Dialog, Checkbox, Select, Input, Dropdown, Menu} from '@alifd/next';
import IconFont from '../../components/IconFont';

export default class HideRule extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
    this.typeDataSource = [
      {label: '包含任一', value: '1'},
      {label: '包含全部', value: '2'},
      {label: '完全相等', value: '3'}
    ];
  }
  
  onClose(){
    this.setState({
      visible: false
    })
  }
  
  onOk(){
    this.setState({
      visible: false
    })
  }
  
  /**
   * 添加规则
   */
  onAddRule(data){
    let {value=[], onChange} = this.props;
    if(value===null) value = [];
    value.push({
      type: data.type,
      relation: data.id,
      noValueHide: false,
      useShowType: false,
      userHideType: false,
      showType: '1',
      hideType: '1',
      showValue: null,
      hideValue: null,
    });
    onChange && onChange(value)
  }
  
  onDeleteRule(index){
    let {value=[], onChange} = this.props;
    if(value===null) value = [];
  
    value.splice(index, 1);
  
    onChange && onChange(value)
  }
  
  valueChange(index, type, value1){
    let {value=[], onChange} = this.props;
    if(value===null) value = [];
    value[index][type] = value1;
    onChange && onChange(value)
  }
  
  render(){
    let {value=[], schema, selectedItem} = this.props;
    if(value===null) value = [];
    return(
      <div className='hide-rule'>
        <Button text type='primary' onClick={()=>{
          this.setState({
            visible: true
          })
        }}
        >
          <IconFont type='setting'/>
        </Button>
        {
          this.state.visible &&
            <Dialog
              title='显隐规则配置'
              visible={true}
              onOk={this.onOk.bind(this)}
              onClose={this.onClose.bind(this)}
              onCancel={this.onClose.bind(this)}
            >
              <div style={{width: 500, height: 400}}>
                <Dropdown
                  trigger={<Button type='primary' style={{marginBottom: 10}}>添加控制项</Button>}
                >
                  <Menu>
                    {
                      Object.keys(schema).filter(key=>{
                        return ![selectedItem.id, ...value.map(item=>item.relation)].includes(key) && schema[key].type!=='area' && schema[key].parent!==selectedItem.id
                      }).map(key=>{
                        return (
                          <Menu.Item key={key} onClick={this.onAddRule.bind(this, schema[key])}>
                            {schema[key].labelText}（{schema[key].id}）
                          </Menu.Item>
                        )
                      })
                    }
                  </Menu>
                </Dropdown>
                <div style={{height: 350, overflow: 'auto'}}>
                  {
                    value.map((item, index)=>{
                      const curItem = schema[item.relation];
                      const Component = curItem.dataSource?Select: Input;
                      return (
                        <div className='hide-rule-item' key={index}>
                          <div className='hide-rule-item-title'>
                            {curItem.labelText}（{item.relation}）
                            <Button text style={{float: 'right', marginTop: 3}} onClick={this.onDeleteRule.bind(this, index)}><IconFont type='delete'/></Button>
                          </div>
                          <div className='hide-rule-item-content'>
                            <div className='hide-rule-item-single'>
                              <Checkbox
                                checked={item.noValueHide}
                                onChange={this.valueChange.bind(this, index, 'noValueHide')}
                              >无值时隐藏</Checkbox>
                            </div>
                            <div className='hide-rule-item-single'>
                              <Checkbox
                                style={{marginRight: 4}}
                                checked={item.useShowType}
                                onChange={this.valueChange.bind(this, index, 'useShowType')}
                              />
                              <Select
                                style={{marginRight: 10, width: 110}}
                                dataSource={this.typeDataSource}
                                value={item.showType}
                                onChange={this.valueChange.bind(this, index, 'showType')}
                              />
                              以下值显示
                              <Component
                                multiple
                                showSearch
                                style={{width: 260, marginLeft: 6}}
                                dataSource={curItem.dataSource}
                                value={item.showValue}
                                onChange={this.valueChange.bind(this, index, 'showValue')}
                              />
                            </div>
                            <div className='hide-rule-item-single'>
                              <Checkbox
                                style={{marginRight: 4}}
                                checked={item.useHideType}
                                onChange={this.valueChange.bind(this, index, 'useHideType')}
                              />
                              <Select
                                style={{marginRight: 10, width: 110}}
                                dataSource={this.typeDataSource}
                                value={item.hideType}
                                onChange={this.valueChange.bind(this, index, 'hideType')}
                              />
                              以下值隐藏
                              <Component
                                multiple
                                showSearch
                                style={{width: 260, marginLeft: 6}}
                                dataSource={curItem.dataSource}
                                value={item.hideValue}
                                onChange={this.valueChange.bind(this, index, 'hideValue')}
                              />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </Dialog>
        }
      </div>
    )
  }
}