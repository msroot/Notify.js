# Notify.js

<img src="https://raw.githubusercontent.com/msroot/Notify.js/master/screen_shot.png" align="center" height="336" width="300" style="text-align:center">


A very simple notification system using jQuery and Bootstrap able to use callbacks

To make it work add a `#notifications` div to your app and style it

### example:

```css
#notifications {
	cursor: pointer;
	position: fixed;
	right: 0px;
	z-index: 9999;
	bottom: 0px;
	margin-bottom: 22px;
	margin-right: 15px;
	max-width: 300px;	
}
```


# Params
`:text` the text to be displayed

`:callback`: callback when the user clicks the notification

`:close_callback`: callback for x button

`:style`: `danger`, `warning`, `info`, `success` (default is `warning`)


```js
Notify(text, callback, close_callback, style) 
```
	
## Usage
a simple notification

```js
Notify("Can't Touch This");
```


Notify a `:danger` style message

```js
Notify("Stop! Hammer time", null, null, 'danger');
```

Using callbacks

```js
Notify(
	"I told you homeboy (You can't touch this)",
	function () { 
		alert("clicked notification")
	},
	function () { 
		alert("clicked x")
	}
);
```

## Why?
Because I need a simple library with callbacks and everything its tooooo complicated

inspired by [ohSnap]( https://github.com/justindomingue/ohSnap )

## Who?
[@yannis_kolovos]( http://twitter.com/yannis_kolovos )

## Contributing

1. Fork it ( https://github.com/msroot/Notify.js/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License
MIT

<a href="http://www.youtube.com/watch?feature=player_embedded&v=otCpCn0l4Wo
" target="_blank"><img src="http://img.youtube.com/vi/otCpCn0l4Wo/0.jpg" width="240" height="180" border="10" /></a>
