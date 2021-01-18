/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器-工作区域
 */
import React from 'react';
import Wrapper from './Wrapper';
import RenderField from './RenderField';
import {useStore} from '../../store/hooks';

const FR = ({data: frData, id, parentItem={}, item: curItem={}})=>{
  const {data, frProps = {}} = useStore();
  const showData = frData||data;
  if(showData.length === 0 && !parentItem){
    return (
      <Wrapper parentItem={parentItem} item={curItem}>
        <div>点击/拖拽左侧栏的组件进行添加</div>
      </Wrapper>
    )
  }
  
  const containStyle = {
    width: `${100/(parentItem.column||frProps.column||1)}%`
  };
  
  let children = showData.map((item, i)=>{
    if(item.children){
      return <FR key={i} data={item.children} item={item} parentItem={curItem}/>
    }else {
      const containStyle = {
        width: `${100/(curItem.column||frProps.column||1)}%`
      };
      const labelStyle = {
        width: curItem.labelWidth||frProps.labelWidth
      };
      return (
        <Wrapper
          key={i}
          item={item}
          parentItem={curItem}
          inside={item.type==='area'}
          containStyle={containStyle}
        >
          <RenderField data={item} labelStyle={labelStyle}/>
        </Wrapper>
      )
    }
  });
  
  if(curItem && curItem.type==='area'&& curItem.id!=='#'){
    children = <Wrapper className={'gray-bg'}>{children}</Wrapper>
  }
  
  if(showData[0] && showData[0].id === '#'){
    return children
  }else {
    return (
      <Wrapper
        id={id}
        parentItem={parentItem}
        item={curItem}
        containStyle={containStyle}
      >
        {curItem.type==='area' && curItem.id!=='#' && <div className='wrapper-title'>{curItem.labelText}</div>}
        {children}
      </Wrapper>
    )
  }
};

export default FR
