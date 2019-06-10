/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器-控件库/模板库
 */
import React from 'react';
import {Tab} from "@alifd/next";

export default class LeftControlList extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    const list = [
      {title: '纯文本', component: ''},
      {title: '文本框', component: ''},
      {title: '下拉选择框', component: ''},
      {title: '单选框', component: ''},
      {title: '多选框', component: ''},
      {title: '时间选择框', component: ''},
      {title: '公式计算', component: ''},
      {title: '区域', component: ''}
    ];

    return (
      <div className='left-control-list'>
        <Tab>
          <Tab.Item key='1' title='控件库'>
            <ul className='controls-form'>
              {
                list.map((item,i)=>{
                  return (
                    <li key={i} className='controls-form-item' draggable={true}>
                      <span className='controls-form-item-inner'>{item.title}</span>
                    </li>
                  )
                })
              }
            </ul>
          </Tab.Item>
          <Tab.Item key='2' title='模板库'>
            <div className='template-list'>

            </div>
          </Tab.Item>
        </Tab>
      </div>
    )
  }
}
