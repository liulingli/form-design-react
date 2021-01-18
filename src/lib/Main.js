/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器
 */
import './index.scss';
import React, {forwardRef, useEffect} from 'react';
import FRWrapper from './FRWrapper';
import {useSet} from './store/hooks';
import {DEFAULT_SCHEMA} from './config';

const Main = ({defaultValue}, ref)=>{
  const [state, setState] = useSet({
    schema: defaultValue ? defaultValue : DEFAULT_SCHEMA,
    formData: defaultValue? defaultValue.formData : {},
    frProps: defaultValue? defaultValue.frProps : {
      displayType: 'row',
      column: 2,
      labelWidth: 80
    },
    hovering: undefined, // 目前没有用到
    preview: false, // preview = false 是编辑模式
    selected: undefined, // 被选中的$id, 如果object/array的内部，以首字母0标识
    selectedItem: undefined
  });
  
  useEffect(() => {
  });
  
  const onChange = data => {
    setState({ formData: data });
  };
  
  const onSchemaChange = newSchema => {
    const result = { ...schema };
    result.schema = newSchema;
    setState({ schema: result });
  };
  
  const onFrPropsChange = (frProps)=>{
    setState({
      frProps
    })
  };
  
  const onItemSettingChange = (selected, type, value)=>{
    const result = { ...schema };
    result.schema[selected][type] = value;
    selectedItem[type] = value;
    setState({
      schema: result,
      selectedItem
    })
  };
  
  const {formData, frProps, hovering, preview, schema, selected, selectedItem} = state;
  
  const rootState = {
    preview,
    simple: false,
    mapping: {},
    widgets:{},
    selected,
    selectedItem,
    hovering,
  };
  const allProps = {
    formData,
    schema,
    frProps,
    ...rootState,
    onChange,
    onSchemaChange,
    onFrPropsChange,
    onItemSettingChange,
    setGlobal: setState,
  };
  return (
    <FRWrapper ref={ref} {...allProps} />
  )
};

export default forwardRef(Main);

