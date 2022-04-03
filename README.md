# wdio
This is a template automation project with WDIO and Typescript.

There are 2 options to run the project.
1. MacBook M1
_ Install npm and node 14.
_ Install ChromeDriver and Chrome (please make sure their versions are compatible and match chromedriver version in package.json).
_ Go to project and run: npm install 
_ Run tests: npx wdio run test/wdio.conf.ts
 
2. Non MacBook M1
_ Install Docker.
_ Run: docker build -t typescript-poc .
_ Run: docker run -it -w /app -v $(pwd):/app typescript-poc:latest bash
_ Run: npx wdio run test/wdio.conf.ts 

Now you can continue working on the project.
