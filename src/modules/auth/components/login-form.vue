<template>
	<q-card class="form-container q-pa-lg">
		<q-form @submit="$emit('submit', loginForm)" class="custom-form">
			<q-input
				square
				outlined
				dense
				v-model="loginForm.email"
				type="email"
				label="Email"
				:rules="[(val) => !!val || '* Required', (val) => isValidEmail(val) || 'Invalid email']"
				lazy-rules
			/>
			<q-input
				square
				outlined
				dense
				v-model="loginForm.password"
				:type="!passwordVisible ? 'password' : 'text'"
				label="Password"
				:rules="[
					(val) => !!val || '* Required',
					(val) => val.length >= 8 || 'Minimum 8 characters',
				]"
				lazy-rules
				class="q-mt-sm"
			>
				<template v-slot:append>
					<q-icon
						:name="!passwordVisible ? 'visibility_off' : 'visibility'"
						class="cursor-pointer"
						@click="passwordVisible = !passwordVisible"
					/>
				</template>
			</q-input>

			<q-btn type="submit" color="primary" label="Login" class="q-mt-md full-width" />
		</q-form>

		<q-inner-loading :showing="loading">
			<q-spinner-gears size="50px" color="primary" />
		</q-inner-loading>
	</q-card>
</template>

<script>
import { isValidEmail } from '@/utils/validators';
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			loginForm: {
				email: '',
				password: '',
			},
			passwordVisible: false,
		};
	},
	computed: {
		...mapGetters('Auth/Login', ['loading']),
	},
	methods: {
		isValidEmail,
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
