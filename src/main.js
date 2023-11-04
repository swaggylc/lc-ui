import { createApp } from 'vue'
import App from './App.vue'
// 导入组件
import Button from "./components/button/LcButton.vue"

const app = createApp(App)

app.component(Button.name, Button)




app.mount('#app')
