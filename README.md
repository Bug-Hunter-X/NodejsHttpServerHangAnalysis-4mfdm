# Node.js HTTP Server Hangs

This repository demonstrates a common error in Node.js HTTP servers: forgetting to end the response.  When `res.end()` isn't called, the server will hang and not respond properly to requests. 

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows the corrected version.

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js`.
3. Make a request to `http://localhost:3000`. You will observe the server hangs. 
4. Run `node bugSolution.js`. 
5. Make a request to `http://localhost:3000`. You'll receive the 'Hello, world!' response, and the server will function as expected.

## Solution

Always call `res.end()` after writing to the response object in your Node.js HTTP server to ensure proper handling of requests.