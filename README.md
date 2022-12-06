Recruiter System
===================

An example micro-frontend system where recruiter can select different products for job posting on job portal and checkout. The system has multiple types of offers/discounts application to customers.

## Installation and Run

Front-end is built on module federation with four front-end modules/apps in respective directories; `addtocart`, `cart`, `home`, `pdp` and a backed application based on nestjs `server`

### Server (Backend)
Open a new terminal and navigate to server directory and run below commands.

```sh
cd server
npm install
npm run start:debug
```

### MFEs (Micro-front-ends)
Open a new terminal from root directory and run below commands.
```sh
yarn install
yarn start
```

In a different terminal window for each app.

The visit the [home page](http://localhost:3000/).

### Login details

username/password
default/123
SecondBite/123
AxilCoffee/123
Myer/123