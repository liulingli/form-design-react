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

const Main = ({defaultValue, isEdit: isEdit}, ref)=>{
  const [state, setState] = useSet({
    schema: defaultValue ? defaultValue : DEFAULT_SCHEMA,
    preview: false, // preview = false 是编辑模式
    selected: undefined, // 被选中的$id,
    selectedItem: undefined,
    undoItems: [],
    redoItems: [],
    isEdit: isEdit,
  });
  
  useEffect(() => {
  });
  
  const onChange = data => {
    addUndoItems(schema);
    const result = { ...schema};
    result.formData = data;
    setState({ schema: result });
  };
  
  const onSchemaChange = newSchema => {
    addUndoItems(schema);
    const result = { ...schema};
    result.schema = newSchema;
    setState({ schema: result });
  };
  
  const onFrPropsChange = (frProps)=>{
    addUndoItems(schema);
    const result = {...schema};
    result.frProps = frProps;
    setState({ schema: result });
  };
  
  const onItemSettingChange = (selected, type, value)=>{
    addUndoItems(schema);
    const result = {...schema};
    const formData = result.formData;
    if(type === 'value'){
      formData[selected] = value;
    }else{
      result.schema[selected][type] = value;
      selectedItem[type] = value;
    }
    result.formData = formData;
    setState({
      schema: result,
      selectedItem,
    })
  };
  
  const onImportData = ()=>{
    const file = document.createElement('input');
    file.setAttribute('type', 'file');
    file.onchange = (event) => {
      const target = event.target;
      if (target.files && target.files.length) {
        const fileInfo = target.files[0];
        const reader = new FileReader();
        reader.onload = function (evt) {
          let formDesignString = evt.target.result.toString();
          try{
            let schema = JSON.parse(formDesignString);
            setState({
              schema: schema,
              formData: schema.formData||{},
              frProps: schema.frProps||{},
            })
          }catch (e) {
          }
        };
        reader.readAsText(fileInfo, 'utf-8');
      }
    };
    file.click();
  };
  
  const onExportData = ()=>{
    let exportData = JSON.stringify(schema);
    let eleLink = document.createElement('a');
    eleLink.download = `${new Date()}.txt`;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    let blob = new Blob([exportData]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  };
  
  const addUndoItems = (schema)=>{
    const showSchema = JSON.parse(JSON.stringify(schema));
    undoItems.push(showSchema);
    setState({
      undoItems
    })
  };
  
  const onUndo = ()=>{
    if(undoItems.length > 0){
      const lastSchema = undoItems[undoItems.length-1];
      
      undoItems.splice(undoItems.length-1, 1);
      
      redoItems.push(JSON.parse(JSON.stringify(schema)));
    
      setState({
        undoItems,
        redoItems,
        schema: lastSchema
      })
    }
  };
  
  const onRedo = ()=>{
    if(redoItems.length > 0){
      const lastSchema = redoItems[redoItems.length-1];
  
      redoItems.splice(redoItems.length-1, 1);
  
      undoItems.push(JSON.parse(JSON.stringify(schema)));
      
      setState({
        undoItems,
        redoItems,
        schema: lastSchema
      })
    }
  };
  
  const onPreview = ()=>{
    setState({
      preview: !preview
    })
  };
  
  const {undoItems, redoItems, hovering, preview, schema, selected, selectedItem} = state;
  
  const rootState = {
    preview,
    simple: false,
    mapping: {},
    widgets:{},
    selected,
    selectedItem,
    hovering,
  };
  const showSchema = JSON.parse(JSON.stringify(schema));
  
  const allProps = {
    schema: showSchema,
    formData: showSchema.formData,
    frProps: showSchema.frProps,
    undoItems, redoItems,
  
    isEdit,
    ...rootState,
    
    onChange,
    onSchemaChange,
    onFrPropsChange,
    onItemSettingChange,
    onImportData,
    onExportData,
    onUndo,
    onRedo,
    onPreview,
    setGlobal: setState,
  };
  return (
    <FRWrapper ref={ref} {...allProps} />
  )
};

export default forwardRef(Main);

