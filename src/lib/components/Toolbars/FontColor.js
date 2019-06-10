/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 工具栏 -> 字体颜色
 */
import React from 'react';
import {SketchPicker} from 'react-color';
import {Dropdown} from '@alifd/next';
import IconFont from "../IconFont";
import Utils from '../../utils';

export default class FontColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeComplete(color) {
    let rgbaColor = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
    const {editingShape, editingShapeIndex, shapeGroup} = this.props;
    if (!editingShape) {
      this.setState({
        visible: false
      });
      return;
    }
    const oldShapeGroup = Utils.deepClone(shapeGroup, []);
    const oldStyle = editingShape.fontStyle || {};
    const newFontStyle = {
      ...oldStyle,
      color: rgbaColor
    };
    let newShape = {
      ...editingShape,
      fontStyle: newFontStyle
    };

    this.setState({
      visible: false
    });

    oldShapeGroup[editingShapeIndex] = newShape;

    this.props.onChange && this.props.onChange(oldShapeGroup);
  }

  render() {
    let {editingShape, className, curShapeName, shapeName} = this.props;
    editingShape = editingShape || {};
    let colorStr = (editingShape.fontStyle || {}).color;
    let color;
    if (colorStr) {
      color = Utils.colorRGBtoJson(colorStr);
    }
    return (
      <Dropdown
        triggerType='click'
        visible={this.state.visible}
        trigger={
          <button
            className={`control-button ${className || ''} ${curShapeName === shapeName ? 'active' : ''}`}
            title='字体颜色'
          >
            <IconFont type='font-color'/>
          </button>
        }
        className={`font-color-dropdown ${this.state.className}`}
        onVisibleChange={(visible) => {
          this.setState({
            visible: visible
          });
        }}
      >
        <SketchPicker
          color={color}
          onChangeComplete={this.handleChangeComplete.bind(this)}
        />
      </Dropdown>
    )
  }
}
