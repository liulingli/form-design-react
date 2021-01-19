/**
 * Date: 2021年1月18日17:18:32
 * Author: 刘伶俐
 * Desc: 表单设计器-属性配置区-组件配置-选项配置
 */
import React from 'react';
import {Input, Button} from '@alifd/next';
import IconFont from '../../components/IconFont';

export default class OptionList extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  
  onChangeValue(index, type, value1){
    let {value = [{value: '', label: '', calcValue: ''}]} = this.props;
    if(!value || value.length === 0){
      value = [{value: '', label: '', calcValue: ''}]
    }
  
    value[index][type] = value1;
    this.props.onChange && this.props.onChange(value)
  }
  
  onAddItem(index){
    let {value = [{value: '', label: '', calcValue: ''}]} = this.props;
    if(!value || value.length === 0){
      value = [{value: '', label: '', calcValue: ''}]
    }
    value.splice(index+1, 0, {value: '', label: '', calcValue: ''});
    this.props.onChange && this.props.onChange(value)
  }
  
  onDeleteItem(index){
    let {value = [{value: '', label: '', calcValue: ''}]} = this.props;
    if(!value || value.length === 0){
      value = [{value: '', label: '', calcValue: ''}]
    }
    value.splice(index, 1);
    this.props.onChange && this.props.onChange(value)
  }
  
  render(){
    let {value = [{value: '', label: '', calcValue: ''}]} = this.props;
    if(!value || value.length === 0){
      value = [{value: '', label: '', calcValue: ''}]
    }
    return(
      <div className='option-list-setting'>
        <div className='option-list-title'>
          <div className='option-list-item title'>值</div>
          <div className='option-list-item title'>名称</div>
          <div className='option-list-item title'>计算值</div>
          <div className='option-list-item title'>操作</div>
        </div>
        <div className='option-list-content'>
          {
            value.map((item, index)=>{
              return (
                <div className='option-list-value' key={index}>
                  <div className='option-list-item'>
                    <Input value={item.value} onChange={this.onChangeValue.bind(this, index, 'value')}/>
                  </div>
                  <div className='option-list-item'>
                    <Input value={item.label} onChange={this.onChangeValue.bind(this, index, 'label')}/>
                  </div>
                  <div className='option-list-item'>
                    <Input value={item.calcValue} onChange={this.onChangeValue.bind(this, index, 'calcValue')}/>
                  </div>
                  <div className='option-list-item'>
                    <Button text style={{marginRight: 4}} onClick={this.onAddItem.bind(this, index)}><IconFont type='add-circle' className='green'/></Button>
                    <Button text onClick={this.onDeleteItem.bind(this, index)}><IconFont type='delete-circle' className='red'/></Button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}