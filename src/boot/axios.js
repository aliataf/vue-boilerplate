import axios from 'axios';
import { addAuthorizationInterceptor, addNotificationInterceptor } from '@/utils/axios-helpers';
import authHelper from '@/utils/auth-helper';
const axiosInstance = axios.create({
	baseURL: process.env.BASE_URL + 'api/',
	headers: {
		Authorization: `Bearer ${authHelper.getAccessToken()}`,
	},
});
const unauthenticatedAxiosInstance = axios.create({ baseURL: process.env.BASE_URL + 'api/' });

addNotificationInterceptor(axiosInstance);
addNotificationInterceptor(unauthenticatedAxiosInstance);

addAuthorizationInterceptor(axiosInstance);

export default ({ Vue }) => {
	Vue.prototype.$axios = axiosInstance;
};

export { axiosInstance, unauthenticatedAxiosInstance };
