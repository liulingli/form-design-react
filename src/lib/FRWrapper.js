/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器
 */
import React, {forwardRef} from 'react';
import {Ctx, StoreCtx} from './store/context';
import Toolbar from './layout/Top';
import WorkAreaGrid from './layout/Work/index';
import ControlList from './layout/Left';
import Setting from './layout/Right';
import config from './config/index';
import {parseFlattenToData, parseDataToFlatten} from './store/utils';

const Wrapper = ({schema, formData, onChange, onSchemaChange, setGlobal, frProps, onFrPropsChange, ...rootState}) => {
  const {simple = true, preview} = rootState;
  
  const data = parseFlattenToData(schema.schema);
  
  const onFlattenChange = data => {
    const newSchema = parseDataToFlatten(data);
    // 判断只有schema变化时才调用，一般需求的用户不需要
    if (onSchemaChange) {
      onSchemaChange(newSchema);
    }
  };
  
  const store = {
    ...rootState,
    data: data,
    formData,
    schema,
    frProps,
    options: config,
    onFlattenChange,
    onFrPropsChange,
    onChange,
  };
  
  return (
    <Ctx.Provider value={setGlobal}>
      <StoreCtx.Provider value={store}>
        <div className='react-form-design'>
          <div className='react-form-design-toolbar'>
            <Toolbar/>
          </div>
          <div className='react-form-design-drawer'>
            <div className='react-form-design-drawer-left'>
              <ControlList />
            </div>
            <div className='react-form-design-drawer-center'>
              <WorkAreaGrid />
            </div>
            <div className='react-form-design-drawer-right'>
              <Setting />
            </div>
          </div>
        </div>
      </StoreCtx.Provider>
    </Ctx.Provider>
  )
};

const FRWrapper = forwardRef(Wrapper);

FRWrapper.defaultProps = {
  labelWidth: 120,
};

export default FRWrapper;