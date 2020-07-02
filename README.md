# Vanilla CSS

This is a collection of SCSS utilities that can be used in any kind of project (Wordpress, PHP, React, etc.).

It includes my simple grid system based on flexbox and other stuffs (inspired by Pure CSS)

Its written in SASS so you can use all the files or just select the one that you want to include.

Its currently used on https://antoniogallo.it/ , https://visitaretenerife.it/ and other personal projectes.

DEMO: https://badpenguin.github.io/vanilla-css/


## Building

I use "Web/PHP Storm" with watchers to build the project with:

```scss --style compressed --update $FileName$:../docs/$FileNameWithoutExtension$.min.css```


## BEM

This version 2 tries to use BEM as much as possible:
- container: .container
- modifier: .target + '--' + .modifier = .target--modifier = .container--outer
- child element: .parent + '__' + .child = .parent__child = .container__buttton


## Other Resources

#### Usefull CSS Generators

* Angled edges: https://angled-edges-generator.josephfus.co/
