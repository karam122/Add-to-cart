import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import router from './Routs'
import store from '../src/store/index'


const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
