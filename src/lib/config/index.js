
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
const columnWidthDataSource = [
  {label: '100%', value: '100%'},
  {label: '50%', value: '50%'},
  {label: '33.33%', value: '33.33%'},
  {label: '25%', value: '25%'},
  {label: '20%', value: '20%'}
];

const columnWidthDataSourceSetting = [
  {
    label: '独占一行',
    key: 'oneSelf',
    desc: ' ',
    type: 'checkbox',
  },
  {
    label: '元素宽度',
    key: 'wrapWidth',
    desc: ' ',
    type: 'selectAuto',
    hasClear: true,
    dataSource: columnWidthDataSource
  }
];

const commonSetting = [
  {label: '表单id', key: 'id', desc: '数据存储的名称/英文/必填 ', type: 'input', disabled: true},
  {label: '表单名称', key: 'formName', desc: ' ', type: 'input'},
  {label: '标签', key: 'labelText', desc: ' ', type: 'input'},
  {label: '说明', key: 'description', desc: ' ', type: 'input'},
    ...columnWidthDataSourceSetting,
  {label: '标签宽度', key: 'labelWidth', desc: ' ', type: 'input'},
  {label: '', key: 'isLabelNullWidth', desc: ' ', type: 'checkbox', text: '标签内容为空时宽度为0'},
  ...borderSetting,
  {label: '隐藏', key: 'isHide', type: 'checkbox'},
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
      {label: '居左', value: 'left'},
      {label: '居中', value: 'center'},
      {label: '居右', value: 'right'},
    ]},
  ...borderSetting,
];

export const addonSetting = [
  {label: '前缀', key: 'addonTextBefore', type: 'input'},
  {label: '后缀', key: 'addonTextAfter', type: 'input'},
  {label: '单位', key: 'unit', type: 'input'},
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
      {label: '表单id', key: 'id', desc: '数据存储的名称/英文/必填 ', type: 'input', disabled: true},
      {label: '表单名称', key: 'formName', desc: ' ', type: 'input'},
      ...columnWidthDataSourceSetting,
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
      ...addonSetting,
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
      ...addonSetting
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
      {label: '多行文本', key: 'isRows', desc: ' ', type: 'checkbox'},
      {label: '显示行数', key: 'rows', desc: ' ', type: 'input'},
      {label: '拼接规则', key: 'joinTextSetting', desc: ' ', type: 'joinText'},
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
      ...columnWidthDataSourceSetting,
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
      ...columnWidthDataSourceSetting,
      {label: '显隐规则', key: 'hideRule', type: 'hideRule'},
      ...formSetting,
      {label: '允许新增', key: 'allowAdd', desc: ' ', type: 'checkbox'},
      {label: '新增条数', key: 'maxAddNumber', desc: ' ', type: 'input'},
    ]
  }
];


export const DEFAULT_SCHEMA_EMPTY = {
  schema: {
    '#': {
      id: '#',
      parent: null,
      type: 'area',
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

export const DEFAULT_SCHEMA = {"schema":{"#":{"id":"#","parent":null,"type":"area","borderColor":"rgba(155,155,155,1)"},"input":{"id":"input","parent":"#","type":"input","labelText":"患者孕：","wrapWidth":"200px","formName":"患者孕","oneSelf":true},"area_7922161156828146926304":{"id":"area_7922161156828146926304","labelText":"","type":"area","wrapStyle":{},"parent":"#","wrapWidth":"100%","column":"4","oneSelf":true},"input_1b7b161156816544192742":{"id":"input_1b7b161156816544192742","labelText":"产：","type":"input","wrapStyle":{},"parent":"area_7922161156828146926304","isLabelNullWidth":true,"addonTextBefore":"","addonTextAfter":"，","formName":"产"},"input_86d3161156819595635757":{"id":"input_86d3161156819595635757","labelText":"","type":"input","wrapStyle":{},"parent":"area_7922161156828146926304","isLabelNullWidth":true,"reg":"","addonTextBefore":"宫内妊娠","addonTextAfter":"周+","formName":"宫内妊娠周数"},"input_84a2161156821780478245":{"id":"input_84a2161156821780478245","labelText":"","type":"input","wrapStyle":{},"parent":"area_7922161156828146926304","addonTextAfter":"天","isLabelNullWidth":true,"formName":"宫内妊娠天数"},"input_308b161156835694071854":{"id":"input_308b161156835694071854","labelText":"入院原因：","type":"input","wrapStyle":{},"parent":"#","addonTextBefore":"因","addonTextAfter":"入院。","formName":"入院原因"},"input_7f3f161156838321047690":{"id":"input_7f3f161156838321047690","labelText":"","type":"input","wrapStyle":{},"parent":"#","addonTextAfter":"。","addonTextBefore":"B超显示","isLabelNullWidth":true,"formName":"B超显示"},"radioGroup_7b38161156966660240420":{"id":"radioGroup_7b38161156966660240420","labelText":"入院方式：","type":"radioGroup","wrapStyle":{},"dataSource":[{"label":"步行","value":"01"},{"label":"扶行","value":"02"},{"value":"03","label":"轮椅","calcValue":""},{"value":"04","label":"平车","calcValue":""}],"parent":"#","wrapWidth":"1","formName":"入院方式"},"radioGroup_2b08161156975812281153":{"id":"radioGroup_2b08161156975812281153","labelText":"精神状态：","type":"radioGroup","wrapStyle":{},"dataSource":[{"label":"软弱","value":"01"},{"label":"好","value":"02"},{"value":"03","label":"略软","calcValue":""}],"parent":"#","wrapWidth":"1","formName":"精神状态"},"radioGroup_50c0161156980335429202":{"id":"radioGroup_50c0161156980335429202","labelText":"呕吐：","type":"radioGroup","wrapStyle":{},"dataSource":[{"label":"无","value":"01"},{"label":"有","value":"02"}],"parent":"#","wrapWidth":"33.33%","formName":"呕吐"},"area_8b0e161156985584230534":{"id":"area_8b0e161156985584230534","labelText":"","type":"area","wrapStyle":{},"parent":"#","column":"1","hideRule":[{"type":"radioGroup","relation":"radioGroup_50c0161156980335429202","noValueHide":false,"useShowType":true,"userHideType":false,"showType":"1","hideType":"1","showValue":["02"],"hideValue":null}]},"select_22b0161156985712940976":{"id":"select_22b0161156985712940976","labelText":"呕吐物：","type":"select","mode":"single","wrapStyle":{},"dataSource":[{"label":"胃内容物","value":"01"},{"label":"咖啡色液体","value":"02"},{"value":"03","label":"血性液体","calcValue":""},{"value":"04","label":"胆汁样液体","calcValue":""}],"parent":"area_8b0e161156985584230534","formName":"呕吐物"},"input_7d67161156993319701778":{"id":"input_7d67161156993319701778","labelText":"量：","type":"input","wrapStyle":{},"parent":"area_8b0e161156985584230534","addonTextAfter":"ml","formName":"量"},"radioGroup_48a5161157086129535807":{"id":"radioGroup_48a5161157086129535807","labelText":"宫缩：","type":"radioGroup","wrapStyle":{},"dataSource":[{"label":"有","value":"01"},{"label":"无","value":"02"}],"parent":"#","wrapWidth":"1","formName":"宫缩"},"input_3083161157085424513486":{"id":"input_3083161157085424513486","labelText":"胎心：","type":"input","wrapStyle":{},"parent":"#","wrapWidth":"3","formName":"胎心"},"radioGroup_2d5a161157106406532380":{"id":"radioGroup_2d5a161157106406532380","labelText":"阴道出血：","type":"radioGroup","wrapStyle":{},"dataSource":[{"label":"无","value":"01"},{"label":"有","value":"02"}],"parent":"#","wrapWidth":"1","formName":"阴道出血"},"radioGroup_5200161157107806523157":{"id":"radioGroup_5200161157107806523157","labelText":"阴道流液：","type":"radioGroup","wrapStyle":{},"dataSource":[{"label":"无","value":"01"},{"label":"有","value":"02"}],"parent":"#","wrapWidth":"1","formName":"阴道流液"},"checkboxGroup_94c1161157090389017729":{"id":"checkboxGroup_94c1161157090389017729","labelText":"产科入院指导：","type":"checkboxGroup","showType":"ver","wrapStyle":{},"dataSource":[{"label":"产科住院须知","value":"01"},{"label":"母婴同室","value":"02"},{"value":"03","label":"母乳喂养","calcValue":""},{"value":"04","label":"病房环境","calcValue":""},{"value":"05","label":"主管医护人员的介绍","calcValue":""}],"parent":"#","wrapWidth":"1","formName":"产科入院指导"},"joinText_8409161157120197035192":{"id":"joinText_8409161157120197035192","labelText":"拼接文本","type":"joinText","wrapStyle":{},"parent":"#","joinTextSetting":{"items":[{"wrap":"1","itemKey":"input","id":"input","parent":"#","type":"input","labelText":"患者孕：","wrapWidth":"200px","formName":"患者孕","oneSelf":true,"label":"患者孕","value":"input","parentType":"area","referencePoint":"input","prefix":"患者孕","suffix":"，","isShow":true},{"wrap":"1","itemKey":"input_1b7b161156816544192742","id":"input_1b7b161156816544192742","labelText":"产：","type":"input","wrapStyle":{},"parent":"area_7922161156828146926304","isLabelNullWidth":true,"addonTextBefore":"","addonTextAfter":"，","formName":"产","label":"产","value":"input_1b7b161156816544192742","parentType":"area","parentLabel":"","referencePoint":"input_1b7b161156816544192742","prefix":"产","suffix":"，","relationPoint":"input_1b7b161156816544192742","isShow":true},{"wrap":"1","itemKey":"input_86d3161156819595635757","id":"input_86d3161156819595635757","labelText":"","type":"input","wrapStyle":{},"parent":"area_7922161156828146926304","isLabelNullWidth":true,"reg":"","addonTextBefore":"宫内妊娠","addonTextAfter":"周+","formName":"宫内妊娠周数","label":"宫内妊娠周数","value":"input_86d3161156819595635757","parentType":"area","parentLabel":"","referencePoint":"input_86d3161156819595635757","prefix":"宫内妊娠","suffix":"周","relationPoint":"input_86d3161156819595635757","isShow":true},{"wrap":"1","itemKey":"input_84a2161156821780478245","id":"input_84a2161156821780478245","labelText":"","type":"input","wrapStyle":{},"parent":"area_7922161156828146926304","addonTextAfter":"天","isLabelNullWidth":true,"formName":"宫内妊娠天数","label":"宫内妊娠天数","value":"input_84a2161156821780478245","parentType":"area","parentLabel":"","referencePoint":"input_84a2161156821780478245","relationPoint":"input_84a2161156821780478245","prefix":"+","suffix":"天。","isShow":true},{"wrap":"1","itemKey":"input_308b161156835694071854","id":"input_308b161156835694071854","labelText":"入院原因：","type":"input","wrapStyle":{},"parent":"#","addonTextBefore":"因","addonTextAfter":"入院。","formName":"入院原因","label":"入院原因","value":"input_308b161156835694071854","parentType":"area","referencePoint":"input_308b161156835694071854","relationPoint":"input_308b161156835694071854","prefix":"因","suffix":"入院。","isShow":true},{"wrap":"1","itemKey":"input_7f3f161156838321047690","id":"input_7f3f161156838321047690","labelText":"","type":"input","wrapStyle":{},"parent":"#","addonTextAfter":"。","addonTextBefore":"B超显示","isLabelNullWidth":true,"formName":"B超显示","label":"B超显示","value":"input_7f3f161156838321047690","parentType":"area","referencePoint":"input_7f3f161156838321047690","relationPoint":"input_7f3f161156838321047690","prefix":"B超显示","suffix":"。","isShow":true},{"wrap":"1","itemKey":"radioGroup_7b38161156966660240420","id":"radioGroup_7b38161156966660240420","labelText":"入院方式：","type":"radioGroup","wrapStyle":{},"dataSource":[{"label":"步行","value":"01"},{"label":"扶行","value":"02"},{"value":"03","label":"轮椅","calcValue":""},{"value":"04","label":"平车","calcValue":""}],"parent":"#","wrapWidth":"1","formName":"入院方式","label":"入院方式","value":"radioGroup_7b38161156966660240420","parentType":"area","referencePoint":"radioGroup_7b38161156966660240420","relationPoint":"radioGroup_7b38161156966660240420","suffix":"，","isShow":true,"prefix":"入院方式"},{"wrap":"1","itemKey":"radioGroup_2b08161156975812281153","id":"radioGroup_2b08161156975812281153","labelText":"精神状态：","type":"radioGroup","wrapStyle":{},"dataSource":[{"label":"软弱","value":"01"},{"label":"好","value":"02"},{"value":"03","label":"略软","calcValue":""}],"parent":"#","wrapWidth":"1","formName":"精神状态","label":"精神状态","value":"radioGroup_2b08161156975812281153","parentType":"area","referencePoint":"radioGroup_2b08161156975812281153","relationPoint":"radioGroup_2b08161156975812281153","suffix":"，","isShow":true,"prefix":"精神状态"},{"wrap":"1","itemKey":"radioGroup_50c0161156980335429202","id":"radioGroup_50c0161156980335429202","labelText":"呕吐：","type":"radioGroup","wrapStyle":{},"dataSource":[{"label":"无","value":"01","spliceLabel":"无呕吐"},{"label":"有","value":"02","spliceLabel":"有呕吐，"}],"parent":"#","wrapWidth":"33.33%","formName":"呕吐","label":"呕吐","value":"radioGroup_50c0161156980335429202","parentType":"area","referencePoint":"radioGroup_50c0161156980335429202","relationPoint":"radioGroup_50c0161156980335429202","isShow":true},{"wrap":"1","itemKey":"select_22b0161156985712940976","id":"select_22b0161156985712940976","labelText":"呕吐物：","type":"select","mode":"single","wrapStyle":{},"dataSource":[{"label":"胃内容物","value":"01"},{"label":"咖啡色液体","value":"02"},{"value":"03","label":"血性液体","calcValue":""},{"value":"04","label":"胆汁样液体","calcValue":""}],"parent":"area_8b0e161156985584230534","formName":"呕吐物","label":"呕吐物","value":"select_22b0161156985712940976","parentType":"area","parentLabel":"","referencePoint":"select_22b0161156985712940976","prefix":"呕吐物为","suffix":"，","isShow":true},{"wrap":"1","itemKey":"input_7d67161156993319701778","id":"input_7d67161156993319701778","labelText":"量：","type":"input","wrapStyle":{},"parent":"area_8b0e161156985584230534","addonTextAfter":"ml","formName":"量","label":"量","value":"input_7d67161156993319701778","parentType":"area","parentLabel":"","referencePoint":"input_7d67161156993319701778","relationPoint":"input_7d67161156993319701778","suffix":"，","isShow":true},{"wrap":"1","itemKey":"checkboxGroup_94c1161157090389017729","id":"checkboxGroup_94c1161157090389017729","labelText":"产科入院指导：","type":"checkboxGroup","showType":"ver","wrapStyle":{},"dataSource":[{"label":"产科住院须知","value":"01","spliceSuffix":"+"},{"label":"母婴同室","value":"02","spliceSuffix":"+"},{"value":"03","label":"母乳喂养","calcValue":"","spliceSuffix":"+"},{"value":"04","label":"病房环境","calcValue":"","spliceSuffix":"+"},{"value":"05","label":"主管医护人员的介绍","calcValue":"","spliceSuffix":"+"}],"parent":"#","wrapWidth":"1","formName":"产科入院指导","label":"产科入院指导","value":"checkboxGroup_94c1161157090389017729","parentType":"area","referencePoint":"checkboxGroup_94c1161157090389017729","prefix":"产科入院指导包括","suffix":"接受好","isShow":true}],"showValue":"「患者孕」「产」「宫内妊娠周数」「宫内妊娠天数」「入院原因」「B超显示」「入院方式」「精神状态」「呕吐」「呕吐物」「量」「产科入院指导」"},"rows":"4","isRows":true,"wrapWidth":"100%"}},"formData":{"group":[{"radioGroup_5f71161130867206175727":"02","checkbox_6d49161130867253374200":true}],"text_71cb161156823338082479":"天。","radioGroup_50c0161156980335429202":"02","radioGroup_5200161157107806523157":"01","input":"4","input_1b7b161156816544192742":"3","input_86d3161156819595635757":"4","input_84a2161156821780478245":"1","input_308b161156835694071854":"摔倒","input_7f3f161156838321047690":"骨折","radioGroup_7b38161156966660240420":"03","radioGroup_2b08161156975812281153":"01","select_22b0161156985712940976":"01","input_7d67161156993319701778":"12","radioGroup_48a5161157086129535807":"02","input_3083161157085424513486":"有","radioGroup_2d5a161157106406532380":"01","checkboxGroup_94c1161157090389017729":["01","02","03"],"joinText_8409161157120197035192":"患者孕4，产3，宫内妊娠4周+1天。因摔倒入院。B超显示骨折。入院方式轮椅，精神状态软弱，有呕吐，呕吐物为胃内容物，12，产科入院指导包括产科住院须知+母婴同室+母乳喂养+接受好"},"frProps":{"column":"2","labelWidth":80,"textAlign":"right","displayType":"row"}}

function getTypeToSetting(elements){
  const typeToSetting = {};
  elements.forEach(item=>{
    typeToSetting[item.type] = item.setting||[];
  });
  return typeToSetting
}

export const typeToSetting = getTypeToSetting(elements);

// 表单宽度跟随容器自定义改变
const flexMinWidth = {
  400: 1,
};