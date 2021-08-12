import { createApp } from 'vue'
import main from './Main.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

document.title = 'Movie store';
// Hack to get bootstrap to work properly
const body = document.getElementsByTagName("BODY")[0];
const html = document.getElementsByTagName("HTML")[0];
const app = document.getElementById("app");
html.classList.add("h-100");
body.classList.add("d-flex","flex-column","h-100");
app.classList.add("d-flex","flex-column","h-100");


createApp(main)
    .use(router)
    .mount('#app')

