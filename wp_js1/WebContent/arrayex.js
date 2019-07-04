/**
 * 배열 확장(remove, insert)
 */

Array.prototype.insert = function(index, value) {	
	if(value instanceof Array) {
		//var _this = this;
		value.forEach(function(element) {
//			_this.splice(index, 0, element);
			this.splice(index, 0, element);
			index += 1;
		}.bind(this));
	} else {
		this.splice(index, 0, value);
	}
}

Array.prototype.remove = function(index) {
	this.splice(index, 1);
}