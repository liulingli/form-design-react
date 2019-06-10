/**
 * Date: 2019-06-07 23:49:16
 * Author: 刘伶俐
 * Desc: 表单设计器 -> 工具栏 -> 字体大小
 */
import React from 'react';
import {Dropdown, Menu} from '@alifd/next';
import Utils from '../../utils';
import IconFont from "../IconFont"

export default class LineWidth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeStyle(fontSize) {
    const {editingShape, editingShapeIndex, shapeGroup} = this.props;
    if (!editingShape) return;
    const oldShapeGroup = Utils.deepClone(shapeGroup, []);
    const oldStyle = editingShape.fontStyle || {};
    const newFontStyle = {
      ...oldStyle,
      fontSize: fontSize
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
    let fontSize = (editingShape.fontStyle || {}).fontSize;
    for (let index = 0; index < options.fontSizes.length; index++) {
      let item = options.fontSizes[index];
      if (fontSize === item.size) {
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
            title='字体大小'
          >
            <IconFont type='font-size'/>
          </button>
        }
        className={`font-size-dropdown ${this.state.className}`}
      >
        <Menu>
          {options.fontSizes.map((item, index) => {
            return (
              <Menu.Item
                key={index}
                selected={currentIndex === index}
                onClick={(e) => {
                  this.onChangeStyle(item.size)
                }}
              >
                <span style={{fontSize: 12}}>{item.name}</span>
              </Menu.Item>
            )
          })}
        </Menu>
      </Dropdown>
    )
  }
}
