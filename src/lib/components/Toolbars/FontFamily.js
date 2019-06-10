/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 工具栏 -> 字体
 */
import React from 'react';
import {Dropdown, Menu} from '@alifd/next';
import Utils from '../../utils';
import IconFont from "../IconFont";

export default class FontFamily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeStyle(fontFamily) {
    const {editingShape, editingShapeIndex, shapeGroup} = this.props;
    if (!editingShape) return;
    const oldShapeGroup = Utils.deepClone(shapeGroup, []);
    const oldStyle = editingShape.fontStyle || {};
    const newFontStyle = {
      ...oldStyle,
      fontFamily: fontFamily
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
    let {options, editingShape, curShapeName, shapeName, className} = this.props;
    let {currentIndex} = this.state;
    editingShape = editingShape || {};
    let fontFamily = (editingShape.fontStyle || {}).fontFamily;
    for (let index = 0; index < options.fontFamilies.length; index++) {
      let item = options.fontFamilies[index];
      if (fontFamily === item.family) {
        currentIndex = index;
        break;
      }
    }

    return (
      <Dropdown
        triggerType='click'
        trigger={
          <button
            className={`control-button ${className || ''} ${curShapeName === shapeName ? 'active' : ''}`}
            title='字体'
          >
            <IconFont type='font-family'/>
          </button>
        }
        className={`font-family-dropdown ${this.state.className}`}
      >
        <Menu>
          {options.fontFamilies.map((item, index) => {
            return (
              <Menu.Item
                key={index}
                selected={currentIndex === index}
                onClick={(e) => {
                  this.onChangeStyle(item.family)
                }}
              >
                <span style={{fontFamily: item.family}}>{item.name}</span>
              </Menu.Item>
            )
          })}
        </Menu>
      </Dropdown>
    )
  }
}
