const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('app'));
app.use(express.static('node_modules/nouislider/distribute'));
app.get('/', (req, res) => res.sendFile('app.html', { root: __dirname + "/app"}))
app.listen(port, () => console.log(`News Analysis active on port ${ port }`));

