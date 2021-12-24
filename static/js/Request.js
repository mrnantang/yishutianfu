/**
 * 关于对于request的异步请求的封装
 * auther：xianghai
 * time:2020 12 31
 * 
 */
export default class Request {
	constructor(arg) {
		this.Domain = "http://api.ec.lz06.com/";
		this.msg = "hello";
		this.isLogin = false;
		//获取网络状态
		uni.getNetworkType({
			success: function(res) {
				console.log("获取网络的状态" + res.networkType);
			}
		});
		//获取登录状态
		this.updataSession();
	}
	updataSession() {
		uni.getStorage({
			key: "session",
			success: (res) => {
				console.log("更新session获取成功");
				if (res.data.code == 101) {
					this.isLogin = false;
					this.sessionData = false;
				} else {
					this.isLogin = true;
					this.sessionData = res;
				}

			},
			fail: (err) => {
				console.log("获取失败");
				console.log(err);
				this.isLogin = false;
				this.sessionData = false;
			}
		});

	}
	tishi() {
		uni.showModal({
			title: "提示",
			content: "网络似乎断开了",
			showCancel: false,
			success: (e) => {
				console.log(e);

			}


		})
	}
	init() {
		console.log("成功调用" + this.msg);
	}
	/**
	 * 判断是否登录，未登录直接跳转到登录授权界面
	 */
	isLogin(callback) {
		if (!this.loginStatus) {
			uni.navigateTo({
				url: "/pages/login/login",
				animationType: 'slide-in-bottom'
			});
			callback(false);
		} else {
			callback(true);
		}
	}
	/**
	 * 检查登录
	 * @param {Object} callback
	 */
	checkLogin(callback) {
		console.log("sessionData " + this.sessionData);
		uni.getStorage({
			key: "session",
			success: (res) => {
				if (res.data.code == 101) {
					callback(false);
				} else {
					this.isLogin = true;
					this.sessionData = res;
					callback(true);
				}

			},
			fail: (err) => {
				callback(false);
			}
		});
	}

	/**
	 * 模拟异步请求
	 */
	getDate(callback) {
		let status = false,
			time = 1;
		let timer = setInterval(function() {
			if (time == 5) {
				status = true;
				callback(status);
				clearInterval(timer);
			}
			time++;
			console.log("status " + status + " " + time);
		}, 1000);
	}

	/**
	 * 关于异步请求的封装
	 * @param {Object} url 请求的地址
	 * @param {Object} type 请求的类型
	 * @param {Object} data  请求的参数
	 */
	request(url, type, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.Domain + url,
				method: type,
				data: data,
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					resolve(res);
				},
				fail: (e) => {
					reject(e);
				},
				complete: () => {}
			});

		});

	}
	/**
	 * 普通接口的数据请求
	 * 无须处于登录状态
	 * @param {Object} url
	 * @param {Object} type
	 * @param {Object} data
	 */
	commonQuest(url, type, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.Domain + url,
				method: type,
				data: data,
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					resolve(res);
				},
				fail: (e) => {
					reject(e);
				}
			})
		})
	}


	/**支付请求的封装
	 * @param {Object} url
	 * @param {Object} type
	 * @param {Object} data
	 * 必须处于登录状态
	 */
	payment(url, type, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				method: type,
				data: data,
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					resolve(res);
				},
				fail: (e) => {
					reject(e);
				}
			})
		});

		// this.isLogin((d)=>{
		// 	if(d){


		// 	}


		// });




	}





}
