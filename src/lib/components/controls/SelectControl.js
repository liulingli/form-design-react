/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 表单组件->下拉框
 */
import React from 'react';
import {Checkbox} from  '@alifd/next';
import Select from '@alifd/next/types/select/index.d';

export default class SelectControl extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { value, dataSource, ... other } = this.props;
    return (
      <span className='SelectControl'>
        <Select
          value={value}
          dataSource={dataSource}
          {...other}
        />
      </span>
    )
  }
}
