/**
 * Name：全局Ajax设置
 */
import axios  from 'axios'
// axios 基础配置
const Axios = axios.create({
	baseURL: '/api', // 因为我本地做了反向代理
	timeout: 1000 * 15,
	responseType: 'json',
	withCredentials: true, // 是否允许带cookie这些
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})

// axios 全局配置header   token 验证
Axios.interceptors.request.use(
	config => {
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

// 返回状态判断（添加响应拦截器）
// http response 拦截器
Axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		return Promise.reject(error)   // 返回接口返回的错误信息
	}
);

export default {
	install: function(Vue, Option) {
		Object.defineProperty(Vue.prototype, '$http', { value: Axios })
	}
}
