import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '../src/scss/styles.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'

// // Before
// import { someModule } from './someModule';

// // After (using dynamic import)
// const loadSomeModule = () => import('./someModule');

// // Usage
// loadSomeModule().then((module) => {
//   // Use the module
// });

const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
