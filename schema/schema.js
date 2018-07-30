const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

//hard coding in users just for demo
const users = [
  { id: '23' , firstName: 'Bill', age: 20 },
  { id: '23' , firstName: 'Samantha', age: 34 },

];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString},
    age: { type: GraphQLInt},
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type : UserType,
      args: { id: { type: GraphQLString}},
      resolve(parentValue, args) {
        console.log('finding users');
        return _.find(users, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
