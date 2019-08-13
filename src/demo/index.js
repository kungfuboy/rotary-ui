// 导入文档

import PageButton from "./Button/index.md"
import PageCard from "./Card/index.md"
import PageInput from "./Input/index.md"
import PagePanel from "./Panel/index.md"
import PageSelect from "./Select/index.md"
import PageSub from "./Sub/index.md"

// 导入组件

import ButtonA from "./Button/ButtonA.vue"
import ButtonB from "./Button/ButtonB.vue"
import CardA from "./Card/CardA.vue"
import InputA from "./Input/InputA.vue"
import InputB from "./Input/InputB.vue"
import PanelA from "./Panel/PanelA.vue"
import SelectA from "./Select/SelectA.vue"
import SubA from "./Sub/SubA.vue"

// 注册组件
const arr = [
  PageButton,
  PageCard,
  PageInput,
  PagePanel,
  PageSelect,
  PageSub,
  ButtonA,
  ButtonB,
  CardA,
  InputA,
  InputB,
  PanelA,
  SelectA,
  SubA
]
const nameList = [
  "PageButton",
  "PageCard",
  "PageInput",
  "PagePanel",
  "PageSelect",
  "PageSub",
  "ButtonA",
  "ButtonB",
  "CardA",
  "InputA",
  "InputB",
  "PanelA",
  "SelectA",
  "SubA"
]

const install = Vue => {
  arr.forEach((item, index) => {
    Vue.component(nameList[index], item)
  })
}

if (typeof window !== void 666 && window.Vue) {
  install(window.Vue)
}

// 导出Demo
export default {
  install
}
