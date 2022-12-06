const { execSync } = require('child_process');

function getInterface() {
  return execSync(`route | grep default | awk 'NR==1 {print $NF}'`);
}

function scanNetworks(iface) {
  let networks = {};

  try {
    const stdout = execSync(`sudo iwlist ${iface} scanning`);
    const lines = stdout.toString().split('\n');

    lines.forEach((line, index) => {
      if (line.includes('ESSID')) {
        const splits = line.split('"');
        const ssid = splits[splits.length - 2];
        const rssi = lines[index - 2].replace('level=', ' dBm').split(' dBm');
        networks[ssid] = Number.parseInt(rssi[rssi.length - 2]);
      }
    });
  } catch (err) {
    console.log(err);
  } finally {
    return networks;
  }
}

module.exports = {
  getInterface,
  scanNetworks,
};
