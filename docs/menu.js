var menu = [
	['index.html', 'Vanilla CSS', 'home dont-toggle'],
	['https://badpenguin.github.io/vanilla-css/','GitHub','text-bold'],
	['10.typography.html', 'Typography', ''],
	['11.medium.html', 'Medium.Com', ''],
	['20.images.html', 'Image', ''],
	['30.buttons.html', 'Button', ''],
	['35.forms.html', 'Form', ''],
	['40.grid-basic.html', 'Grid: basic', ''],
	['41.grid-nested.html', 'Grid: nested', ''],
	['42.grid-gutter.html', 'Grid: gutter', ''],
	['50.viewport.html', 'Viewport', ''],
	['60.fab.html', 'FAB', ''],
	['65.cards.html', 'Card', ''],
	['70.overlay.html', 'Overlay', ''],
	['80.animate.html', 'Animate', ''],
	['90.navbar.html', 'Navbar', ''],
];


function writeResponsiveMenu() {
	var html = '';
	html += '<header><nav class="navbar navbar-toggle-on-medium"><ul class="navbar-menu scrollable flex-center navbar-menu-left">';

	[].forEach.call(menu, function (item) {
		html += '<li class="' + item[2] + '"><a href="' + item[0] + '">' + item[1] + '</a></li>';
	});

	html +=
	'</ul><div class="navbar-toggle"><label for="navbar-toggle">&#9776;&nbsp;Menu</label>' +
		'<input type="checkbox" id="navbar-toggle"/><div class="navbar-overlay navbar-overlay__right">' +
		'<label class="navbar-overlay-close" for="navbar-toggle">&times;</label><ul>'
	;

	[].forEach.call(menu, function (item) {
		html += '<li class="' + item[2] + '"><a href="' + item[0] + '">' + item[1] + '</a></li>';
	});

	html += '</ul></div></div></nav></header>';
	return html;
}


onPageReady(function(){

	document.body.insertAdjacentHTML('afterbegin', writeResponsiveMenu() );

	$append('<footer><a href="https://badpenguin.github.io/vanilla-css/">Download from GitHub</a></footer>');
});
