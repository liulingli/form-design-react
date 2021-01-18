/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 工具栏
 */
import React from 'react';
import BackgroundColor from './BackgroundColor';
import Bold from './Bold';
import FontColor from './FontColor';
import FontFamily from './FontFamily';
import FontSize from './FontSize';
import Italic from './Italic';
import LineThrough from './LineThrough';
import Split from './Split';
import Underline from './Underline';
import Undo from './Undo';
import Redo from './Redo';

export default class Toolbar extends React.Component{

  render(){
    return (
      <div className='toolbars'>
        <Undo {...this.props}/>
        <Redo {...this.props}/>

        <Split />

        <FontFamily {...this.props}/>
        <FontSize {...this.props}/>
        <FontColor {...this.props}/>
        <Bold {...this.props}/>
        <Italic {...this.props}/>
        <Underline {...this.props}/>
        <LineThrough {...this.props}/>

        <Split/>

        <BackgroundColor {...this.props}/>
      </div>
    )
  }
}

