import ModuleLayout from './module-layout.vue';

export default {
	path: '/',
	component: ModuleLayout,
	redirect: 'login',
	children: [
		{
			path: 'login',
			component: () => import('./pages/login'),
		},
		{
			path: 'reset-password',
			component: () => import('./pages/reset-password'),
		},
		{
			path: '2fa',
			component: () => import('./pages/two-factor-auth'),
		},
	],
};
