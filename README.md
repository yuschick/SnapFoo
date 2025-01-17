![SnapFoo Logo](http://yuschick.github.io/SnapFoo/lib/img/snapfoo-logo.png)

SnapFoo is a lightweight (~4.5k minified) animation library that compliments Snap.svg. The focus of SnapFoo is to simplify bringing elaborate scenes of SVG animations and interactions to life.

### Documentation
[SnapFoo Documentation](http://yuschick.github.io/SnapFoo/)

#### Release Notes (V2.1)
+ Published SnapFoo to NPM
```
npm install snapfoo --save
```
+ The `./src` directory now contains an updated copy of SnapFoo including minor ES6 additions
+ The `./dist` directory contains the production files that have ben transpiled to `es-2015` presets via Babel


#### Release Notes (V2)
+ Greater support and flexibility for callbacks including scoping and when they execute
+ Performance and various updates including ~newer jQuery features for SVG class manipulation
+ Better support and features for path animations
+ Updated support for multiple animations and classes within a single SVG container
+ General overhaul and organization of features and naming
+ Removed intervals for looping
+ Removed stop(), set(), and clear() methods

#### Get Started

**NPM**
```
npm install snapfoo --save
```

**Manual**
Download SnapFoo and include the `./dist/` build in your project after jQuery and Snap.svg. Once included, call the library for use:

```js
const snapfoo = snapFoo("#theSVGContainer");
```

#### SnapFoo Calls
+ **snapfoo.animate()**: The primary animation call that receives an element or group of elements to animate based on theFramesObj object. Any element to be animated that does not already have an ID is appended the class "sf#" for a unique identifier.
+ **snapfoo.animatePath()**: Animate an element or group of elements along a path. Any element to be animated that does not already have an ID is appended the class "sf#" for a unique identifier.

#### Contact
[@Yuschick on Twitter](http://www.twitter.com/Yuschick)

## Sponsors
[<img src="https://spiceprogram.org/assets/img/chilicorn_sticker.svg" width="50" alt="Spice Program - Futurice">](https://spiceprogram.org/)
