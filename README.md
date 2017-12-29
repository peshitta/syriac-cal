# syriac-cal

[![npm version](https://badge.fury.io/js/syriac-cal.svg)](https://badge.fury.io/js/syriac-cal)
[![npm module downloads](http://img.shields.io/npm/dt/syriac-cal.svg)](https://www.npmjs.org/package/syriac-cal)
[![Build Status](https://travis-ci.org/peshitta/syriac-cal.svg?branch=master)](https://travis-ci.org/peshitta/syriac-cal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/syriac-cal/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/syriac-cal.svg)](https://david-dm.org/peshitta/syriac-cal)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/syriac-cal/badge.svg?branch=master)](https://coveralls.io/github/peshitta/syriac-cal?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Convert from Syriac Unicode to CAL code

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install syriac-cal --save
```

Following bundles are available:
* `syriac-cal.js` - UMD ES5 version for use in browser, node, etc.
* `syriac-cal.min.js` - minified version of `syriac-cal.js`
* `syriac-cal.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/syriac-cal/-/syriac-cal-1.0.7.tgz](https://registry.npmjs.org/syriac-cal/-/syriac-cal-1.0.7.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

For CAL to Syriac conversion see:
[cal-syriac](https://github.com/peshitta/cal-syriac)

## License

[MIT](https://github.com/peshitta/syriac-cal/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/syriac-cal/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [syriacCal](#module_syriacCal)
    * [.mapper](#module_syriacCal.mapper) : <code>Mapper</code>
    * [.toCal](#module_syriacCal.toCal) ⇒ <code>string</code>

<a name="module_syriacCal.mapper"></a>

### syriacCal.mapper : <code>Mapper</code>
Aramaic Mapper

**Kind**: static constant of [<code>syriacCal</code>](#module_syriacCal)  
<a name="module_syriacCal.toCal"></a>

### syriacCal.toCal ⇒ <code>string</code>
Convert from Syriac Unicode to CAL

**Kind**: static constant of [<code>syriacCal</code>](#module_syriacCal)  
**Returns**: <code>string</code> - the input word converted to CAL  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in Syriac Unicode |

