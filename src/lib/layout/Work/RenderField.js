/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器-单个表单
 */
import React from 'react';
import typeToWidget from '../../components/widgets';
import {useStore} from '../../store/hooks';

const RenderField = ({ data })=>{
  const Widget = typeToWidget[data.type];
  
  if(!Widget) return null;
  
  const {onChange, formData} = useStore();
  
  const onChangeHandle = (value)=>{
    formData[data.id] = value;
    onChange && onChange(formData);
  };
  
  return (
    <div className='render-field'>
      <div className='render-field-label'>{data.labelText}</div>
      <div className='render-field-content'>
        <Widget {...data} value={formData[data.id]} onChange={onChangeHandle}/>
      </div>
    </div>
  )
};

export default RenderField;
