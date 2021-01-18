/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 工具栏 -> 下划线
 */
import React from 'react';
import Utils from '../../utils';
import IconFont from "../IconFont";

export default class Underline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeStyle() {
    const {editingShape, editingShapeIndex, shapeGroup} = this.props;
    if (!editingShape) return;
    const oldShapeGroup = Utils.deepClone(shapeGroup, []);
    const oldStyle = editingShape.fontStyle || {};
    const underline = oldStyle.textDecoration === 'underline';
    const newStyle = {
      ...oldStyle,
      textDecoration: underline ? undefined : 'underline'
    };
    let newShape = {
      ...editingShape,
      fontStyle: newStyle
    };

    this.setState({
      visible: false
    });

    oldShapeGroup[editingShapeIndex] = newShape;

    this.props.onChange && this.props.onChange(oldShapeGroup);
  }

  render() {
    let {editingShape, className} = this.props;
    editingShape = editingShape || {};
    let underline = (editingShape.fontStyle || {}).textDecoration === 'underline';

    return (
      <button
        className={`control-button ${className || ''} ${underline ? 'active' : ''}`}
        onClick={this.onChangeStyle.bind(this)}
        title='下划线'
      >
        <IconFont type='underline'/>
      </button>
    )
  }
}
