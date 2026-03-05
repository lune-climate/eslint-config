# The Lune Climate shared ESLint configuration

## Developing the shared configuration

* Follow https://eslint.org/docs/latest/extend/shareable-configs
* No need to publish to NPM, the configuration can be fetched via Git

## Using the configuration in a project

1. Add the `@lune-climate/eslint-config` dependency to your project

```
yarn add --dev git+https://github.com/lune-climate/eslint-config.git#master
```

2. Make sure your `package.json` is in the right shape.

   * The `dependencies` that our `eslint-config` [declares](./package.json) should *not*
     be present in your `package.json`.
   * You have to provide the `peerDependencies` that we [expect](./package.json).

3. Create an `eslint.config.js` (or adapt your existing one):

   a. Remove configuration that is already provided by [this shared configuration](./index.js).
   b. Spread the shared config array into your config:

    ```js
    const luneConfig = require('@lune-climate/eslint-config')

    module.exports = [
        ...luneConfig,
        // your project-specific overrides here
    ]
    ```
