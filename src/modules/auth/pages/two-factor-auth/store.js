import AuthService from '@/modules/auth/service';

export default {
	namespaced: true,
	state() {
		return {
			loading: false,
		};
	},
	getters: {
		loading(state) {
			return state.loading;
		},
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		},
	},
	actions: {
		async towFactorAuth({ commit }, payload) {
			commit('setLoading', true);
			try {
				await AuthService.towFactorAuth(payload);
			} catch (error) {
				throw error;
			} finally {
				commit('setLoading', false);
			}
		},
	},
};
