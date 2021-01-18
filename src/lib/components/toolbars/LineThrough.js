/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 工具栏 -> 删除线
 */
import React from 'react';
import Utils from '../../utils';
import IconFont from "../IconFont";

export default class LineThrough extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeStyle(lineWidth) {
    const {editingShape, editingShapeIndex, shapeGroup} = this.props;
    if (!editingShape) return;
    const oldShapeGroup = Utils.deepClone(shapeGroup, []);
    const oldStyle = editingShape.fontStyle || {};
    const lineThrough = oldStyle.textDecoration === 'line-through';
    const newStyle = {
      ...oldStyle,
      textDecoration: lineThrough ? undefined : 'line-through'
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
    let lineThrough = (editingShape.fontStyle || {}).textDecoration === 'line-through';

    return (
      <button
        className={`control-button ${className || ''} ${lineThrough ? 'active' : ''}`}
        onClick={this.onChangeStyle.bind(this)}
        title='删除线'
      >
        <IconFont type='through-line'/>
      </button>
    )
  }
}
