import { Notify } from 'quasar';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, Vue ... } */) => {
	Notify.setDefaults({
		position: 'top-right',
		timeout: 2500,
		icon: 'notifications',
		html: true,
		textColor: 'white',
		color: 'primary',
		classes: 'q-px-lg',
	});
	Notify.registerType('notify', {
		icon: 'notifications',
		color: 'white',
		textColor: 'primary',
	});
	Notify.registerType('error', {
		icon: 'error',
		color: 'red-1',
		textColor: 'negative',
	});
	Notify.registerType('created', {
		icon: 'check_circle',
		color: 'green-2',
		textColor: 'primary',
	});
	Notify.registerType('unknownError', {
		icon: 'warning',
		color: 'red-2',
		textColor: 'negative',
	});
};
