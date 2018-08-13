//*********************************************************
//本软件用以检测用户使用的浏览器款式

//原理：
//通过navigator对象的"userAgent"字段内容区分(IE/firefox/Opera)
//通过navigator对象的"platform"字段内容加以区分用户系统平台

//用法：
//只需要引入即可，最终结果返回至 window.zNavigator 中。

//检测范围：
//IE:7/8/9/10/11
//Chrome
//Opera
//Firefox
//
//开发者：																              zbc
//开发日期：																     2018/08/13
//*********************************************************

(function () {

	//****方法群组****//

	//检察字段以获取浏览器款式

	//检察IE
	function getIEBrowser(w) {

		var _str = w.navigator.userAgent;

		//ie11
		var ie11verExp = /rv:11.0/;

		//ie7~10
		var ie10Exp = /MSIE 10.0/;
		var ie9Exp = /MSIE 9.0/;
		var ie8Exp = /MSIE 8.0/;
		var ie7Exp = /MSIE 7.0/;

		var _obj = {

			//浏览器款式中文名
			nameCN: "IE",

			//浏览器款式英文名
			nameEN: "IE",

			//浏览器版本
			version: null

		};

		if (ie11verExp.test(_str)) {
			_obj.version = "11";
		}
		else if (ie10Exp.test(_str)) {
			_obj.version = "10";
		}
		else if (ie9Exp.test(_str)) {
			_obj.version = "9";
		}
		else if (ie8Exp.test(_str)) {
			_obj.version = "8";
		}
		else if (ie7Exp.test(_str)) {
			_obj.version = "7";
		}
		else {
			return false;
		}

		return _obj;
	}

	//检察Opera
	function getOPRBrowser(w) {

		var _str = w.navigator.userAgent;

		var operaExp = /OPR/;
		var _vStr = /OPR\/[0-9]+.[0-9]+.[0-9]+.[0-9]+/;
		var _v = /[0-9]+.[0-9]+.[0-9]+.[0-9]+/;

		var _obj = {

			//浏览器款式中文名
			nameCN: "Opera",

			//浏览器款式英文名
			nameEN: "Opera",

			//浏览器版本
			version: null

		};

		if (operaExp.test(_str)) {

			var __v__ = _v.exec(_vStr.exec(_str)[0])[0];

			_obj.version = __v__;
		}
		else {
			return false;
		}

		return _obj;
	}

	//检察firefox
	function getFireFox(w) {

		var _str = w.navigator.userAgent;

		var operaExp = /Firefox/;
		var _vStr = /Firefox\/[0-9]+.[0-9]+/;
		var _v = /[0-9]+.[0-9]+/;

		var _obj = {

			//浏览器款式中文名
			nameCN: "火狐",

			//浏览器款式英文名
			nameEN: "Firefox",

			//浏览器版本
			version: null

		};

		if (operaExp.test(_str)) {

			var __v__ = _v.exec(_vStr.exec(_str)[0])[0];

			_obj.version = __v__;
		}
		else {
			return false;
		}

		return _obj;
	}

	//检察Chrome
	function getChromeBrowser(w) {

		var _str = w.navigator.appVersion;

		var operaExp = /Chrome/;
		var _vStr = /Chrome\/[0-9]+.[0-9]+.[0-9]+.[0-9]+/;
		var _v = /[0-9]+.[0-9]+.[0-9]+.[0-9]+/;

		var _obj = {

			//浏览器款式中文名
			nameCN: "谷歌",

			//浏览器款式英文名
			nameEN: "Chrome",

			//浏览器版本
			version: null

		};

		if (operaExp.test(_str)) {

			var __v__ = _v.exec(_vStr.exec(_str)[0])[0];

			_obj.version = __v__;
		}
		else {
			return false;
		}

		return _obj;
	}

	//****方法群组****//

	//动作
	//即将返回的对象
	var _obj = {

		//浏览器款式中文名
		nameCN: null,

		//浏览器款式英文名
		nameEN: null,

		//浏览器版本
		version: null,

		//浏览器适用平台
		platform: null

	}

	var __obj__ = getIEBrowser(window);

	if (!__obj__)
		__obj__ = getOPRBrowser(window);
	if (!__obj__)
		__obj__ = getFireFox(window);
	if (!__obj__)
		__obj__ = getChromeBrowser(window);


	_obj.nameCN = __obj__.nameCN;
	_obj.nameEN = __obj__.nameEN;
	_obj.version = __obj__.version;
	_obj.platform = window.navigator.platform;

	//console.log(_obj);

	window.zNavigator = _obj;

	return _obj;

})()

