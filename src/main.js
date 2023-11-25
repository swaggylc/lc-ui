import { createApp } from 'vue'
import App from './App.vue'
// 导入组件
import LcButton from "./components/button/LcButton.vue"
import LcDialog from "./components/dialog/LcDialog.vue"
import LcInput from "./components/input/LcInput.vue"
import LcSwitch from './components/switch/LcSwitch.vue'
import LcRadio from './components/radio/LcRadio.vue'
import LcRadioGroup from './components/radio-group/LcRadioGroup.vue'
import LcForm from './components/form/LcForm.vue'
import LcFormItem from './components/form-item/LcFormItem.vue'
// 全局引入图标文件
import './assets/font/font.css'
const app = createApp(App)

app.component(LcButton, LcButton)
app.component(LcDialog, LcDialog)
app.component(LcInput, LcInput)
app.component(LcSwitch, LcSwitch)
app.component(LcRadio, LcRadio)
app.component(LcRadioGroup, LcRadioGroup)
app.component(LcForm, LcForm)
app.component(LcFormItem, LcFormItem)





app.mount('#app')
