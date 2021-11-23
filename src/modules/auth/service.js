import { axiosInstance, unauthenticatedAxiosInstance } from '@/boot/axios';
import * as ep from './endpoints';
import axios from 'axios';
import authHelper from '@/utils/auth-helper';

export default class Service {
	static login(qp = {}) {
		return unauthenticatedAxiosInstance.post(ep.LOGIN, qp).then((res) => {
			return res.data;
		});
	}
	static resetPassword(qp = {}) {
		const axiosInstance2 = axios.create({
			baseURL: process.env.BASE_URL + 'api/',
			headers: {
				Authorization: `Bearer ${authHelper.getTempAccessToken()}`,
			},
		});

		return axiosInstance2.put(ep.RESET_PASSWORD, qp).then((res) => {
			return res.data;
		});
	}
	static logout() {
		return axiosInstance.get(ep.LOGOUT).then((res) => {
			return res.data;
		});
	}
	static towFactorAuth(vc) {
		return axiosInstance.post(ep.TWOFACTORAUTH, vc).then((res) => {
			return res.data;
		});
	}
}
