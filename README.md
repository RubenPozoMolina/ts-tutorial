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
    npm install --save-dev typescript
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

6. Add tslint to the project. To improve the code syntax:

    ```bash
    npm install --save-dev tslint
    ```

    Add tslint.json file to the project

    ```json
    {
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "trailing-comma": [ false ],
        "no-console": false
    },
    "rulesDirectory": []
    }
    ```

7. Add required libraries to develop the project properly

    ```bash
    npm install --save-dev @types/node @types/express
    npm install --save-dev ts-node shelljs fs-extra nodemon rimraf npm-run-all
    npm install --save-dev @types/fs-extra @types/shelljs
    ```
8. Create src/index.ts file with this content:

    ```typescript
    import express from "express";
    const app = express();
    const port = 8080; // default port to listen

    // define a route handler for the default home page
    app.get( "/", ( req, res ) => {
        res.send( "Hello world!" );
    } );

    // start the Express server
    app.listen( port, () => {
        console.log( `server started at http://localhost:${ port }` );
    } );
    ```

9. Add to package.json propper tasks:

    ```json
    "main": "dist/index.js",
    "scripts": {
        "prebuild": "tslint -c tslint.json -p tsconfig.json --fix",
        "build": "tsc",
        "prestart": "npm run build",
        "start": "node .",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```

10. Add a file launch.json into .vscode folder to debug:

    ```json
    {
        "version": "0.2.0",
        "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug server",
            "program": "${workspaceFolder}/src/index.ts",
            "preLaunchTask": "npm: build",
            "sourceMaps": true,
            "smartStep": true,
            "internalConsoleOptions": "openOnSessionStart",
            "outFiles": [
                "${workspaceFolder}/dist/**/*.js"
            ]
        }
        ]
    }

    ```
