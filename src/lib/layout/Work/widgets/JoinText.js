/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 表单组件->拼接文本
 */
import React from 'react';
import {Input} from  '@alifd/next';

export default class JoinText extends React.Component {
  constructor(props) {
    super(props)
  }
  
  /**
   * 获取出量/入量/瞳孔/微泵
   */
  getMultiple(str, item, itemLabelToKey){
    const reg = str.match(/「[^「」]+」/g);
    
    if(reg[0]){
      return item[itemLabelToKey[reg[0]].parent]||[]
    }
    
    return []
  }
  
  /**
   * 获取写入值
   * @param config
   * @param value
   */
  getValue(config, value){
    const {wrap, prefix, suffix, dataSource} = config;
    let showText = '';
    if([null, undefined].includes(value)){
      showText = '';
    }
    
    if(![null, '', undefined].includes(value)){
      if(dataSource && value){
        if(!Array.isArray(value)){
          if(value.indexOf('$~$')>-1){
            value = value.split('$~$').filter(item=>!!item)
          }else{
            value = value.split(',').filter(item=>!!item)
          }
        }
        showText = value.map(v=>{
          let record = dataSource.find(item=>v==item.value);
          return record?`${record.splicePrefix||''}${record.spliceLabel||record.label}${record.spliceSuffix||''}`: v;
        }).join('')
      }
      showText = `${prefix||''}${showText}${suffix||''}`;
      //段前换行
      if(wrap === '2'){
        showText = `\n${showText}`;
      }
      // 段后换行
      if(wrap === '3'){
        showText = `${showText}\n`;
      }
    }
    
    console.log({ config, value, showText })
    
    return showText;
  }
  
  /**
   * 换行文本
   * @param value
   * @returns {*}
   */
  formatValue(value) {
    if (!value || !value.split || !value.indexOf || value.indexOf(`\n`) === -1) return value;
    let currAryStr = value.split('\n');
    let currStr = '<div>';
    currAryStr.map(item => {
      currStr += `<p>${item}</p>`
    });
    currStr += '</div>';
    return currStr
  };
  
  /**
   * 解析简要病情文本
   */
  getJoinSpecialSituationText(item, splicingTextConfig={}){
    let text = '';
    
    let {items=[], showValue} = splicingTextConfig;
    let itemLabelToKey = {};
    for(let i=0; i<items.length; i++){
      let {referencePoint, label, relationPoint, relationValue} = items[i];
      relationValue = relationValue || [];
      // 如果有关联项点relationPoint且关联值relationValue无值时， 则该项点有值时才显示
      // 如果有关联项点relationPoint且关联值relationValue有值时， 则该项点对应是该值时才显示
      // referencePoint有值才显示
      let isShow = true;
      if(Array.isArray(item[referencePoint])){
        isShow = (item[referencePoint]||[]).length > 0;
      }
      if(relationPoint && relationValue.length === 0){
        isShow = ![null, '' , undefined].includes(item[relationPoint]);
      }else if(relationPoint && relationValue.length > 0){
        isShow = relationValue.filter(value=>value===item[relationPoint]).length > 0;
      }
      items[i].isShow = isShow;
      itemLabelToKey[`「${label}」`] = items[i];
    }
    
    let spliceText = (showValue||'').replace(/\{[^\{\}]+\}/g, (str)=>{
      // 分组{}
      str = str.replace('{', '').replace('}', '');
      let valueList = this.getMultiple(str, item, itemLabelToKey)||[];
      let newStr = '';
      for(let i=0; i<valueList.length; i++){
        newStr += str.replace(/「[^「」]+」/g, (subStr)=>{
          let config = itemLabelToKey[subStr];
          let isShow = config?(config.isShow || !!valueList[i][config.relationPoint]): false;
          let newSubStr = config&&isShow? this.getValue(config, valueList[i][config.referencePoint]): !config ? subStr: '';
          return newSubStr
        });
      }
      
      return newStr;
    });
    spliceText = spliceText.replace(/「[^「」]+」/g, (str)=>{
      let config = itemLabelToKey[str];
      console.log('spliceText', { config, item });
      let newStr = config && config.isShow? this.getValue(config, item[config.referencePoint]): !config ? str: '';
      return newStr
    });
    
    text += spliceText;
    
    text = text.replace('，。', '。');
    text = this.formatValue(text);
    
    console.log('getJoinSpecialSituationText', {item, splicingTextConfig, text })
    return text;
  }
  
  render(){
    const { value, onChange, isRows, joinTextSetting, formData, ...other } = this.props;
    const Component = isRows ? Input.TextArea: Input;
    
    const showLabel = this.getJoinSpecialSituationText(formData, joinTextSetting||{});
    
    return (
      <Component
        value={showLabel}
        onChange={onChange}
        {...other}
      />
    )
  }
}
