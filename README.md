# Wifiscan

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ferreirad08/wifiscan/blob/main/LICENSE)
[![NPM Version][https://badgen.net/npm/v/express]][https://npmjs.org/package/express]
![Tests](https://github.com/ferreirad08/wifiscan/actions/workflows/tests.yml/badge.svg)
![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fjsonblob.com%2Fapi%2FjsonBlob%2F1048771169276411904)
[![NPM Install Size][https://badgen.net/packagephobia/install/express]][https://packagephobia.com/result?p=express]
[![NPM Downloads][https://badgen.net/npm/dm/express]][https://npmcharts.com/compare/express?minimal=true]

Library to get the received signal strength indicator (RSSI) from Wi-Fi networks.

## Installation

Simply install **wifiscan** library from [NPM](https://www.npmjs.com/package/wifiscan)

```bash
$ npm install wifiscan
```

## Examples

```javascript
const { getInterface, scanNetworks } = require('wifiscan');

// Getting the default Network Interface
const iface = getInterface();

const networks = scanNetworks(iface);

console.log(networks);
```
