require('dotenv').config();
const app = require('./api');

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('Listening at the door', PORT));
