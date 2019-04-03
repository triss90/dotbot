(function(){

	// Load settings
	var dot = function(opts) {

		// Merge default options with user options
		function merge_options(obj1,obj2) {
			var obj3 = {};
			var attrname;
			for (attrname in obj1) { obj3[attrname] = obj1[attrname]; }
			for (attrname in obj2) { obj3[attrname] = obj2[attrname]; }
			return obj3;
		}

		this.options = merge_options(dot.defaults,opts);
		this.selector = document.getElementById(opts.selector);
		console.log(this.options);
		generateDots(this);
	};


	dot.prototype.optionss = function() {
		console.log(this.options);
	};


	// Build the editor
	function generateDots(dot) {
		console.log(dot.options);
	}

	// Attach defaults for plugin to the plugin itself
	dot.defaults = {
		selector: '',
		sizeMin: 3,
		sizeMax: 8,
		dotNum: 15,
		radius: 50
	};

	// make accessible globally
	window.dot = dot;

})();


