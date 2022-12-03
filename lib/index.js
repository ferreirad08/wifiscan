const { execSync } = require('child_process');

function getInterface() {
  const stdout = execSync('route');
  for (const line of stdout.toString().split('\n')) {
    if (line.includes('default')) {
      return line.split(' ').at(-1);
    }
  }
}

const stdout = `
          Cell 01 - Address: C8:14:51:5F:A9:54
                    Quality=70/70  Signal level=-19 dBm  
                    Encryption key:on
                    ESSID:"OPTUS58FFG6"
                    Extra: Last beacon: 0ms ago
          Cell 02 - Address: 10:13:31:D2:2F:23
                    Quality=42/70  Signal level=-68 dBm  
                    Encryption key:on
                    ESSID:"TelstraD22F2"
                    Extra: Last beacon: 0ms ago
          Cell 03 - Address: C8:14:51:5F:A9:50
                    Quality=70/70  Signal level=-11 dBm  
                    Encryption key:on
                    ESSID:"OPTUS58FFG69"
                    Extra: Last beacon: 0ms ago
          Cell 04 - Address: 12:13:31:D2:2F:2B
                    Quality=51/70  Signal level=-59 dBm  
                    Encryption key:on
                    ESSID:"TelstraD22F23"
                    Extra: Last beacon: 432ms ago
          Cell 05 - Address: F4:6B:EF:B8:E9:27
                    Quality=40/70  Signal level=-70 dBm  
                    Encryption key:on
                    ESSID:"OPTUS_B8E926"
                    Extra: Last beacon: 2792ms ago`;

function scanNetworks(iface) {
  let networks = {};

  // const stdout = execSync(`sudo iwlist ${iface} scanning`);
  const lines = stdout.toString().split('\n');

  lines.forEach((line, index) => {
    if (line.includes('ESSID')) {
      const ssid = line.split('"').at(-2);
      const rssi = lines[index - 2].replace('level=', ' dBm').split(' dBm').at(-2);
      networks[ssid] = Number.parseInt(rssi);
    }
  });

  return networks;
}

module.exports = {
  getInterface,
  scanNetworks,
};
