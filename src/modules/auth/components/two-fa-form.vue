<template>
	<q-card class="form-container q-pa-lg">
		<div class="text-caption2 text-center q-mb-lg">
			Two factor authentication is enabled on this account.
			<br />
			We have sent you a verification code.
		</div>

		<q-form @submit="handleSubmit" class="custom-form">
			<q-input
				square
				outlined
				dense
				v-model="verificationCode"
				type="text"
				label="Code"
				lazy-rules
				:rules="[(val) => !!val || '* Required']"
			/>
			<span
				class="float-right text-white-bold text-grey-10 cursor-pointer text-grey-5"
				@click="$emit('back-to-login')"
			>
				Back to login
			</span>
			<q-btn type="submit" color="primary" label="Send" size="md" class="q-mt-sm full-width" />
			<q-inner-loading :showing="loading">
				<q-spinner-gears size="50px" color="primary" />
			</q-inner-loading>
		</q-form>
	</q-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			verificationCode: '',
		};
	},
	computed: {
		...mapGetters('Auth/TwoFactorAuth', ['loading']),
	},
	methods: {
		...mapActions('Auth/TwoFactorAuth', ['towFactorAuth']),
		handleSubmit() {
			this.towFactorAuth(this.verificationCode)
				.then(() => {
					this.$emit('submit');
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.form-container {
	width: 100%;
	max-width: 450px;
	border-radius: 20px;
	box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
}

.custom-form {
	width: 300px;
	margin: auto;
}

.line {
	height: 2px;
	background: $grey-7;
	flex: 1 auto;
}

.icon {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: black;
}

.icon-small {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background: black;
}

.text-small {
	font-size: 10px;
}
</style>
