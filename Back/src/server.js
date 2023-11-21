const {server } = require("./app");
const { conn } = require('./DB_conect');

server.listen(3001, console.log(`Server raised in port: 3001 `))

conn.sync({ force: true })
.then(async () => {
    console.log('Success with syncing tables!')})
.catch(error => console.log(error.message))