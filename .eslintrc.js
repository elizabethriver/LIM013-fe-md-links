module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": ["airbnb-base"],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-console": "warn",
        "linebreak-style": 0,
    },
    "globals": {
        'Atomics': "readonly",
        'SharedArrayBuffer': "readonly",
      },
    "plugins": ["jest"]
};
