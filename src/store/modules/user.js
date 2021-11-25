import allPermissions from '@/config/permissions';
import { getDeep } from '@/utils';

function initUser() {
	let res = null;
	try {
		res = JSON.parse(localStorage.getItem('user')) || null;
	} catch {
		res = {};
	} finally {
		return res;
	}
}

function getState() {
	return {
		loading: false,
		user: initUser(),
		expiredPasswordFlag: JSON.parse(localStorage.getItem('expiredPasswordFlag')) || false,
	};
}

export default {
	namespaced: true,
	state: getState,
	getters: {
		loading(state) {
			return state.loading;
		},
		user(state) {
			return state.user;
		},
		userRoles(state) {
			return state.user?.roles ?? [];
		},
		userPermissions(state) {
			return (state.user?.permissions ?? []).map((e) => e.name);
		},
		expiredPasswordFlag(state) {
			return state.expiredPasswordFlag;
		},
		checkAccess(state, getters) {
			return (key) => {
				let componentPermissions = getDeep(allPermissions, key, '.');
				return (
					getters.userPermissions.length > 0 &&
					componentPermissions.every((e) => getters.userPermissions.includes(e))
				);
			};
		},
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		},
		setUser(state, value) {
			state.user = value;
		},
		setExpiredPasswordFlag(state, value) {
			state.expiredPasswordFlag = value;
		},
		resetState(state) {
			Object.assign(state, getState());
		},
	},
	actions: {
		storeUser({ commit }, user) {
			commit('setUser', user);
			localStorage.setItem('user', JSON.stringify(user));
		},
		setExpiredPasswordFlag({ commit }, value) {
			commit('setExpiredPasswordFlag', value);
			localStorage.setItem('expiredPasswordFlag', value);
		},
	},
};
