/**
 * Date: 2021年1月18日10:36:08
 * Author: 刘伶俐
 * Desc: 表单设计器-通用组件-表单
 */
import checkboxGroup from './CheckboxGroupControl';
import checkbox from './Checkbox';
import datePicker from './DatePickerControl';
import input from './InputControl';
import radioGroup from './RadioControl';
import select from './SelectControl';
import text from './TextControl';
import group from './GroupControl';
import calculate from './Calculate';
import joinText from './JoinText';

const typeToWidget = {
  checkboxGroup, checkbox, datePicker, input, radioGroup, select, text, group,
  calculate, joinText
};

export default typeToWidget

