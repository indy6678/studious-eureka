const express = require('express');
const sequelize = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001

sequelize.AsyncQueueError({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});