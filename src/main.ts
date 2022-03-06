import { createApp } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import App from "./App.vue";
import { router } from "./routes/router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

// HTTP connection to the API
const env = import.meta.env;
console.log(env);
const httpLink = createHttpLink({
  // You should use an absolute URL here

  // uri: env.PROD ? (env.URI_API as string) : (env.VITE_URI_API as string),
  uri: env.VITE_URI_API as string,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp(App);
app.use(router);
app.use(Antd);
app.provide(DefaultApolloClient, apolloClient);
app.mount("#app");
