<template>
	<div class="q-pa-md flex column">
		<h6 class="text-dark q-my-sm text-center">Login to QA app</h6>
		<login-form @submit="handleSubmit" />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import LoginForm from 'src/modules/auth/components/login-form.vue';

export default {
	components: {
		LoginForm,
	},
	methods: {
		...mapActions('Auth/Login', ['login']),
		handleSubmit(payload) {
			this.login(payload)
				.then(() => {
					this.$router.push('/');
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style></style>
