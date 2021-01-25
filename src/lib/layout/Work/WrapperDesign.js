/**
 * Date: 2021年1月13日14:47:33
 * Author: 刘伶俐
 * Desc: 表单设计器-工作区域-单位工作区drag,drop
 */
import React, {useState, useRef} from 'react';
import {Button} from '@alifd/next';
import {useDrag, useDrop} from 'react-dnd';
import {useStore, useGlobal} from '../../store/hooks';
import {dropItemFun, deleteItemFun, copyItemFun, getIsHide} from '../../store/utils';
import IconFont from '../../components/IconFont';

export default ({inside, item={type: 'area', id: '#'}, children, parentItem, containStyle, className, isGroup})=>{
  const id = item.id||'#';
  const boxRef = useRef(null);
  const setGlobal = useGlobal();
  const [position, setPosition] = useState();
  const {data, onFlattenChange, selected, hovering, formData} = useStore();
  const dropItem = item;
  
  const [{ isDragging }, dragRef, dragPreview] = useDrag({
    item: { type: 'box', id: id , dragItem: item, dragParent: parentItem, isMove: true },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  
  const [{ canDrop, isOver }, dropRef] = !isGroup?useDrop({
    accept: 'box',
    drop: (item, monitor) => {
      // 如果children已经作为了drop target，不处理
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      
      const [newData, newId] = dropItemFun({
        dragItem: item.dragItem, // 从左边栏过来的，用dragItem
        dropItem: dropItem,
        position,
        data,
        dropParent: parentItem,
        dragParent: item.dragParent,
        isMove: item.isMove,
      });
      onFlattenChange(newData);
      setGlobal({ selected: newId });
    },
    hover: (item, monitor) => {
      // 只检查被hover的最小元素
      const didHover = monitor.isOver({ shallow: true });
      if (didHover) {
        // Determine rectangle on screen
        const hoverBoundingRect =
          boxRef.current && boxRef.current.getBoundingClientRect();
        // Get vertical middle
        const totalHeight = (hoverBoundingRect.bottom - hoverBoundingRect.top)
        const hoverMiddleY = totalHeight / 2;
        // Determine mouse position
        // const clientOffset = monitor.getClientOffset();
        const dragOffset = monitor.getSourceClientOffset();
        // Get pixels to the top
        const hoverClientY = dragOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        const between = totalHeight * 0.3;
        
        if (inside && hoverClientY > between && hoverClientY < totalHeight - between) {
          setPosition('inside');
        } else {
          if (hoverClientY <= hoverMiddleY) {
            setPosition('up');
          }
          // Dragging upwards
          if (hoverClientY > hoverMiddleY) {
            setPosition('down');
          }
        }
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop() && !isGroup,
    }),
  }): [{}, null];
  
  // 成组内的区域不能放置
  if(!isGroup){
    dragPreview(dropRef(boxRef));
  }
  
  const handleClick = (event)=>{
    event.stopPropagation();
    setGlobal({ selected: id, selectedItem: item });
  };
  
  const deleteItem = (event)=>{
    event.stopPropagation();
    const [newData, newId] = deleteItemFun({item, parentItem, data});
    onFlattenChange(newData);
    setGlobal({ selected: newId });
  };
  
  // 复制
  const handleItemCopy = (event)=>{
    event.stopPropagation();
    const [newData, newId] = copyItemFun({item, parentItem, data});
    onFlattenChange(newData);
    setGlobal({ selected: newId });
  };
  
  const isSelect = id===selected && id !== '#' && !isGroup;
  const isActive = canDrop && isOver;
  const hoverId = id;
  let overwriteStyle = {
    backgroundColor: hovering === hoverId ? '#ecf5ff' : '',
    opacity: isDragging ? 0 : 1,
  };
  if (isActive) {
    if (position === 'inside') {
      overwriteStyle = {
        ...overwriteStyle,
        backgroundColor: 'rgba(255,235,59,0.2)'
      };
    } else if (position === 'up') {
      overwriteStyle = {
        ...overwriteStyle,
        boxShadow: '0 -3px 0 red',
      };
    } else if (position === 'down') {
      overwriteStyle = {
        ...overwriteStyle,
        boxShadow: '0 3px 0 red',
      };
    }
  }
  
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
  
  const fieldWrapper = <div
    className={`field-wrapper ${isSelect?'select': ''} ${className||''} ${isHide?'hide': ''}`}
    ref={boxRef}
    style={{
      backgroundColor: item.type==='area'?'#f1f1f1': '',
      ...overwriteStyle,
      ...containStyle,
      ...item.wrapStyle,
      ...borderStyleMain
    }}
    onClick={handleClick}
  >
    {isSelect && !isGroup &&
    <div>
      <div className='drag-icon-wrapper' ref={dragRef}>
        <IconFont type='move'/>
      </div>
      <div className='buttons-wrapper'>
        <Button text onClick={deleteItem}><IconFont type='delete' title='删除'/></Button>
        <Button text onClick={handleItemCopy}><IconFont type='copy' title='复制'/></Button>
      </div>
    </div>
    }
    {children}
  </div>;
  
  
  return item.oneSelf?
    <div className='one-self'>{fieldWrapper}</div> : fieldWrapper
}