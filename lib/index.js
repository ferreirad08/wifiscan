const { execSync } = require('child_process');
const express = require('express');

function getInterface() {
  return execSync(`route | grep default | awk 'NR==1 {print $NF}'`)
    .toString().replace('\n', '');
}

function scanNetworks(iface) {
  const lines = execSync(`sudo iwlist ${iface} scan | grep -Po '(?<=(ESSID:")).*(?=")|(?<=(level=)).*(?= dBm)'`)
    .toString().split('\n');

  let networks = {};

  for (let i = 1; i < lines.length; i = i + 2)
    networks[lines[i]] = Number.parseInt(lines[i - 1]);

  return networks;
}

module.exports = {
  getInterface,
  scanNetworks
};
