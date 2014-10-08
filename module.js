/**
 * a wrapper for a module so that is can be interchangible
 * between AMD (require.js) and commonJs ways of thinking.
 */
(function(define) {
	/**
	 * @param  @param {Object} exports visible classes within this namespace
	 * @param {function} required other namespaces
	 */
	define(function(require, exports, module) {
		/**
		 * MyObject
		 * @class MyObject
		 */
		var MyObject = function () {};

		MyObject.prototype = {

			/**
			 * MyObjectMethod
			 */
			MyObjectMethod : function () {}
		};

		module.exports = new MyObject();
	});

})(typeof define === "function" ? define : function(fn) { fn(require, exports, module); });