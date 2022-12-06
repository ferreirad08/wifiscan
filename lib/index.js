const { execSync } = require('child_process');

function getInterface() {
  const stdout = execSync(`route | grep default | awk 'NR==1 {print $NF}'`);
  return stdout.toString().replace('\n', '');
}

function scanNetworks(iface) {
  let networks = {};

  try {
    // const stdout = execSync(`sudo iwlist ${iface} scanning`);
    const stdout = `
-59 "f.coelho"
-66 "MELO..2G"
-77 "LIVE TIM_A7F0_2G"
-63 "#NET-CLARO-WIFI"
-86 "MELO..5G"
-86 "Xavier_Oi2.4G"
-74 "f.coelho5"`;
    const lines = stdout.toString().split('\n');

    lines.forEach((line, index) => {
      console.log(line, index);
      /*if (line.includes('ESSID')) {
        const splits = line.split('"');
        const ssid = splits[splits.length - 2];
        const rssi = lines[index - 2].replace('level=', ' dBm').split(' dBm');
        networks[ssid] = Number.parseInt(rssi[rssi.length - 2]);
      }*/
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
