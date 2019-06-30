var menu = [
	['index.html', 'Vanilla CSS', 'home vanilla-version dont-toggle'],
	['10.typography.html', 'Typography', ''],
	['20.images.html', 'Images'],
	['30.buttons.html', 'Buttons'],
	['forms.html', 'Forms'],
	['40.grid-basic.html', 'Grid: basic'],
	['41.grid-nested.html', 'Grid: nested'],
	['42.grid-gutter.html', 'Grid: gutter'],
	['50.viewport.html', 'Viewport'],
	['60.fab.html', 'FAB'],
	['70.overlay.html', 'overlay'],
	['80.animate.html', 'animate'],
	['navbar.html', 'navbar']
];


function writeResponsiveMenu() {
	document.write('<nav class="navbar"><ul class="navbar-menu scrollable flex-center navbar-menu-left">');

	[].forEach.call(menu, function (item) {
		document.write('<li class="' + item[2] + '"><a href="' + item[0] + '">' + item[1] + '</a></li>');
	});

	document.write('</ul><div class="navbar-toggle"><label for="navbar-toggle">&#9776; Menu</label><input type="checkbox" id="navbar-toggle"/><div class="navbar-overlay"><label class="navbar-overlay-close" for="navbar-toggle">&times;</label><ul>');

	[].forEach.call(menu, function (item) {
		document.write('<li class="' + item[2] + '"><a href="' + item[0] + '">' + item[1] + '</a></li>');
	});

	document.write('</ul></div></div></nav>');

}


function writeSimpleMenu() {

	document.write('<nav class="docmenu"><ol>');
	[].forEach.call(menu, function (item) {
		document.write('<li class="' + item[2] + '"><a href="' + item[0] + '">' + item[1] + '</a></li>');
	});
	document.write('</ol></nav>');
}
