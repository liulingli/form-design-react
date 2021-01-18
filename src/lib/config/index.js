
export default {
  fontSizes: [{
    name: '初号',
    size: 42
  }, {
    name: '小初',
    size: 36
  }, {
    name: '一号',
    size: 26
  }, {
    name: '小一',
    size: 24
  }, {
    name: '二号',
    size: 22
  }, {
    name: '小二',
    size: 18
  }, {
    name: '三号',
    size: 16
  }, {
    name: '小三',
    size: 15
  }, {
    name: '四号',
    size: 14
  }, {
    name: '小四',
    size: 12
  }, {
    name: '五号',
    size: 10.5
  }, {
    name: '小五',
    size: 9
  }],
  fontFamilies: [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
  }],
}

const commonSetting = [
  {label: 'id', key: 'id', desc: '数据存储的名称/英文/必填 ', type: 'input', disabled: true},
  {label: '标签', key: 'labelText', desc: ' ', type: 'input'},
  {label: '说明', key: 'description', desc: ' ', type: 'input'},
  {label: '元素宽度', key: 'wrapWidth', desc: ' ', type: 'input'},
  {label: '标签宽度', key: 'labelWidth', desc: ' ', type: 'input'},
  {label: '值', key: 'value', desc: ' ', type: 'input'},
  {label: '正则表达式', key: 'reg', type: 'input'},
  {label: '显示', key: 'isShow', type: 'checkbox'},
];

export const formSetting = [
  {
    label: '整体布局',
    key: 'column',
    type: 'select',
    dataSource: [
      {label: '一行一列', value: '1'},
      {label: '一行二列', value: '2'},
      {label: '一行三列', value: '3'},
      {label: '一行四列', value: '4'},
      {label: '一行五列', value: '5'}
      ]
  },
  {label: '标签宽度', key: 'labelWidth', desc: ' ', type: 'input'},
  {
    label: '标签展示模式',
    key: 'displayType',
    desc: ' ',
    type: 'select',
    dataSource: [
      {label: '换行显示', value: 'row'},
      {label: '单行显示', value: 'column'},
    ]},
  {
    label: '标签显示位置',
    key: 'textAlign',
    desc: ' ',
    type: 'select',
    dataSource: [
      {label: '居左', value: ''},
      {label: '居中', value: 'center'},
      {label: '居右', value: 'right'},
    ]},
];

export const elements = [
  {
    text: '纯文本',
    type: 'text',
    schema: {
      text: '纯文本',
      type: 'text',
      style: {},
    },
    setting: [
      {label: '值', key: 'value', desc: ' ', type: 'input'},
    ],
  },
  {
    text: '文本框',
    type: 'input',
    schema: {
      labelText: '文本框',
      type: 'input',
      style: {},
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
    ],
  },
  {
    text: '大文本框',
    type: 'textarea',
    schema: {
      labelText: '大文本框',
      type: 'textarea',
      style: {},
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
      {label: '行数', key: 'rows', desc: ' ', type: 'input'},
    ],
  },
  {
    text: '下拉选择框',
    type: 'select',
    schema: {
      labelText: '下拉选择框',
      type: 'select',
      style: {},
      dataSource: [
        {label: '值1', value: '01'},
        {label: '值2', value: '02'}
      ]
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
      {label: '选项', key: 'dataSource', desc: ' ', type: 'optionsList'},
    ],
  },
  {
    text: '单选框',
    type: 'radio',
    schema: {
      labelText: '单选框',
      type: 'radio',
      style: {},
      dataSource: [
        {label: '值1', value: '01'},
        {label: '值2', value: '02'}
      ]
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
      {label: '选项', key: 'dataSource', desc: ' ', type: 'optionsList'},
    ],
  },
  {
    text: '多选框',
    type: 'checkbox',
    schema: {
      labelText: '多选框',
      type: 'checkbox',
      style: {},
      dataSource: [
        {label: '值1', value: '01'},
        {label: '值2', value: '02'}
      ]
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
      {label: '选项', key: 'dataSource', desc: ' ', type: 'optionsList'},
    ],
  },
  {
    text: '时间选择框',
    type: 'date',
    schema: {
      labelText: '时间选择框',
      type: 'date',
      style: {},
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
    ],
  },
  {
    text: '公式计算',
    type: 'calculate',
    schema: {
      labelText: '公式计算',
      type: 'calculate',
      style: {},
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
    ],
  },
  {
    text: '区域',
    type: 'area',
    schema: {
      labelText: '区域',
      type: 'area',
      style: {},
    },
    setting: [
      {label: 'id', key: 'id', desc: '数据存储的名称/英文/必填 ', type: 'input'},
      {label: '标签', key: 'labelText', desc: ' ', type: 'input'},
      {label: '说明', key: 'description', desc: ' ', type: 'input'},
      {label: '元素宽度', key: 'wrapWidth', desc: ' ', type: 'input'},
      {label: '显示', key: 'isShow', type: 'input'},
      ...formSetting,
      {label: '成组', key: 'isGroup', desc: ' ', type: 'checkbox'},
      {label: '允许新增', key: 'allowAdd', desc: ' ', type: 'checkbox'},
      {label: '新增条数', key: 'maxAddNumber', desc: ' ', type: 'input'},
      
    ],
  }
];

export const DEFAULT_SCHEMA = {
  schema: {
    '#': {
      id: '#',
      parent: null,
      type: 'area',
    },
    'input': {
      id: 'input',
      parent: '#',
      type: 'input',
      labelText: '文本框',
    },
    'textarea': {
      id: 'textarea',
      parent: '#',
      type: 'textarea',
      labelText: '大文本框',
    },
    'area': {
      id: 'area',
      parent: '#',
      type: 'area',
      labelText: '区域啊啊'
    },
    'checkbox': {
      id: 'checkbox',
      parent: 'area',
      type: 'checkbox',
      labelText: '复选框',
    },
  },
  formData: {},
  frProps: {
    column: 2,
    labelWidth: 80,
    displayType: 'row'
  }
};

function getTypeToSetting(elements){
  const typeToSetting = {};
  elements.forEach(item=>{
    typeToSetting[item.type] = item.setting||[];
  });
  return typeToSetting
}
export const typeToSetting = getTypeToSetting(elements);