/**
 * Date: 2021年1月18日10:36:08
 * Author: 刘伶俐
 * Desc: 表单设计器-通用组件-表单
 */
import checkbox from './CheckboxControl';
import datePicker from './DatePickerControl';
import input from './InputControl';
import radio from './RadioControl';
import select from './SelectControl';
import text from './TextControl';
import textarea from './TextareaControl';
import group from './GroupControl';

const typeToWidget = {
  checkbox, datePicker, input, radio, select, text, textarea, group
};

export default typeToWidget

