import Vue from 'vue';

import {
    library
} from '@fortawesome/fontawesome-svg-core';

import {
    fas
} from '@fortawesome/free-solid-svg-icons';

import {
    faDiscord
} from '@fortawesome/free-brands-svg-icons';

import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

library.add(fas, faDiscord);

Vue.component('font-awesome-icon', FontAwesomeIcon);
