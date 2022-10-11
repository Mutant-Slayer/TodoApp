import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTrashCan, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faWhatsapp, faTrashCan, faCircle, faCircleCheck)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
