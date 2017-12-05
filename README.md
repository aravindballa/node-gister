# node-gister

[![npm](https://img.shields.io/npm/dm/gister-cli.svg?style=flat-square)]()

A simple node package which creates GitHub Gist from files via command line. 📝

### Installation

```shell
npm install -g gister-cli
```

### Usage

```shell
gister-cli f <filename>
```

Example:

```shell
gister-cli f test-file.js
```

### Building in local

First, do a `npm install` and build the package

```shell
npm run build
``` 

and

```shell
node build/gister.js f <filename>
```