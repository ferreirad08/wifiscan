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

function wifiAnalyzer(PORT) {
  const app = express();

  const iface = getInterface();

  app.get('/scanNetworks', async (req, res) => {
    res.status(200).json(scanNetworks(iface));
  });

  app.get('/wifiAnalyzer', async (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  PORT = PORT | 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Wi-Fi Analyzer running at http://localhost:${PORT}/wifiAnalyzer`);
  });
}

module.exports = {
  getInterface,
  scanNetworks,
  wifiAnalyzer
};
