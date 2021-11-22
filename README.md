# Express TS

## Structure

https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/

```bash
express-ts-template
src
├───config
├───features
│   └───feature
│       ├───index.ts # exports routes, controllers, services, models
│       ├───feature.controller.ts # controllers called in routes
│       ├───feature.model.ts # handle database access
│       ├───feature.routes.ts # handles incoming traffic
│       ├───feature.service.ts # business logic between controller and database access
│       └───feature.test.ts # test various aspects of feature
├───middlewares
└───utils
```

## Testing

Testing is done using the Jest framework.

- [Unit Tests with Jest: Node + Express + TS](https://losikov.medium.com/part-4-node-js-express-typescript-unit-tests-with-jest-5204414bf6f0)
