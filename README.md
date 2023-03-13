# Micro-Frontend POC with Vite

## Start the app

In `mfe1`, run:

    yarn build
    yarn preview

Then in `shell` run:

    yarn dev

## About

Created with Vite + React + TypeScript template.

    yarn create vite mfe1 --template react-ts
    yarn create vite shell --template react-ts

Module Federation is implemented using the `@originjs/vite-plugin-federation` plugin:

    yarn add @originjs/vite-plugin-federation --dev
