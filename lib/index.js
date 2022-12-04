const { execSync } = require('child_process');

function getInterface() {
  const stdout = execSync('route');
  for (const line of stdout.toString().split('\n')) {
    if (line.includes('default')) {
      const splits = line.split(' ');
      return splits[splits.length - 1];
    }
  }
}

function scanNetworks(iface) {
  let networks = {};

  try {
    const stdout = execSync(`sudo iwlist ${iface} scanning`);
  } catch (err) {
    return {};
  }

  const lines = stdout.toString().split('\n');

  lines.forEach((line, index) => {
    if (line.includes('ESSID')) {
      const splits = line.split('"');
      const ssid = splits[splits.length - 2];
      const rssi = lines[index - 2].replace('level=', ' dBm').split(' dBm');
      networks[ssid] = Number.parseInt(rssi[rssi.length - 2]);
    }
  });

  return networks;
}

module.exports = {
  getInterface,
  scanNetworks,
};
