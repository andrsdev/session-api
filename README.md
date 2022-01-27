# session-api

This is a basic demo of anonymous sessions api with JWT. Built with
[Node.js](https://nodejs.org/), [express](https://www.npmjs.com/package/express) and [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).

## Get started

### Environment variables

Create a `.env` file at the root directory with the following contents:

```bash
# Port to run application
PORT=3000

# Secret used to sign JWT, can generate one with https://keygen.io/
JWT_SIGN_SECRET=
```

### Run application

Install dependencies

```bash
npm install
```

And run

```bash
npm start
```
