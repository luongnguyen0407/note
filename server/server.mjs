import { ApolloServer } from "@apollo/server";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import fakeData from "./fakeData/index.js";
const app = express();
const httpServer = http.createServer(app);
const typeDefs = `#graphql
    type Folder{
      id: String,
      name: String,
      createAt: String,
      author:Author
    }
    type Author{
      id: String,
      name: String,
    }
    type Query{
        folders: [Folder]
    }

`;
const resolvers = {
  Query: {
    folders: () => fakeData.folders,
  },
  Folder: {
    author: (parent, args) => {
      const authorId = parent.authorId;
      return fakeData.author.find((author) => author.id === authorId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();
app.use(cors(), express.json(), expressMiddleware(server));

await new Promise((resolve) =>
  httpServer.listen(
    {
      port: 4000,
    },
    resolve
  )
);
console.log("server on running");
