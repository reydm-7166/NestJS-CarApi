<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Running the app

```bash
# development
$ npm run start

# watch mode (runs at port 8000)
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Setup

```bash
# packages used: db-server for temporary

# run db-server (runs at port 3000)
$ npx json-server --watch db.json

$ npm install

# I used postman for easy access and readable formatting of the json responses

# HTTP ROUTES (GET, POST, PUT/PATCH, DELETE)

# http://localhost:8000/api/v1/cars
$ GET api/v1/cars      => get all cars

# http://localhost:8000/api/v1/cars/:id
$ GET api/v1/cars/:id      => get specific car

# http://localhost:8000/api/v1/cars
$ POST api/v1/cars      => create new car

# http://localhost:8000/api/v1/cars/:id
$ PUT api/v1/cars/:id      => update whole car

# http://localhost:8000/api/v1/cars/:id
$ PATCH api/v1/cars/:id      => update partially the car

# http://localhost:8000/api/v1/cars/:id
$ DELETE api/v1/cars/:id      => delete the car

