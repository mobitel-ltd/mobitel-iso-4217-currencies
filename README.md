# Mobitel Ltd. ISO-4217 Currencies
NodeJs module based on ISO-4217 for validate and get basic info by currency

## Attention
This module writing and testing on **NodeJs v.8+** and **NPM v.5+**.
Using the module in previous versions of NodeJs does not guarantee correct works.

## <a name="navigation">Navigation</a>

* [Installation](#installation)
* [Example](#example)
* [API](#api)
    * [.list](#list)
    * [.validate()](#validate)
    * [.get()](#get)
* [Testing](#testing)
* [License](#license)

## <a name="installation">Installation</a>

```
npm i --save mobitel-iso-4217-currencies
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="example">Example</a>
> **minor** - number of decimals

```javascript
const isoCurrencies = required('mobitel-iso-4217-currencies');

// validate
const valid3 = isoCurrencies.validate('AFN'); //=> true
const validNum = isoCurrencies.validate('971'); //=> true
const invalid3 = isoCurrencies.validate('AF'); //=> false
const invalidNum = isoCurrencies.validate('000'); //=> false

// get data
const data3 = isoCurrencies.get('AFG'); //=> {country: 'Afghanistan', currency: 'Afghani', alpha3: 'AFN', numeric: '971', minor: 2}
const dataNum = isoCurrencies.get('004'); //=> {country: 'Afghanistan', currency: 'Afghani', alpha3: 'AFN', numeric: '971', minor: 2}
const noData3 = isoCurrencies.get('AF'); //=> null
const noDataNum = isoCurrencies.get('000'); //=> null
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="api">API</a>

### <a name="list">.list</a>
Property - `{country: String, alpha2: String, alpha3: String, numeric: String}[]` - contains full currencies list.

Example
```javascript
const list = isoCurrencies.list; //=> objects list 
```
[<p align="right">up to navigation</p>](#navigation)

### <a name="validate">.validate(code)</a>
Argument - `String` - currency code like `'AFN'`(alpha3) or `'971'`(numeric).

If code exist return `true`, otherwise `false`.

Example
```javascript
const valid3 = isoCurrencies.validate('AFN'); //=> true
const validNum = isoCurrencies.validate('971'); //=> true
const invalid3 = isoCurrencies.validate('AF'); //=> false
const invalidNum = isoCurrencies.validate('000'); //=> false
```
[<p align="right">up to navigation</p>](#navigation)

### <a name="get">.get(code)</a>
Argument - `String` - currency code like `'AFN'`(alpha3) or `'971'`(numeric).

If code exist return object with simple currency data like 
`{country: 'Afghanistan', currency: 'Afghani', alpha3: 'AFN', numeric: '971', minor: 2}`, otherwise `null`.

> **minor** - number of decimals

Example
```javascript
const data3 = isoCurrencies.get('AFG'); //=> {country: 'Afghanistan', currency: 'Afghani', alpha3: 'AFN', numeric: '971', minor: 2}
const dataNum = isoCurrencies.get('004'); //=> {country: 'Afghanistan', currency: 'Afghani', alpha3: 'AFN', numeric: '971', minor: 2}
const noData3 = isoCurrencies.get('AF'); //=> null
const noDataNum = isoCurrencies.get('000'); //=> null
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="testing">Test</a>

    npm run test
[<p align="right">up to navigation</p>](#navigation)

## <a name="testing">License</a>
MIT License.
Copyright (c) 2017 Mobitel Ltd
[<p align="right">up to navigation</p>](#navigation)
