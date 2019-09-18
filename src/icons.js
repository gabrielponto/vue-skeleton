import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faSearch,
    faPlus,
    faChevronRight,
    faEdit,
    faPencilAlt,
    faWallet,
    faDesktop,
    faMoneyCheckAlt,
    faClipboardList,
    faAddressBook,
    faBars,
    faArrowLeft,
    faTimes,
    faCheck,
    faDownload
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faSearch,
    faPlus,
    faChevronRight,
    faEdit,
    faPencilAlt,
    faWallet,
    faDesktop,
    faMoneyCheckAlt,
    faClipboardList,
    faAddressBook,
    faBars,
    faArrowLeft,
    faTimes,
    faCheck,
    faDownload
)

Vue.component('font-awesome-icon', FontAwesomeIcon)