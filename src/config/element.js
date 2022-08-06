import { nanoid } from 'nanoid'

const config = [
  {
    type: 'button',
    name: '按钮',
    title: '默认按钮',
    size: 'default',
    dataId: nanoid()
  },
  {
    type: 'input',
    name: '单行文本',
    title: '单行文本',
    size: 'default',
    modelValue: '',
    width: 100,
    dataId: nanoid()
  },
  {
    type: 'radio',
    name: '单选框',
    title: '单选框',
    size: 'default',
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