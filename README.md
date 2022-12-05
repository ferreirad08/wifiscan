# Wifiscan

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ferreirad08/wifiscan/blob/main/LICENSE)
[![NPM Version](https://badgen.net/npm/v/wifiscan)](https://npmjs.org/package/wifiscan)
![Tests](https://github.com/ferreirad08/wifiscan/actions/workflows/tests.yml/badge.svg)
![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fjsonblob.com%2Fapi%2FjsonBlob%2F1048771169276411904)
[![NPM Install Size](https://badgen.net/packagephobia/install/wifiscan)](https://packagephobia.com/result?p=wifiscan)
[![NPM Downloads](https://badgen.net/npm/dm/wifiscan)](https://npmcharts.com/compare/wifiscan?minimal=true)

Library to get the received signal strength indicator (RSSI) from Wi-Fi networks.

## Dependencies

```bash
$ sudo apt install wireless-tools
```

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
