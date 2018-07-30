const express = require('express');
const expressGraphQL = require('express-graphql'); // glue layer

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql:true // only enable true for dev env
}));

app.listen(4000, () => {

/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
//custome console
    console.log('Listening');



});
