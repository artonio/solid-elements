# Solid Elements

Solid Elements is a SolidJS component library, built using Yarn Workspaces. This library provides a collection of
reusable UI components for your SolidJS applications. The components are located in the packages/solid-elements
directory, while the documentation and examples can be found in the app/docs directory.

## Table of Contents

- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with Solid Elements, you'll need to have Yarn installed. If you don't have it, you can follow the
instructions at [Yarn Installation](https://classic.yarnpkg.com/en/docs/install).

### Clone the repository

```bash
git clone https://github.com/artonio/solid-elements
```

### Install dependencies

```bash
cd solid-elements
yarn install
```

### Start the development server

```bash
yarn start
```

or from rootDir/package.json

## Directory Structure

```
solid-elements/
├── apps/
│   ├── docs/
│   │   ├── src/
|── packages/
│   ├── solid-elements/
│   │   ├── src/
```

* `apps/docs` - The documentation and examples for the Solid Elements components.
* `packages/solid-elements` - This directory contains the source code for the Solid Elements components.

## Development

The library is set up with Preconstruct to handle the build process and symlink creation. This allows the documentation
app to use the components directly from the `packages/solid-elements` directory.

During development, you can use the `yarn start` command to run the documentation server with hot-reloading.

## Contributing

Contributions are welcome! If you have a feature or improvement you'd like to add, please fork the repository and submit
a pull request. If you have any issues or need help, please open an issue in the GitHub repository.

## License
MIT
