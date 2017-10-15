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
    * [.getCodeList()](#get-code-list)
* [Testing](#testing)
* [License](#license)

## <a name="installation">Installation</a>

```
npm i --save mobitel-iso-4217-currencies
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="example">Example</a>
> Now for each currency exist:
> * **country** - Country name
> * **currency**- Currency name
> * **alpha3** - Alphabetic code of currency
> * **numeric** - Numeric code of currency
> * **minor** - Number of decimals

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

// get list of codes
const listOfCodes1 = isoCurrencies.getCodeList('alpha3'); //=> ['AFN', ...]
const listOfCodes2 = isoCurrencies.getCodeList('alpha3', 'numeric'); //=> ['AFN', ..., '971', ...]
const listOfCodes3 = isoCurrencies.getCodeList(['alpha3']); //=>  ['AFN', ...]
const listOfCodes4 = isoCurrencies.getCodeList(['alpha3', 'numeric']); //=> ['AFN', ..., '971', ...]

const listOfCodes5 = isoCurrencies.getCodeList('unknown'); //=> null
const listOfCodes7 = isoCurrencies.getCodeList(['unknown']); //=>  null
const listOfCodes6 = isoCurrencies.getCodeList('unknown', 'numeric'); //=> null
const listOfCodes8 = isoCurrencies.getCodeList(['unknown', 'numeric']); //=> null
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

### <a name="get-code-list">.getCodeList(codeName[, codeName]|[codeName[, codeName]])</a>
Arguments - `String|String[]` - country code name. Can accept variants:
* `codeName1`
* `codeName1, codeName2`
* `[codeName1]`
* `[codeName1, codeName2]`

Return array of all exist codes from arguments or `null`.

Example
```javascript
const listOfCodes1 = isoCurrencies.getCodeList('alpha3'); //=> ['AFN', ...]
const listOfCodes2 = isoCurrencies.getCodeList('alpha3', 'numeric'); //=> ['AFN', ..., '971', ...]
const listOfCodes3 = isoCurrencies.getCodeList(['alpha3']); //=>  ['AFN', ...]
const listOfCodes4 = isoCurrencies.getCodeList(['alpha3', 'numeric']); //=> ['AFN', ..., '971', ...]

const listOfCodes5 = isoCurrencies.getCodeList('unknown'); //=> null
const listOfCodes7 = isoCurrencies.getCodeList(['unknown']); //=>  null
const listOfCodes6 = isoCurrencies.getCodeList('unknown', 'numeric'); //=> null
const listOfCodes8 = isoCurrencies.getCodeList(['unknown', 'numeric']); //=> null
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="testing">Test</a>

    npm run test
[<p align="right">up to navigation</p>](#navigation)

## <a name="testing">License</a>
MIT License.
Copyright (c) 2017 Mobitel Ltd
[<p align="right">up to navigation</p>](#navigation)
