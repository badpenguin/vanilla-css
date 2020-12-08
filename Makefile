

docs/vanilla.min.css docs/vanilla.min.css.map: scss/vanilla.scss
	cd scss && sass --no-cache -t compressed --sourcemap=auto --scss vanilla.scss ../docs/vanilla.min.css

clean:
	rm -vf scss/vanilla.css* docs/vanilla.css*
