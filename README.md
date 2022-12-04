# Wifiscan

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ferreirad08/wifiscan/blob/main/LICENSE)
![Tests](https://github.com/ferreirad08/wifiscan/actions/workflows/tests.yml/badge.svg)
![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fjsonblob.com%2Fapi%2FjsonBlob%2F1048771169276411904)

Library to get the received signal strength indicator (RSSI) from Wi-Fi networks.

## Installation

Simply install **wifiscan** library from NPM

```bash
$ npm install wifiscan
```

## Examples

```javascript
const { getInterface, scanNetworks } = require('wifiscan');

const iface = getInterface();

const networks = scanNetworks(iface);

console.log(networks);
```
