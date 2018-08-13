
window.onload = function () {

	console.log(this.navigator);

	var _obj = this.zNavigator;

	document.getElementById('word').innerHTML = _obj.nameCN;
	document.getElementById('word2').innerHTML = _obj.version;
	document.getElementById('word3').innerHTML = _obj.platform;

}

