
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

const borderSetting = [
  {
    label: '边框',
    key: 'border',
    desc: ' ',
    type: 'checkboxGroup',
    dataSource: [
      {label: '上', value: 'top'},
      {label: '下', value: 'bottom'},
      {label: '左', value: 'left'},
      {label: '右', value: 'right'}
    ]
  },
  {
    label: '边框样式',
    key: 'borderStyle',
    desc: ' ',
    type: 'select',
    dataSource: [
      {label: '实线', value: 'solid'},
      {label: '虚线', value: 'dashed'},
    ]
  },
  {
    label: '边框宽度',
    key: 'borderWidth',
    desc: ' ',
    type: 'selectAuto',
    dataSource: [
      {label: '1', value: 1},
      {label: '2', value: 2},
      {label: '3', value: 3},
      {label: '4', value: 4},
    ]
  },
  {
    label: '边框颜色',
    key: 'borderColor',
    desc: ' ',
    type: 'sketchPicker',
  },
];

const columnDataSource = [
  {label: '一行一列', value: '1'},
  {label: '一行二列', value: '2'},
  {label: '一行三列', value: '3'},
  {label: '一行四列', value: '4'},
  {label: '一行五列', value: '5'}
];

const commonSetting = [
  {label: 'id', key: 'id', desc: '数据存储的名称/英文/必填 ', type: 'input', disabled: true},
  {label: '标签', key: 'labelText', desc: ' ', type: 'input'},
  {label: '说明', key: 'description', desc: ' ', type: 'input'},
  {
    label: '元素宽度',
    key: 'wrapWidth',
    desc: ' ',
    type: 'select',
    clear: true,
    dataSource: columnDataSource
  },
  {label: '标签宽度', key: 'labelWidth', desc: ' ', type: 'input'},
  ...borderSetting,
  {label: '显隐规则', key: 'hideRule', type: 'hideRule'},
];

export const formSetting = [
  {
    label: '整体布局',
    key: 'column',
    type: 'select',
    dataSource: columnDataSource,
  },
  {label: '标签宽度', key: 'labelWidth', desc: ' ', type: 'input'},
  {
    label: '标签展示模式',
    key: 'displayType',
    desc: ' ',
    type: 'select',
    dataSource: [
      {label: '单行显示', value: 'row'},
      {label: '换行显示', value: 'column'},
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
  ...borderSetting,
];

export const elements = [
  {
    text: '纯文本',
    type: 'text',
    schema: {
      value: '',
      type: 'text',
      wrapStyle: {},
    },
    setting: [
      {label: 'id', key: 'id', desc: '数据存储的名称/英文/必填 ', type: 'input', disabled: true},
      {label: '元素宽度', key: 'wrapWidth', desc: ' ', type: 'input'},
      {label: '值', key: 'value', desc: ' ', type: 'input'},
      ...borderSetting,
      {label: '显隐规则', key: 'hideRule', type: 'hideRule'},
    ],
  },
  {
    text: '文本框',
    type: 'input',
    schema: {
      labelText: '文本框',
      type: 'input',
      wrapStyle: {},
    },
    setting: [
      ...commonSetting,
      {label: '正则表达式', key: 'reg', type: 'input'},
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
      {label: '多行文本', key: 'isRows', desc: ' ', type: 'checkbox'},
      {label: '显示行数', key: 'rows', desc: ' ', type: 'input'},
    ],
  },
  {
    text: '下拉选择',
    type: 'select',
    schema: {
      labelText: '下拉选择',
      type: 'select',
      mode: 'single',
      wrapStyle: {},
      dataSource: [
        {label: '值1', value: '01'},
        {label: '值2', value: '02'}
      ]
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
      {
        label: '选择模式',
        key: 'mode',
        desc: ' ',
        type: 'select',
        dataSource: [
          {label: '单选', value: 'single'},
          {label: '多选', value: 'multiple'},
          {label: '标签', value: 'tag'}
        ]
      },
      {label: '选项', key: 'dataSource', desc: ' ', type: 'optionList'},
    ],
  },
  {
    text: '单选按钮组',
    type: 'radioGroup',
    schema: {
      labelText: '单选按钮组',
      type: 'radioGroup',
      wrapStyle: {},
      dataSource: [
        {label: '值1', value: '01'},
        {label: '值2', value: '02'}
      ]
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
      {
        label: '显示方式',
        key: 'itemDirection',
        desc: ' ',
        type: 'radioGroup',
        dataSource: [
          {label: '平铺', value: 'hoz'},
          {label: '换行', value: 'ver'}
        ]
      },
      {label: '选项', key: 'dataSource', desc: ' ', type: 'optionList'},
    ],
  },
  {
    text: '复选按钮',
    type: 'checkbox',
    schema: {
      labelText: '复选按钮',
      type: 'checkbox',
      wrapStyle: {},
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
    ],
  },
  {
    text: '复选按钮组',
    type: 'checkboxGroup',
    schema: {
      labelText: '复选按钮组',
      type: 'checkboxGroup',
      showType: 'ver',
      wrapStyle: {},
      dataSource: [
        {label: '值1', value: '01'},
        {label: '值2', value: '02'}
      ]
    },
    setting: [
      ...commonSetting,
      {label: '只读', key: 'disabled', desc: ' ', type: 'checkbox'},
      {
        label: '显示方式',
        key: 'itemDirection',
        desc: ' ',
        type: 'radioGroup',
        dataSource: [
          {label: '平铺', value: 'hoz'},
          {label: '换行', value: 'ver'}
        ]
      },
      {label: '选项', key: 'dataSource', desc: ' ', type: 'optionList'},
    ],
  },
  {
    text: '时间选择器',
    type: 'datePicker',
    schema: {
      labelText: '时间选择器',
      type: 'datePicker',
      wrapStyle: {},
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
      wrapStyle: {},
    },
    setting: [
      ...commonSetting,
      {label: '计算规则', key: 'calculateSetting', desc: ' ', type: 'calculateSetting'},
    ],
  },
  {
    text: '拼接文本',
    type: 'joinText',
    schema: {
      labelText: '拼接文本',
      type: 'joinText',
      wrapStyle: {},
    },
    setting: [
      ...commonSetting,
      {label: '拼接规则', key: 'joinTextSetting', desc: ' ', type: 'joinTextSetting'},
    ],
  },
  {
    text: '区域',
    type: 'area',
    schema: {
      labelText: '区域',
      type: 'area',
      wrapStyle: {},
    },
    setting: [
      {label: 'id', key: 'id', desc: '数据存储的名称/英文/必填 ', type: 'input'},
      {label: '标签', key: 'labelText', desc: ' ', type: 'input'},
      {label: '说明', key: 'description', desc: ' ', type: 'input'},
      {
        label: '元素宽度',
        key: 'wrapWidth',
        desc: ' ',
        type: 'select',
        clear: true,
        dataSource: columnDataSource
      },
      {label: '显隐规则', key: 'hideRule', type: 'hideRule'},
      ...formSetting,
    ],
  },
  {
    text: '成组表单',
    type: 'group',
    schema: {
      labelText: '成组表单',
      type: 'group',
      wrapStyle: {},
    },
    setting: [
      {label: 'id', key: 'id', desc: '数据存储的名称/英文/必填 ', type: 'input'},
      {label: '标签', key: 'labelText', desc: ' ', type: 'input'},
      {label: '说明', key: 'description', desc: ' ', type: 'input'},
      {
        label: '元素宽度',
        key: 'wrapWidth',
        desc: ' ',
        type: 'select',
        clear: true,
        dataSource: columnDataSource
      },
      {label: '显隐规则', key: 'hideRule', type: 'hideRule'},
      ...formSetting,
      {label: '允许新增', key: 'allowAdd', desc: ' ', type: 'checkbox'},
      {label: '新增条数', key: 'maxAddNumber', desc: ' ', type: 'input'},
    ]
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
      type: 'input',
      labelText: '大文本框',
      isRows: true,
      rows: 2,
    },
    'area': {
      id: 'area',
      parent: '#',
      type: 'area',
      labelText: '区域啊啊',
    },
    'checkbox': {
      id: 'checkbox',
      parent: 'area',
      type: 'checkbox',
      labelText: '复选框',
      dataSource: [
        {label: '选择1', value: '01'},
        {label: '选择2', value: '02'}
      ]
    },
    'group': {
      id: 'group',
      parent: '#',
      type: 'group',
      labelText: '成组',
    },
  },
  formData: {},
  frProps: {
    column: 2,
    labelWidth: 80,
    textAlign: 'right',
    displayType: 'row',
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