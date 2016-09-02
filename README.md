# ng2-safe-img [![Build Status](https://travis-ci.org/hyzhak/ng2-safe-img.svg?branch=develop)](https://travis-ci.org/hyzhak/ng2-safe-img)
very tiny and safe img for Angular 2

Just consist from one structural directive - `*safeSrc`. 
And should be used with with <img/>: 

```html
<img *safeSrc="item.uri"/>
```


# Example

Lets explain how does it work through example.

Here how should we use it 

```html
<img *safeSrc="item.uri"/>
```

if <item.uri> equal to 'https://placekitten.com/200/300'
we will get

```html
<img src="https://placekitten.com/200/300"/>
```

if <item.uri> is undefined or null
we will get

```html
<!--template bindings={
  "ng-reflect-src": null
}-->
```

so no any html elements will be there. What saves us from seeing something like this:

![unsafe img with undefined uri](unsafe-img-with-undefined-uri)
