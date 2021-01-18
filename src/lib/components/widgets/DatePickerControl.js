/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 表单组件->复选框
 */
import React from 'react';
import {DatePicker} from  '@alifd/next';

export default class DatePickerControl extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    const { value, ...other } = this.props;
    return (
      <DatePicker
        value={value}
        {...other}
      />
    )
  }
}
