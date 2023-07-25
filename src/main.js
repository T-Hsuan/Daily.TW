import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// router-link 換頁回到頁面頂端
router.afterEach((to, from) => {
	window.scrollTo(0, 0);
});

// package
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import { faBookmark, faHeart, faClock, faEyeSlash, faCircleXmark, faCartShopping, faMagnifyingGlass, faLocationDot, faCloud, faEye, faArrowLeft, faArrowRight, faArrowUp, faCircleChevronDown,faPen, faTrashCan, faSquarePlus, faSortUp, faCar, faTicket, faUser, faUserTie, faShirt, faBullhorn, faBagShopping, faArrowUpWideShort, faFilter, faSortDown, faChevronRight,faArrowDown,faCaretDown} from '@fortawesome/free-solid-svg-icons'

import { faLine, faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faBookmark, farBookmark, faHeart, faCartShopping, faMagnifyingGlass, faLine, faInstagram, faSquareFacebook, faClock, faLocationDot, faCloud, faEye, faEyeSlash, faCircleXmark, faArrowLeft, faArrowRight, faArrowUp, faCircleChevronDown, faPen, faTrashCan, faSquarePlus, faSortUp, faCar, faTicket, faUser, faUserTie, faShirt, faBullhorn, faBagShopping, faArrowUpWideShort, faFilter, faSortDown, faChevronRight,faArrowDown,faCaretDown)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount("#app");
