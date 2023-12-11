import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFile,  faHeadphones, faCartShopping, faHeadset, faCalculator, faDiagramProject, faUsersGear, faSquareArrowUpRight, faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSquareGithub, faPhp, faLaravel, faVuejs} from '@fortawesome/free-brands-svg-icons'


library.add(faFile, faGithub, 
    faLinkedin, faHeadphones, faCartShopping, faHeadset, 
    faCalculator, faDiagramProject, faUsersGear, faSquareGithub,faSquareArrowUpRight,
    faPhp, faLaravel, faVuejs, faDatabase)



createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)

.mount('#app')


