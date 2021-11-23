<template>
	<q-card class="form-container q-pa-lg">
		<q-form @submit="$emit('submit', resetForm)" class="custom-form">
			<q-input
				square
				outlined
				dense
				v-model="resetForm.password"
				:type="!passwordVisible ? 'password' : 'text'"
				label="New password"
				:rules="[
					(val) => !!val || '* Required',
					(val) => val.length >= 8 || 'Minimum 8 characters',
					(val) =>
						isValidPassword(val) ||
						'Password must contain at least one capital letter, one small letter, one number, and one special character',
				]"
				lazy-rules
			>
				<template v-slot:append>
					<q-icon
						:name="!passwordVisible ? 'visibility_off' : 'visibility'"
						class="cursor-pointer"
						@click="passwordVisible = !passwordVisible"
					/>
				</template>
			</q-input>
			<q-input
				square
				outlined
				dense
				v-model="resetForm.password_confirmation"
				:type="!passwordVisible2 ? 'password' : 'text'"
				label="New password"
				:rules="[
					(val) => !!val || '* Required',
					(val) => val.length >= 8 || 'Minimum 8 characters',
					(val) => val === resetForm.password || 'Passwords not match',
				]"
				lazy-rules
			>
				<template v-slot:append>
					<q-icon
						:name="!passwordVisible2 ? 'visibility_off' : 'visibility'"
						class="cursor-pointer"
						@click="passwordVisible2 = !passwordVisible2"
					/>
				</template>
			</q-input>

			<q-btn type="submit" color="primary" label="Reset" class="q-mt-md full-width" />

			<q-inner-loading :showing="loading">
				<q-spinner-gears size="50px" color="primary" />
			</q-inner-loading>
		</q-form>
	</q-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { isValidPassword } from '@/utils/validators';

export default {
	data() {
		return {
			resetForm: {
				password: '',
				password_confirmation: '',
			},
			passwordVisible: false,
			passwordVisible2: false,
		};
	},
	computed: {
		...mapGetters('Auth/ResetPassword', ['loading']),
		...mapGetters('User', ['expiredPasswordFlag']),
	},
	created() {
		if (!this.expiredPasswordFlag) {
			this.$router.push('/login');
		}
	},
	methods: {
		isValidPassword,
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
