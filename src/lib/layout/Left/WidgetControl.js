/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器-控件库/模板库-可拖拽的
 */
import React from 'react';
import {useDrag} from 'react-dnd';
import Utils from '../../utils';
import {addItemFun} from '../../store/utils';
import {useStore, useGlobal} from '../../store/hooks';

export default ({text, type, schema})=>{
  const [{isDragging}, dragRef] = useDrag({
    item: {
      type: 'box',
      dragItem: {
        id: `${type}_${Utils.getUuid(6)}`,
        ...schema,
      },
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  
  const setGlobal = useGlobal();
  const {selected, onFlattenChange, data, schema: schemaData} = useStore();
  
  const handleElementClick = ()=>{
    const [newFlatten, newId, newItem] = addItemFun({schemaData, selected, item: {id: `${type}_${Utils.getUuid(6)}`, ...schema}, data});
    onFlattenChange(newFlatten);
    setGlobal({ selected: newId, selectedItem: newItem});
  };
  
  return (
    <div ref={dragRef}>
      <WidgetUI text={text} onClick={handleElementClick}/>
    </div>
  )
}

const WidgetUI = ({ onClick, text }) => {
  return (
    <div className='controls-form-item' onClick={onClick}>
      <span className='controls-form-item-inner' >{text}</span>
    </div>
  );
};