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
		async resetPassword({ commit }, payload) {
			commit('setLoading', true);
			try {
				return await AuthService.resetPassword(payload);
			} catch (error) {
				throw error;
			} finally {
				commit('setLoading', false);
			}
		},
	},
};
