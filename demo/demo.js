window.onload = function() {
	var container;
	var canvas;
	var label;
	var i;

	for (i = 1000; i < 1100; i++) {
		container = document.createElement('div');
		label = document.createElement('div');
		canvas = document.createElement('canvas');

		createUserpic(canvas, i);

		label.innerHTML = i;
		container.appendChild(canvas);
		container.appendChild(label);
		document.body.appendChild(container);
	}
};