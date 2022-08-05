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
    name: '输入框',
    title: '输入框',
    size: 'default',
    modelValue: '',
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
    tasks: []
  },
]

export default config