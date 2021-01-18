/**
 * Date: 2021年1月18日17:18:32
 * Author: 刘伶俐
 * Desc: 表单设计器-属性配置区-组件配置
 */
import React from 'react';
import {useStore} from '../../store/hooks';
import {typeToSetting} from '../../config';
import {Input, Radio, Select, Checkbox} from '@alifd/next';

const typeToComponent = {
  input: Input,
  select: Select,
  radioGroup: Radio.Group,
  checkbox: Checkbox,
};

export default ()=>{
  const {selected, selectedItem, frProps={}, onItemSettingChange} = useStore();
  const settings = selectedItem?typeToSetting[selectedItem.type]: [];
  
  const onChange = (type, value)=>{
    onItemSettingChange(selected, type, value);
  };
  
  return (
    <div className='setting-main'>
      {
        settings.map((item, index)=>{
          const Component = typeToComponent[item.type];
          const {label, ...other} = item;
          return (
            <div key={index} className='setting-item'>
              <div className='setting-item-label'>{label}</div>
              <div className='setting-item-content'>
                {Component &&
                <Component
                  {...other}
                  value={selectedItem[item.key]||frProps[item.key]}
                  onChange={(value)=>{
                    onChange(item.key, value)
                  }}
                />}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}