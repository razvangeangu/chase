<!-- markdownlint-disable MD041-->

![[License]https://opensource.org/licenses/MIT](https://img.shields.io/npm/l/make-coverage-badge.svg) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![build](https://github.com/razvangeangu/chase/workflows/build/badge.svg?branch=develop) [![Coverage Status](https://coveralls.io/repos/github/razvangeangu/chase/badge.svg?branch=develop&t=gOdMWP)](https://coveralls.io/github/razvangeangu/chase?branch=develop)

# chase

A demo application demonstrating a react-native mobile banking.

## Get Started

If you want to setup this repository locally follow the next commands:

```sh
gh repo clone razvangeangu/chase
cd chase
yarn
yarn start
```

Once the app is installed you may run it on a device or emulator (e.g. `yarn start ios`).

## Features

- Localization with translations in 2 languages (English and Romanian)
- Stack navigation with conditional authentication context
- Augmented Reality Card information
- Login, Home, Cards, Settings and Transactions pages
- Theming with styled components (light and dark) based on system preferences
- Tests using jest and @testing-library
- Charts for monthly spending overview
- Linting eslint, stylelint, prettier and commitlint powered by commitizen
- TypeScript
- GitHub CI pipeline for building and checking

## Screenshots

![Login Page](./docs/assets/login.png)
![Home Page](./docs/assets/home.png)
![Cards Page](./docs/assets/cards.png)
![Augmented Reality Page](./docs/assets/ar.png)
![Transactions Page](./docs/assets/transactions.png)
![Settings Page](./docs/assets/settings.png)
