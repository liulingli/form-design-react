/**
 * Date: 2021年1月21日16:04:00
 * Author: 刘伶俐
 * Desc: 表单设计器-工作区域-非设计模式下
 */
import React from 'react';
import {useStore} from '../../store/hooks';
import {getIsHide} from '../../store/utils';

export default ({item={type: 'area', id: '#'}, children, containStyle, className})=>{
  
  const {formData} = useStore();
  
  let isHide = getIsHide(item.hideRule, formData);
  
  let {border = [], borderStyle='solid', borderWidth=1, borderColor} = item;
  borderWidth = borderWidth - 0;
  let borderStyleMain = {
    borderStyle,
    borderColor,
    borderLeftWidth: border.includes('left')?borderWidth:0,
    borderRightWidth: border.includes('right')?borderWidth:0,
    borderTopWidth: border.includes('top')?borderWidth:0,
    borderBottomWidth: border.includes('bottom')?borderWidth:0,
  };
  
  return(
    <div
      className={`field-field-wrapper  ${className||''} ${isHide?'hide': ''}`}
      style={{
        ...containStyle,
        ...item.wrapStyle,
        ...borderStyleMain,
      }}
    >
      {
        children
      }
    </div>
  )
}