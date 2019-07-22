# Tutorial TypeScript with Node. Debug and test

## Requirements

### Required software

- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)

## Steps to create project

1. In order to create project file we should init:

    ```bash
    npm init -y
    ```

2. We need to add typescript to the project:

    ```bash
    npm install -D typescript
    ```

3. To ignore propper files:

    ```bash
    wget https://raw.githubusercontent.com/microsoft/TypeScript/master/.gitignore
    ```

4. Configure typescript creating tsconfig.json file in root folder with this content:

    ```json
    "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",
        "baseUrl": ".",
        "paths": {
            "*": [
                "node_modules/*",
                "src/types/*"
            ]
        }
    },
    ```

5. Add express to the project:

    ```bash
    npm install express
    ```
