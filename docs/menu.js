var menu = [
	['index.html', 'Vanilla CSS v3', 'home dont-toggle'],
	['10.typography.html', 'Typography', ''],
	['11.article.html', 'Article', ''],
	['20.images.html', 'Image', ''],
	['30.buttons.html', 'Button', ''],
	['35.forms.html', 'Form', ''],

	['#', 'Grid', '',
		[
			['40.grid-basic.html', 'Grid: basic', ''],
			['41.grid-nested.html', 'Grid: nested', ''],
			['42.grid-gutter.html', 'Grid: gutter', ''],
		]
	],
	['50.viewport.html', 'Viewport', ''],
	['60.fab.html', 'FAB', ''],
	['65.cards.html', 'Card', ''],
	['70.overlay.html', 'Overlay', ''],
	['80.animate.html', 'Animate', ''],
	['90.navbar.html', 'Navbar', ''],
	['91.wordpress.html', 'Wordpress', ''],
	['https://github.com/badpenguin/vanilla-css/', 'GitHub', 'text-bold'],
];


function writeResponsiveMenu() {
	var html = '';
	html += '<header id="mainmenu"><nav class="navbar navbar--toggle-always navbar--toggle-on-medium"><ul class="navbar__menu navbar__menu--left">';

	[].forEach.call(menu, function (item) {
		if (item[3]) {
			html += '<li class="hover-overlay ' + item[2] + '"><a href="' + item[0] + '">' + item[1] + '</a><ul class="hover-inner">';
			[].forEach.call(item[3], function (subitem) {
				html += '<li class="' + subitem[2] + '"><a href="' + subitem[0] + '">' + subitem[1] + '</a></li>';
			});
			html += '</ul></li>';
		} else {
			html += '<li class="' + item[2] + '"><a href="' + item[0] + '">' + item[1] + '</a></li>';
		}
	});

	html +=
		'</ul><div class="navbar__toggle"><label for="navbar-toggle">&#9776;&nbsp;Menu</label>' +
		'<input type="checkbox" id="navbar-toggle"/><div class="navbar__overlay navbar__overlay--right">' +
		'<label class="navbar__overlay__close" for="navbar-toggle">&times;</label><ul>'
	;

	[].forEach.call(menu, function (item) {
		html += '<li class="' + item[2] + '"><a href="' + item[0] + '">' + item[1] + '</a></li>';
	});

	html += '</ul></div></div></nav></header>';
	return html;
}


$onReady(function () {

	document.body.insertAdjacentHTML('afterbegin', writeResponsiveMenu());

	$appendBody('<footer><a href="https://github.com/badpenguin/vanilla-css/">Download from GitHub</a><a href="#" class="back-to-top">Back to Top</a></footer>');
});
