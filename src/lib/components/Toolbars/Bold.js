/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 工具栏 -> 加粗
 */
import React from 'react';
import IconFont from '../IconFont';
import Utils from '../../utils';

export default class Bold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeStyle() {
    const {editingShape, editingShapeIndex, shapeGroup} = this.props;
    if (!editingShape) return;
    const oldShapeGroup = Utils.deepClone(shapeGroup, []);
    const oldStyle = editingShape.fontStyle || {};
    const bold = oldStyle.fontWeight === 'bold';
    const newStyle = {
      ...oldStyle,
      fontWeight: bold ? undefined : 'bold'
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
    let bold = (editingShape.fontStyle || {}).fontWeight === 'bold';

    return (
      <button
        className={`control-button ${className || ''} ${bold ? 'active' : ''}`}
        onClick={this.onChangeStyle.bind(this)}
        title='加粗'
      >
        <IconFont type='bold'/>
      </button>
    )
  }
}
