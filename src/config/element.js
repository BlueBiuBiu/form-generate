import { nanoid } from 'nanoid'

const config = [
  {
    type: 'button',
    name: '按钮',
    title: '按钮',
    size: 'default',
    width: 100,
    buttonWidth: 100,
    dataId: nanoid()
  },
  {
    type: 'input',
    name: '单行文本',
    title: '单行文本',
    placeholder: '请输入内容',
    modelValue: '',
    width: 100,
    rulesConfig: {
      trigger: 'change',
      isRequireRule: false,
      messageTip: '',
      customRule: false,
      customRuleContent: '',
      rules: []
    },
    dataId: nanoid()
  },
  {
    type: 'textarea',
    name: '多行文本',
    title: '多行文本',
    placeholder: '请输入内容',
    modelValue: '',
    width: 100,
    rulesConfig: {
      trigger: 'change',
      isRequireRule: false,
      messageTip: '',
      customRule: false,
      customRuleContent: '',
      rules: []
    },
    dataId: nanoid()
  },
  {
    type: 'radio',
    name: '单选框组',
    title: '单选框组',
    modelValue: '',
    child: [
      {label: '1', size: 'default', content: 'option1'},
      {label: '2', size: 'default', content: 'option2'},
      {label: '3', size: 'default', content: 'option3'},
    ],
    layout: '垂直布局',
    width: 100,
    rulesConfig: {
      trigger: 'change',
      isRequireRule: false,
      messageTip: '',
      customRule: false,
      customRuleContent: '',
      rules: []
    },
    dataId: nanoid()
  },
  {
    type: 'checkbox',
    name: '多选框组',
    title: '多选框组',
    modelValue: [],
    trigger: 'change',
    child: [
      {label: '1', size: 'default', content: 'option1'},
      {label: '2', size: 'default', content: 'option2'},
      {label: '3', size: 'default', content: 'option3'},
    ],
    layout: '垂直布局',
    width: 100,
    rulesConfig: {
      trigger: 'change',
      isRequireRule: false,
      messageTip: '',
      customRule: false,
      customRuleContent: '',
      rules: []
    },
    dataId: nanoid()
  },
  {
    type: 'select',
    name: '下拉选择框',
    title: '下拉选择框',
    placeholder: '请选择',
    modelValue: '',
    trigger: 'change',
    child: [
      {label: 'Option1',value: 'Option1'},
      {label: 'Option2',value: 'Option2'},
      {label: 'Option3',value: 'Option3'},
    ],
    width: 100,
    rulesConfig: {
      trigger: 'change',
      isRequireRule: false,
      messageTip: '',
      customRule: false,
      customRuleContent: '',
      rules: []
    },
    dataId: nanoid()
  },
  {
    type: 'date',
    name: '日期选择器',
    title: '日期选择器',
    placeholder: '请选择日期',
    modelValue: '',
    size: 'default',
    width: 100,
    trigger: 'change',
    rulesConfig: {
      trigger: 'change',
      isRequireRule: false,
      messageTip: '',
      customRule: false,
      customRuleContent: '',
      rules: []
    },
    dataId: nanoid()
  },
  {
    type: 'datetime',
    name: '时间选择器',
    title: '时间选择器',
    placeholder: '请选择时间',
    modelValue: '',
    size: 'default',
    width: 100,
    trigger: 'change',
    rulesConfig: {
      trigger: 'change',
      isRequireRule: false,
      messageTip: '',
      customRule: false,
      customRuleContent: '',
      rules: []
    },
    dataId: nanoid()
  },
  {
    type: 'customComponents',
    name: '自定义组件',
    title: '自定义组件',
    modelValue: '',
    slotName: '自定义插槽名',
    width: 100,
    dataId: nanoid()
  },
  {
    type: 'fence',
    name: '栅栏布局',
    title: '栅栏布局',
    size: 'default',
    dataId: nanoid(),
    fenceCount: 1,
    tasks: {
      child1: [],
      child2: [],
      child3: [],
      child4: [],
      child5: [],
      child6: [],
    }
  },
]

export default config