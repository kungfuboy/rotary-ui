import RoButton from "./components/Button"
import RoCard from "./components/Card"
import RoInput from "./components/Input"
import RoPanel from "./components/Panel"
import RoSelect from "./components/Select"
import RoSub from "./components/Sub"

RoButton.install = Vue => {
  Vue.component(RoButton.name, RoButton)
}

RoCard.install = Vue => {
  Vue.component(RoCard.name, RoCard)
}

RoInput.install = Vue => {
  Vue.component(RoInput.name, RoInput)
}

RoPanel.install = Vue => {
  Vue.component(RoPanel.name, RoPanel)
}

RoSelect.install = Vue => {
  Vue.component(RoSelect.name, RoSelect)
}

RoSub.install = Vue => {
  Vue.component(RoSub.name, RoSub)
}

const components = [RoButton, RoCard, RoInput, RoPanel, RoSelect, RoSub]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  //   Vue.prototype.$message = Message;
}

if (typeof window !== void 666 && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export { RoButton, RoCard, RoInput, RoPanel, RoSelect, RoSub }
