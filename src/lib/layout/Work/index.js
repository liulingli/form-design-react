/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器-工作区域
 */
import React from 'react';
import {Button} from '@alifd/next';
import IconFont from '../../components/IconFont';
import Wrapper from './Wrapper';
import RenderField from './RenderField';
import {useStore} from '../../store/hooks';

const FR = ({data: frData, parentItem={}, valueData, onChangeValue})=>{
  const {data, frProps = {}} = useStore();
  const showData = frData||data[0];
  
  if(showData.id==='#' && (showData.children||[]).length===0){
    return (
      <Wrapper parentItem={parentItem} item={frData}>
        <div className='null-h2'>点击/拖拽左侧栏的组件进行添加</div>
      </Wrapper>
    )
  }
  
  const containStyle = {
    width: `${100/(showData.wrapWidth|| parentItem.column||frProps.column||1)}%`,
  };
  
  const labelStyle = {
    width: (parentItem.labelWidth||frProps.labelWidth)-0,
    textAlign: parentItem.textAlign||frProps.textAlign
  };
  const fieldStyle = {
    flexDirection: parentItem.displayType||frProps.displayType
  };
  
  if(showData.children){
    const Component = showData.type==='group' ? WrapperAreaAdd : WrapperArea;
    return (
      <Component
        showData={showData}
        parentItem={parentItem}
        containStyle={containStyle}
      />
    )
  }else{
    return (
      <Wrapper item={showData} parentItem={parentItem} containStyle={containStyle}>
        <RenderField
          data={showData}
          labelStyle={labelStyle}
          fieldStyle={fieldStyle}
          valueData={valueData}
          onChangeValue={onChangeValue}
        />
      </Wrapper>
    )
  }
};

// 区域
const WrapperArea = ({hideTitle, showData, parentItem, containStyle, valueData, onChangeValue, isGroup})=>{
  
  return (
    <Wrapper
      item={showData}
      parentItem={parentItem}
      containStyle={{
        ...containStyle,
        flexDirection: 'column'
      }}
      inside={true}
      isGroup={isGroup}
    >
      {showData.id !== '#' && !hideTitle && <div className='wrapper-title'>{showData.labelText}</div>}
      <div className={showData.id !== '#'?'field-wrapper-group':'field-wrapper-group-top'}>
        {
          showData.children.map((item, index)=>{
            return (
              <FR
                key={index}
                data={item}
                parentItem={showData}
                valueData={valueData}
                onChangeValue={onChangeValue}
              />
            )
          })
        }
      </div>
    </Wrapper>
  )
};

const WrapperAreaAdd = ({showData, parentItem, containStyle})=>{
  const {formData = {}, onChange, preview} = useStore();
  let valueList = formData[showData.id]||[{}];
  if(valueList.length === 0){
    valueList = [{}];
  }
  
  const onChangeHandle = (value)=>{
    formData[showData.id] = value;
    onChange && onChange(formData);
  };
  
  const addItem = (index)=>{
    valueList.splice(index+1, 0, {});
    onChangeHandle(valueList)
  };
  const deleteItem = (index)=>{
    valueList.splice(index, 1);
    onChangeHandle(valueList)
  };
  const changeItem = (index, type, value)=>{
    valueList[index][type] = value;
    onChangeHandle(valueList)
  };
  
  return (
    <Wrapper
      item={showData}
      parentItem={parentItem}
      containStyle={containStyle}
      className={`${preview?'field-field-wrapper': 'field-wrapper'} add`}
      inside={true}
    >
      <div className='wrapper-title'>{showData.labelText}</div>
      <div className='field-wrapper-content'>
        {
          valueList.map((item, index)=>{
            return (
              <div key={index} className='WrapperAreaAdd-item'>
                <div className='WrapperAreaAdd-item-content'>
                  <WrapperArea
                    {...{showData, parentItem, containStyle: {}}}
                    valueData={item}
                    hideTitle={true}
                    isGroup={true}
                    onChangeValue={(type, value)=>{
                      changeItem(index, type, value)
                    }}
                  />
                </div>
                <div className='WrapperAreaAdd-item-options'>
                  <Button text style={{marginRight: 6}} onClick={()=>{
                    addItem(index)
                  }}><IconFont type='add-circle' className='green'/></Button>
                  <Button text onClick={()=>{
                    deleteItem(index)
                  }}><IconFont type='delete-circle' className='red'/></Button>
                </div>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
};

export default FR;