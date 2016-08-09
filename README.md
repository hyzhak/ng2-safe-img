# ng2-safe-img
safe img for Angular 2

Just consist from one structural directive - ** *src **. 
And should be used with with <img/>: 

```html
<img *src="item.uri"/>
```


# Example

Lets explain how does it work through example.

Here how should we use it 

```html
<img *src="item.uri"/>
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

so no any html elements will be there. What save us from seeing something like this:

![unsafe img with undefined uri](unsafe-img-with-undefined-uri)
