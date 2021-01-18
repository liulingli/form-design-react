/**
 * Date: 2021年1月12日20:38:12
 * Author: 刘伶俐
 * Desc: 表单设计器-utils
 */
import Utils from '../utils';

// 新增表单项
export const addItemFun = ({selected, item, data})=>{
  // 新增至选中的里面，或上面
  let [dropItem, dropParent] = findItemByIdFromData(data, selected);
  
  if(!dropParent){
    dropParent = data[0];
  }
  
  if(dropItem && dropItem.type==='area'){
    dropItem.children = dropItem.children||[];
    dropItem.children.push({
      ...item,
      parent: dropItem.id,
    })
  }else{
    let dropIndex = dropItem? dropParent.children.findIndex(child=>child.id===dropItem.id): -1;
  
    if(dropIndex !==-1){
      dropParent.children.splice(dropIndex+1, 0, {
        ...item,
        parent: dropParent.id,
      })
    }else{
      dropParent.children.push({
        ...item,
        parent: dropParent.id,
      });
    }
  }
  
  return [data, item.id]
};

// 复制表单项, id要改变
export const copyItemFun = ({item, parentItem, data})=>{
  let copyItem = JSON.parse(JSON.stringify(item));
  // 重置id
  delete copyItem.parent;
  const flatten = parseDataToFlatten([copyItem]);
  const newFlatten = {};
  for(let key in flatten){
    flatten[key].newId = `${flatten[key].type}_${Utils.getUuid()}`;
  }
  for(let key in flatten){
    const newSingle = {
      ...flatten[key],
      id: flatten[key].newId,
      parent: flatten[key].parent?flatten[flatten[key].parent].newId: null,
    };
    delete newSingle.newId;
    newFlatten[flatten[key].newId] = newSingle;
  }
  
  let copyItemArray = parseFlattenToData(newFlatten);
  copyItem = copyItemArray[0]||{};
  
  parentItem.children.push({
    ...copyItem,
    parent: item.parent,
  });
  
  return [data, copyItem.id];
};

// 删除表单项
export const deleteItemFun = ({item, parentItem, data})=>{
  let index = parentItem.children.findIndex(child=>child.id === item.id);
  parentItem.children.splice(index, 1);
  let newId = (parentItem.children[index]||parentItem.children[parentItem.children.length-1]||{}).id;
  
  return [data, newId]
};

// 释放表单项，重新排序
export const dropItemFun = ({dragItem, dropItem, position, dropParent, data, isMove, dragParent})=>{
  const _position = dropItem.id === '#'?'inside': position;
  
  // 交换位置
  if(isMove){
    if(_position === 'inside'){
      // 从dragParent中删除
      if(dragParent.children){
        dragParent.children = dragParent.children.filter(item=>item.id !== dragItem.id)
      }
      // 添加至dropItem
      if(!dropItem.children){
        dropItem.children = [];
      }
      dropItem.children.push({
        ...dragItem,
        parent: dropItem.id
      });
      
    }else{
      // 在同父级交换
      let disIndex = _position === 'up' ? 0: 1;
      let dragChildren = dragParent.children;
      let dropChildren = dropParent.children;
      let dragIndex = dragChildren.findIndex(item=>item.id === dragItem.id);
      let dropIndex = dropChildren.findIndex(item=>item.id === dropItem.id);
     
      dragChildren[dragIndex] = null;
      dropChildren.splice(dropIndex+disIndex, 0, {
        ...dragItem,
        parent: dropParent.id,
      });
      
      dragParent.children = dragChildren.filter(item=>item);
      dropParent.children = dropChildren.filter(item=>item);
    }
    
    return [data, dragItem.id]
  }
  
  // 以下是新增
  if(_position === 'inside'){
    if(!dropItem.children){
      dropItem.children = [];
    }
    dropItem.children.push({
      ...dragItem,
      parent: dropItem.id
    })
  }else{
    let disIndex = _position === 'up' ? 0: 1;
    let parentChildren = dropParent.children;
    let index = parentChildren.findIndex(item=>item.id === dropItem.id);
    parentChildren.splice(index+disIndex, 0, {
      ...dragItem,
      parent: dropItem.parent
    });
    dropParent.children = parentChildren;
  }
  
  return [data, dragItem.id];
};

const setChildren = (data, parentToData={})=>{
  if(!data) return null;
  return data.map(item=>{
    const children = setChildren(parentToData[item.id], parentToData);
    return {
      ...item,
      children: children ? children : item.type==='area'?[]: null
    }
  });
};

// 解析表单成嵌套模式
export const parseFlattenToData = (flatten)=>{
  let data = [];
  let parentToData = {};
  for(let id in flatten){
    let parent = flatten[id].parent;
    if(parent){
      parentToData[parent] = parentToData[parent]||[];
      parentToData[parent].push(flatten[id])
    }else{
      data.push(flatten[id])
    }
  }
  
  return setChildren(data, parentToData);
};

// 解析表单成嵌套模式
export const parseDataToFlatten = (data, flatten={})=>{
  if(!data) return flatten;
  
  data.forEach(item=>{
    const {children, ...other} = item;
    flatten[item.id] = other;
    parseDataToFlatten(children, flatten)
  });
  
  return flatten
};

// 查找对应的
export function findItemByIdFromData(data, id, parent){
  let drop = [null, null];
  
  if(!data) return drop;
  
  for(let i=0; i<data.length; i++){
    const item = data[i];
    const children = item.children;
    
    if(item.id === id){
      drop = [item, parent];
      break;
    }else {
      drop = findItemByIdFromData(children,id, item)
    }
  }
  
  return drop
}