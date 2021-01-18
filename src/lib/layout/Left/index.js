/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器-控件库/模板库
 */
import React from 'react';
import {Tab} from '@alifd/next';
import WidgetControl from './WidgetControl';
import {elements} from '../../config';

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className='left-control-list'>
        <Tab>
          <Tab.Item key='1' title='控件库'>
            <div className='controls-form'>
              {
                elements.map((item, i)=>{
                  return (
                    <WidgetControl key={i} text={item.text} {...item}/>
                  )
                })
              }
            </div>
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
