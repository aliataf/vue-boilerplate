<template>
	<q-header>
		<q-toolbar class="q-pl-xs">
			<inline-svg :src="logoSrc" width="50" height="50" />
			<q-space />
			<q-btn icon="notifications" color="white" flat />
			<div class="flex items-center q-gutter-x-md">
				<q-btn flat>
					<q-avatar size="40px">
						<q-img :src="require('@/assets/placeholders/user.png')" />
					</q-avatar>
					<span class="text-white text-capitalize q-mx-sm">{{ user && user.name }}</span>
					<profile-dropdown />
				</q-btn>
			</div>
		</q-toolbar>
	</q-header>
</template>

<script>
import { mapGetters } from 'vuex';
import ProfileDropdown from './profile-dropdown.vue';
import InlineSvg from 'vue-inline-svg';

export default {
	components: {
		ProfileDropdown,
		InlineSvg,
	},
	computed: {
		...mapGetters('User', ['user']),
		logoSrc() {
			try {
				return require('@/assets/img/logo.svg');
			} catch (error) {
				console.warn('Icon not found');
				return undefined;
			}
		},
	},
};
</script>

<style></style>
