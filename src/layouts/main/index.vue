<template>
	<q-layout view="hHh Lpr fFf">
		<main-layout-header />

		<main-layout-sidebar v-if="isReadyToView" />

		<app-scroll-area height="calc(100vh - 50px)" style="top: 50px">
			<q-page-container style="padding-top: 0; min-height: calc(100vh - 50px)" class="bg-grey-3">
				<div class="q-pa-md">
					<transition
						appear
						enter-active-class="animated fadeIn"
						leave-active-class="animated fadeOut"
						mode="out-in"
						:duration="300"
					>
						<router-view />
					</transition>
				</div>
			</q-page-container>
		</app-scroll-area>

		<q-inner-loading :showing="loading">
			<q-spinner-gears size="50px" color="primary" />
		</q-inner-loading>
	</q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MainLayoutHeader from './components/header.vue';
import MainLayoutSidebar from './components/sidebar.vue';
import AppScrollArea from '@/components/app-scroll-area.vue';

export default {
	components: { MainLayoutHeader, MainLayoutSidebar, AppScrollArea },
	data() {
		return {
			lang: this.$q.lang.isoName,
			isReadyToView: false,
		};
	},
	computed: {
		...mapGetters('User', ['user']),
		...mapGetters('Users', ['loading']),
	},
	methods: {
		...mapActions('Users', ['getUserById']),
		...mapActions('User', ['storeUser']),
	},
	watch: {
		lang(lang) {
			this.$i18n.locale = lang;
		},
	},
	async created() {
		if (!this.user.roles) {
			let user = await this.getUserById(this.user.id);
			this.storeUser(user);
			this.isReadyToView = true;
		} else {
			this.isReadyToView = true;
		}
	},
};
</script>
