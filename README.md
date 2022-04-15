# Backend-Development-with-Node.js
This a repository represents a project starter for any node.js project.

# install packages: 
npm install

# used commands:
* npm init -y
* npm i --save-dev prettier
* npm i --save-dev eslint
* npm i --save-dev eslint-config-prettier
* npm i --save-dev eslint-plugin-prettier
* npm i --save-dev typesctipt
* npm i --save-dev typescript
* npm i --save-dev ts-node
* npm i --save-dev @types/node
* npx tsc --init >> create tsconfig.json
* npm run build
* npm i jasmine
* npm i jasmine-spec-reporter
* npm i --save-dev @types/jasmine
* npm i supertest >> testing endpoints
* npm i --save-dev @types/supertest
* npm run test --silent >> to remove npm errors due to test errors
* npm i express
* npm i --save-dev @types/express
* npm i --save-dev nodemon >> for starting the server

# Set Up the File Structure for jasmine framework:
1. In the root directory of the project, create a folder named spec.
2. In the spec folder, create a folder named support.
3. In the support folder, create a file named jasmine.json to hold the primary configurations for Jasmine.
4. In the src folder, add a folder named tests.
5. In tests add a file named indexSpec.ts to hold the tests for code in the index.js file.
6. In the tests folder, add another folder named helpers.
7. In helpers, add a file named reporter.ts. This will be the primary configuration for your spec reporter.
