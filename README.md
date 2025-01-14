# gitbook-plugin-watermark-fox

Generate custom watermark information on every GitBook html page in order to protect copyright.

## Usage

1. add `watermark-fox` into `plugins` items in your `book.js` file
2. `gitbook install && gitbook serve`,then it will take into effect

## Config

Default configuration listed as below:

```js
pluginsConfig: {
  'watermark-fox': {
    enable: true,
    width: 200,
    height: 200,
    content: 'www.gitbook.com',
    fontColor: '#d0d0d0'
   }
}
```

but we can modify it based on our custom requirements according to [config](https://zhensherlock.github.io/watermark-js-plus/guide/custom/configs.html):

```js
pluginsConfig: {
  'watermark-fox': {
    enable: true,
    width: 200,
    height: 200,
    content: 'www.foo.com',
    fontColor: '#f1f1f1'
   }
}
```

If we set `enable` to `false`, it will not create watermark anymore.

## Example

![Watermark example](images/watermark-example.png "Watermark example")

## Acknowledgement

https://zhensherlock.github.io/watermark-js-plus/
