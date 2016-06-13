Angular cards
=============

A Simple Angular Components

[DEMO](http://Halfeld.github.io/angular-cards)


Install
-------

```sh
bower install --save angular-cards
```

Usage
-----

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Application</title>
  <link rel="stylesheet" href="bower_components/angular-cards/dist/angular-cards.js">
</head>
<body>

  <card
    title-small-word="Albert"
    title-big-word="Einstein"
    color="tomato"
    src="http://www.media.inaf.it/wp-content/uploads/2014/02/Einstein_laughing.jpeg">
      Albert Einstein was a German-born theoretical physicist. He developed the general theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). Einstein's work is also known for its influence on the philosophy of science.
    </card>


  <script src="bower_components/angular/angular.mim.js"></script>
  <script src="bower_components/angular-cards/dist/angular-cards.js"></script>
</body>
</html>
```


### main.js

```js
angular.module('App', ['angularCards']);
```
