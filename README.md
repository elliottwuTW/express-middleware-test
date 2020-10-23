## Response Time
A simple test to record every request and log the request-response duration

### Info
This test can 
- track every request in format ```[yyyy-mm-dd hh:mm:ss]```, HTTP method and URL
- record every response time in milliseconds

### Result
```
2020-10-23 10:10:35 | GET from /
Duration:  5  ms
```

### Quick Start
```
# Create a project folder to start
mkdir <project-folder>
cd <project-folder>

# Clone the project
git clone https://github.com/elliottwuTW/express-middleware-test.git

# Install all dependencies
npm install

# Generate the seed data
npm run seed

# Run the Express server
npm run start

# Or run the server with nodemon
npm run dev
```

### Package Versions
- Node.js : 14.4.0
- express : 4.17.1


### App Info
#### Author
Elliott Wu [elliottwuTW](https://github.com/elliottwuTW)

#### Version
1.0.0
