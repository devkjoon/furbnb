const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

// create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// integrate our ApolloServer instance with the Express application as middleware
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
