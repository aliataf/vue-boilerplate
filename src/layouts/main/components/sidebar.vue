<template>
	<q-drawer
		behavior="desktop"
		:mini="miniState"
		show-if-above
		content-class="bg-white flex column"
	>
		<q-list>
			<sidebar-item v-for="item in sidebarRoutes" :key="item.title" v-bind="item" />
		</q-list>

		<q-space />

		<q-btn
			@click="toggleMiniState"
			icon="menu"
			:label="miniState ? '' : $t('sidebar.menu')"
			align="items-start"
			flat
		/>
	</q-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './sidebar-item.vue';

const linksData = [
	{
		title: 'Inbox',
		icon: 'inbox',
		link: '/inbox',
	},
	{
		title: 'Outbox',
		icon: 'outbox',
		link: '/outbox',
	},
	{
		title: 'Refused',
		icon: 'indeterminate_check_box',
		link: '/refused',
		meta: {
			roles: ['user'],
		},
	},
	{
		title: 'Pending',
		icon: 'hourglass_empty',
		link: '/pending',
		meta: {
			roles: ['admin', 'super-admin'],
		},
	},
	{
		title: 'Approved',
		icon: 'check_box',
		link: '/approved',
		meta: {
			roles: ['admin', 'super-admin'],
		},
	},
	{
		title: 'Disapproved',
		icon: 'indeterminate_check_box',
		link: '/disapproved',
		meta: {
			roles: ['admin', 'super-admin'],
		},
	},
	{
		title: 'Circulars',
		icon: 'receipt',
		link: '/administrative-circulars',
	},
	{
		title: 'Companies',
		icon: 'location_city',
		link: '/companies',
		meta: {
			roles: ['super-admin'],
		},
	},
	{
		title: 'Users',
		icon: 'person',
		link: '/users',
		meta: {
			roles: ['super-admin', 'admin'],
		},
	},
	{
		title: 'Departments',
		icon: 'alt_route',
		link: '/departments',
		meta: {
			roles: ['super-admin', 'admin'],
		},
	},
	{
		title: 'Roles',
		icon: 'people',
		link: '/roles',
		meta: {
			roles: ['super-admin'],
		},
	},
	{
		title: 'Permissions',
		icon: 'add_moderator',
		link: '/permissions',
		meta: {
			roles: ['super-admin'],
		},
	},
];

export default {
	components: {
		SidebarItem,
	},
	data() {
		return {
			miniState: this.$q.platform.is.mobile ? true : false,
			sidebarRoutes: [],
		};
	},
	computed: {
		...mapGetters('User', ['userRoles']),
	},
	methods: {
		toggleMiniState() {
			this.miniState = !this.miniState;
		},
	},
	created() {
		const mappedUserRoles = this.userRoles.map((e) => e.name);
		this.sidebarRoutes = linksData.filter((e) => {
			if (e.meta?.roles) {
				if (e.meta.roles.some((role) => mappedUserRoles.includes(role))) {
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		});
	},
};
</script>

<style></style>
