const app = require('./app');
const config = require('./config/config');
require('./config/db');
app.listen(config.port,()=>{
    console.log(`backend server is running at http://localhost:${config.port}`);
});