const express = require('express');
const expressGraphQL = require('express-graphql'); // glue layer
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', expressGraphQL({ // middleware
  schema, // ES6 automatically expands this to schema: 'schema'
  graphiql:true // only enable true for dev env
}));

app.listen(4000, () => {

/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
//custome console
  console.log('Listening');



});
