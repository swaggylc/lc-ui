import { createApp } from 'vue'
import App from './App.vue'
// 导入组件
import LcButton from "./components/button/LcButton.vue"
import LcDialog from "./components/dialog/LcDialog.vue"
import LcInput from "./components/input/LcInput.vue"
// 全局引入图标文件
import './assets/font/font.css'
const app = createApp(App)

app.component(LcButton.name, LcButton)
app.component(LcDialog.name, LcDialog)
app.component(LcInput.name, LcInput)





app.mount('#app')
