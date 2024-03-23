const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server');
const mockData = require('./data/mockData.json');
require('dotenv').config();

const port = process.env.SERVER_PORT;
const app = express();

app.use('/graphql', jsonGraphqlExpress.default(mockData));
app.listen(port).on('listening', () => {
  console.log(`API running at http://localhost:${port}/graphql`);
});
