import Vue from 'vue';
import Vuex from 'vuex';

import User from './modules/user';
import Auth from '@/modules/auth/store';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the store instance.
 */

/**
 * @returns {store}
 */
export default function(/* { ssrContext } */) {
	store = new Vuex.Store({
		modules: {
			User,
			Auth,
		},

		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: process.env.DEBUGGING,
	});

	return store;
}

export var store;
