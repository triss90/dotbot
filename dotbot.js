(function(){

	// Define settings
	const dotbot = function(opts) {

		// Merge default options with user options
		function merge_options(obj1,obj2) {
			let obj3 = {};
			let attrname;
			for (attrname in obj1) {
				obj3[attrname] = obj1[attrname];
			}
			for (attrname in obj2) {
				obj3[attrname] = obj2[attrname];
			}
			return obj3;
		}
		this.options = merge_options(dotbot.defaults,opts);

		// Define options
		this.dot_selector = document.getElementById(this.options.selectorId);
		this.dot_size_minimum = this.options.sizeMin;
		this.dot_size_maximum = this.options.sizeMax;
		this.dot_number = this.options.dots;
		this.dot_radius = this.options.radius;
		this.dot_opacity = this.options.opacity;
		this.dot_zIndex = this.options.zIndex;
		this.dot_colors = this.options.colors;
		this.dot_parent_position = this.options.opacity;

		// Execute dots
		this.generateDots();
	};

	// Generate dots
	dotbot.prototype.generateDots = function() {
		const dot_colors = this.dot_colors;
		for (let i = 0; i < this.dot_number; i++) {
			const random_color = dot_colors[Math.floor(Math.random() * dot_colors.length)];
			const random_size = Math.floor(Math.random() * (this.dot_size_maximum - this.dot_size_minimum + 1)) + this.dot_size_minimum;
			const position_left = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			const position_top = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			const dotbot = document.createElement("span");
			this.dot_selector.style.position = "relative";
			dotbot.style.position = "absolute";
			dotbot.style.background = random_color;
			dotbot.style.borderRadius = this.dot_radius+"%";
			dotbot.style.opacity = this.dot_opacity;
			dotbot.style.pointerEvents = "none";
			dotbot.style.zIndex = this.dot_zIndex;
			dotbot.style.height = random_size+"px";
			dotbot.style.width = random_size+"px";
			dotbot.style.left = position_left+"%";
			dotbot.style.top = position_top+"%";
			this.dot_selector.appendChild(dotbot);
		}
	};

	// Attach defaults for plugin to the plugin itself
	dotbot.defaults = {
		selectorId: '',
		colors: [
			"rgb(248, 231, 28)",
			"rgb(126, 211, 33)",
			"rgb(212, 56, 79)",
			"rgb(128, 185, 254)",
			"rgb(245, 166, 35)",
			"rgb(212, 65, 208)"
		],
		parentPosition: "relative",
		sizeMin: 3,
		sizeMax: 8,
		dots: 15,
		radius: 50,
		opacity: 1,
		zIndex: -1
	};

	// Make accessible globally
	window.dotbot = dotbot;

})();


