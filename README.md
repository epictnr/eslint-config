# eslint-config by epictnr

Base set of rules for all framework components based on the JavaScript

### how to use

You'll need to install dev dependencies

```bash
@epictnr/eslint-config-epictnr
babel-eslint
eslint
eslint-config-standard
eslint-plugin-import
eslint-plugin-node
eslint-plugin-promise
eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-standard
```

Add .eslintrc.json into your root directory

```bash
{
  "extends": "./node_modules/@epictnr/eslint-config-epictnr/index.js"
}
```

And then add command to your package.json

```bash
"scripts": {
  "lint:js": "eslint ./app --color"
}
```
