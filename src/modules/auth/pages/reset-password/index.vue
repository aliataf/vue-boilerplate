<template>
	<div class="q-pa-md flex column">
		<h6 class="text-dark q-my-sm text-center">Reset your password</h6>
		<reset-password-form @submit="handleSubmit" />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import ResetPasswordForm from 'src/modules/auth/components/reset-password-form.vue';
import authHelper from '@/utils/auth-helper';

export default {
	components: {
		ResetPasswordForm,
	},
	methods: {
		...mapActions('Auth/ResetPassword', ['resetPassword']),
		handleSubmit(payload) {
			this.resetPassword(payload)
				.then(() => {
					localStorage.setItem('expiredPasswordFlag', false);
					authHelper.resetAll();
					this.$router.go();
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style></style>
