import { createApp } from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import 'todomvc-app-css/index.css';

const app = createApp(App);
app.use(Vuex);
app.mount('app-root');
