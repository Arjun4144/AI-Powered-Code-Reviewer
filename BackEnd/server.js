const app = require('./src/app');
require('dotenv').config({ quiet: true }); 




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});