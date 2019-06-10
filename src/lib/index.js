/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器
 */
import './index.scss';
import React from 'react';
import LayoutToolbar from './components/Toolbars';
import LayoutWorkAreaGrid from './layout/WorkAreaGrid';
import LeftControlList from './layout/LeftControlList';
import config from './config';

export default class ReactFormDesign extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
   return(
     <div className='react-form-design'>
       <div className='react-form-design-toolbar'>
         <LayoutToolbar options={config}/>
       </div>
       <div className='react-form-design-drawer'>
         <div className='react-form-design-drawer-left'>
           <LeftControlList />
         </div>
         <div className='react-form-design-drawer-right'>
           <LayoutWorkAreaGrid />
         </div>
       </div>
     </div>
   )
  }
}
