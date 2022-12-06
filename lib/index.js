const { execSync } = require('child_process');

function getInterface() {
  return execSync(`route | grep default | awk 'NR==1 {print $NF}'`)
    .toString().replace('\n', '');
}

function scanNetworks(iface) {
  const lines = execSync(`sudo iwlist ${iface} scan | grep -Po '(?<=(SSID:)).*|(?<=(level=)).*(?= dBm)' | awk '{ORS=(NR%2?FS:RS)}1'`)
    .toString().split('\n').slice(0, -1);

  let networks = {};

  for (const line of lines) {
    const splits = line.split('\"');
    networks[splits[1]] = Number.parseInt(splits[0]);
  }

  return networks;
}

module.exports = {
  getInterface,
  scanNetworks,
};
