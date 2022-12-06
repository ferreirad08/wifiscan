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

function wifiAnalyzer() {
  const app = express();

  const iface = getInterface();
  const PORT = 3000;

  app.get('/scanNetworks', async (req, res) => {
    res.status(200).json(scanNetworks(iface));
  });

  app.get('/wifiAnalyzer', async (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Wi-Fi Analyzer running at http://localhost:${PORT}/wifiAnalyzer`);
  });
}

module.exports = {
  getInterface,
  scanNetworks,
  wifiAnalyzer
};
