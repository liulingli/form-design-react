/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 工具栏 -> 背景颜色
 */
import React from 'react';
import {SketchPicker} from 'react-color';
import {Dropdown} from '@alifd/next';
import Utils from '../../utils';

export default class StrokeColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeStyle(color) {
    let strokeColor = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
    const {editingShape, editingShapeIndex, shapeGroup} = this.props;
    if (!editingShape) {
      this.setState({
        visible: false
      });
      return;
    }
    const oldShapeGroup = Utils.deepClone(shapeGroup, []);
    const oldStyle = editingShape.style || {};
    const newStyle = {
      ...oldStyle,
      strokeColor: strokeColor
    };
    let newShape = {
      ...editingShape,
      style: newStyle
    };

    this.setState({
      visible: false
    });

    oldShapeGroup[editingShapeIndex] = newShape;

    this.props.onChange && this.props.onChange(oldShapeGroup);
  }

  render() {
    let {editingShape, curShapeName, shapeName, className} = this.props;
    editingShape = editingShape || {};
    let colorStr = (editingShape.style || {}).strokeColor;
    let color;
    if (colorStr) {
      color = Utils.colorRGBtoJson(colorStr);
    }

    return (
      <Dropdown
        visible={this.state.visible}
        triggerType='click'
        trigger={
          <button
            className={`control-button ${className || ''} ${curShapeName === shapeName ? 'active' : ''}`}
            title='背景颜色'
          >
            背景颜色
          </button>
        }
        className={`stroke-color-dropdown ${this.state.className}`}
        onVisibleChange={(visible) => {
          this.setState({
            visible: visible
          });
        }}
      >
        <SketchPicker
          color={color}
          onChangeComplete={this.onChangeStyle.bind(this)}
        />
      </Dropdown>
    )
  }
}
