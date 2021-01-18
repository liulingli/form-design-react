/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 表单组件->输入框
 */
import React from 'react';
import {Input} from  '@alifd/next';

export default class TextareaControl extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    const { value, onChange, ...other } = this.props;
    return (
      <Input.TextArea
        value={value}
        onChange={onChange}
        {...other}
      />
    )
  }
}
