# Vue3, Typescript, Vite, Antdv, GraphQL, Vue Apollo

This is an implementation of vue 3 with [script setup](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to an challenge proposed by Airbank. Use typescript in front was a choice to test new ways of code vue projects, I also use a cool component library for vue called [Ant Design Vue](https://antdv.com/docs/vue/introduce/), for my API requisitions i decided to use [Vue Apolo](https://v4.apollo.vuejs.org/).

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Environment Configuration

Copy the .env file based on the .env.template with the environment variables. form more information

```.env
VITE_URI_API="http://localhost:4005/graphql"
```

### Local development

To develop locally:

```
npm run dev
```

### Deployment

Just make a direct commit to the main branch, or a pull request and the pipeline will automatically implement the changes.

```
git add folder/file
git commit -m "Deploy changes"
git push origin main
```
