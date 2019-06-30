/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 表单组件->单选框
 */
import React from 'react';
import {Radio} from  '@alifd/next';

export default class RadioControl extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { value, dataSource, ...other } = this.props;
    return (
      <span className='RadioControl'>
        <Radio.Group
          value={value}
          dataSource={dataSource}
          {...other}
        />
      </span>
    )
  }
}
