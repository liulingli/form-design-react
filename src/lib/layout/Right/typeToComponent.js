/**
 * Date: 2021年1月18日17:18:32
 * Author: 刘伶俐
 * Desc: 表单设计器-属性配置区-组件配置
 */
import {Input, Radio, Select, Checkbox, Range} from '@alifd/next';
import OptionList from './OptionList';
import HideRule from './HideRule';
import SketchPickerField from './SketchPickerField';
import SplicingTextSetting from './SplicingTextSetting';

const typeToComponent = {
  input: Input,
  select: Select,
  radioGroup: Radio.Group,
  checkbox: Checkbox,
  checkboxGroup: Checkbox.Group,
  sketchPicker: SketchPickerField,
  optionList: OptionList,
  hideRule: HideRule,
  range: Range,
  selectAuto: Select.AutoComplete,
  joinText: SplicingTextSetting,
};

export default typeToComponent