var object = module.exports = {
	curry : function(func){
		return func.bind.apply(func,arguments);
	},
	uncurry : function(){
		var _this = this;
		return function(){
			Function.prototype.call.apply(_this,arguments);
		}
	}
}